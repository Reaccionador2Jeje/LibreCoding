/* ============================================================
   LibreCoding — learn.js
   Renders the lesson list, the lesson reader and the
   completion state. Depends on core.js and lessons-data.js.
   ============================================================ */
(function () {
  "use strict";

  var LC = window.LC;
  var data = LC.data;
  var state = { currentId: null, query: "" };

  var LAST_KEY = "lc.lastLesson";

  function param(name) {
    try {
      return new URLSearchParams(window.location.search).get(name);
    } catch (err) {
      return null;
    }
  }

  /* ---------- Sidebar ---------- */
  function renderSidebar() {
    var host = document.getElementById("lesson-nav");
    if (!host) return;

    host.innerHTML = "";

    var done = LC.progress.count();
    var total = data.total;
    var percent = total > 0 ? Math.round((done / total) * 100) : 0;

    var line = document.createElement("div");
    line.className = "lesson-count-line";
    var left = document.createElement("span");
    left.textContent = done + " de " + total + " completadas";
    var right = document.createElement("span");
    right.textContent = percent + "%";
    line.appendChild(left);
    line.appendChild(right);
    host.appendChild(line);

    var bar = document.createElement("div");
    bar.className = "progress";
    var fill = document.createElement("div");
    fill.className = "progress-fill";
    fill.style.width = percent + "%";
    bar.appendChild(fill);
    host.appendChild(bar);

    var query = (state.query || "").toLowerCase().trim();

    data.LANGUAGES.forEach(function (lang) {
      var lessons = data.lessonsByLang(lang.key).filter(function (lesson) {
        if (!query) return true;
        return (
          lesson.title.toLowerCase().indexOf(query) !== -1 ||
          lesson.summary.toLowerCase().indexOf(query) !== -1 ||
          lang.name.toLowerCase().indexOf(query) !== -1
        );
      });

      if (!lessons.length) return;

      var group = document.createElement("div");
      group.className = "lesson-group";

      var title = document.createElement("div");
      title.className = "lesson-group-title";
      var name = document.createElement("span");
      name.textContent = lang.name;
      var count = document.createElement("span");
      count.className = "muted";
      count.textContent =
        lessons.length + (lessons.length === 1 ? " lección" : " lecciones");
      title.appendChild(name);
      title.appendChild(count);
      group.appendChild(title);

      var list = document.createElement("ul");
      list.className = "lesson-list";

      lessons.forEach(function (lesson) {
        var item = document.createElement("li");
        var link = document.createElement("a");
        link.href = "aprender.html?lesson=" + encodeURIComponent(lesson.id);

        if (lesson.id === state.currentId) {
          link.setAttribute("aria-current", "true");
        }
        if (LC.progress.isDone(lesson.id)) {
          link.classList.add("is-done");
        }

        var check = document.createElement("span");
        check.className = "lesson-check";
        check.textContent = "\u2713";
        check.setAttribute("aria-hidden", "true");

        var label = document.createElement("span");
        label.textContent = lesson.title;

        link.appendChild(check);
        link.appendChild(label);
        item.appendChild(link);
        list.appendChild(item);
      });

      group.appendChild(list);
      host.appendChild(group);
    });

    if (query && !host.querySelector(".lesson-group")) {
      var empty = document.createElement("p");
      empty.className = "lesson-empty";
      empty.textContent =
        "No hay lecciones que coincidan con \"" + state.query.trim() + "\".";
      host.appendChild(empty);
    }
  }

  /* ---------- Counters ---------- */
  function renderCounts() {
    var languageCount = 0;

    data.LANGUAGES.forEach(function (lang) {
      if (lang.available && data.lessonsByLang(lang.key).length) {
        languageCount++;
      }
    });

    document.querySelectorAll("[data-lesson-count]").forEach(function (el) {
      el.textContent = String(data.total);
    });

    document.querySelectorAll("[data-language-count]").forEach(function (el) {
      el.textContent = String(languageCount);
    });
  }

  /* ---------- Content blocks ---------- */
  function buildBlock(block) {
    var el;

    switch (block.t) {
      case "p":
        el = document.createElement("p");
        el.textContent = block.text;
        return el;

      case "h2":
        el = document.createElement("h2");
        el.textContent = block.text;
        return el;

      case "h3":
        el = document.createElement("h3");
        el.textContent = block.text;
        return el;

      case "ul":
      case "ol":
        el = document.createElement(block.t);
        (block.items || []).forEach(function (text) {
          var li = document.createElement("li");
          li.textContent = text;
          el.appendChild(li);
        });
        return el;

      case "code":
        el = document.createElement("div");
        el.className = "code-block";
        var pre = document.createElement("pre");
        var code = document.createElement("code");
        code.textContent = block.text;
        if (block.label) {
          pre.setAttribute("aria-label", "Ejemplo de código " + block.label);
        }
        pre.appendChild(code);
        el.appendChild(pre);
        return el;

      case "note":
        el = document.createElement("div");
        el.className = "callout";
        var textWrap = document.createElement("div");
        var strong = document.createElement("strong");
        strong.textContent = block.title || "Nota";
        var p = document.createElement("p");
        p.textContent = block.text;
        textWrap.appendChild(strong);
        textWrap.appendChild(p);
        el.appendChild(textWrap);
        return el;

      default:
        return null;
    }
  }

  /* ---------- Lesson pane ---------- */
  function renderLesson(lessonId) {
    var host = document.getElementById("lesson-content");
    if (!host) return;

    var lesson = data.getLesson(lessonId);
    host.innerHTML = "";

    if (!lesson) {
      var box = document.createElement("div");
      box.className = "notice notice--warn";
      var msg = document.createElement("span");
      msg.textContent =
        "Esa lección no existe. Puede que el enlace esté mal escrito.";
      var back = document.createElement("a");
      back.href = "aprender.html";
      back.textContent = "Volver a las lecciones";
      box.appendChild(msg);
      box.appendChild(back);
      host.appendChild(box);
      return;
    }

    state.currentId = lesson.id;
    LC.store.set(LAST_KEY, lesson.id);
    document.title = lesson.title + " — LibreCoding";

    var lang = data.getLanguage(lesson.lang);
    var isDone = LC.progress.isDone(lesson.id);

    /* Header */
    var header = document.createElement("div");
    header.className = "lesson-header";

    var h1 = document.createElement("h1");
    h1.textContent = lesson.title;
    header.appendChild(h1);

    var meta = document.createElement("div");
    meta.className = "lesson-meta";

    var langBadge = document.createElement("span");
    langBadge.className = "badge badge--brand";
    langBadge.textContent = lang ? lang.name : lesson.lang;
    meta.appendChild(langBadge);

    var levelBadge = document.createElement("span");
    levelBadge.className = "badge";
    levelBadge.textContent = lesson.level;
    meta.appendChild(levelBadge);

    var timeBadge = document.createElement("span");
    timeBadge.className = "badge";
    timeBadge.textContent = lesson.minutes + " min de lectura";
    meta.appendChild(timeBadge);

    if (isDone) {
      var doneBadge = document.createElement("span");
      doneBadge.className = "badge badge--accent";
      doneBadge.textContent = "Completada";
      meta.appendChild(doneBadge);
    }

    header.appendChild(meta);
    host.appendChild(header);

    /* Body */
    var body = document.createElement("div");
    body.className = "lesson-body";

    lesson.body.forEach(function (block) {
      var el = buildBlock(block);
      if (el) body.appendChild(el);
    });

    host.appendChild(body);

    /* Challenge */
    var challenge = document.createElement("div");
    challenge.className = "challenge";

    var ch3 = document.createElement("h3");
    ch3.textContent = "Ponlo en práctica";
    challenge.appendChild(ch3);

    var cp = document.createElement("p");
    cp.textContent = lesson.challenge;
    challenge.appendChild(cp);

    var chRow = document.createElement("div");
    chRow.className = "btn-row";

    if (lesson.practice) {
      var practiceLink = document.createElement("a");
      practiceLink.className = "btn btn--primary";
      practiceLink.href = "editor.html?lesson=" + encodeURIComponent(lesson.id);
      practiceLink.textContent = "Abrir en el editor";
      chRow.appendChild(practiceLink);
    } else {
      var practiceNote = document.createElement("p");
      practiceNote.className = "text-sm muted mb-0";
      practiceNote.textContent =
        "Este lenguaje no se ejecuta en el navegador. Copia los ejemplos y pruébalos en un compilador o intérprete online.";
      chRow.appendChild(practiceNote);
    }

    challenge.appendChild(chRow);
    host.appendChild(challenge);

    /* Complete bar */
    var bar = document.createElement("div");
    bar.className = "lesson-complete-bar";

    var completeBtn = document.createElement("button");
    completeBtn.type = "button";
    completeBtn.className = isDone ? "btn btn--ghost" : "btn btn--primary";
    completeBtn.textContent = isDone
      ? "Completada \u2014 desmarcar"
      : "Marcar como completada";

    completeBtn.addEventListener("click", function () {
      LC.progress.toggle(lesson.id);
      renderSidebar();
      renderLesson(lesson.id);
    });

    bar.appendChild(completeBtn);

    var barNote = document.createElement("span");
    barNote.className = "text-sm muted";
    barNote.textContent = "Tu progreso se guarda solo en este dispositivo.";
    bar.appendChild(barNote);

    host.appendChild(bar);

    /* Prev / next */
    var index = data.indexOfLesson(lesson.id);
    var prev = index > 0 ? data.LESSONS[index - 1] : null;
    var next =
      index >= 0 && index < data.LESSONS.length - 1
        ? data.LESSONS[index + 1]
        : null;

    var nav = document.createElement("div");
    nav.className = "lesson-nav";

    if (prev) {
      var prevLink = document.createElement("a");
      prevLink.className = "btn btn--ghost";
      prevLink.href = "aprender.html?lesson=" + encodeURIComponent(prev.id);
      prevLink.textContent = "\u2190 " + prev.title;
      nav.appendChild(prevLink);
    } else {
      nav.appendChild(document.createElement("span"));
    }

    if (next) {
      var nextLink = document.createElement("a");
      nextLink.className = "btn btn--primary";
      nextLink.href = "aprender.html?lesson=" + encodeURIComponent(next.id);
      nextLink.textContent = next.title + " \u2192";
      nav.appendChild(nextLink);
    } else if (lesson.practice) {
      var endLink = document.createElement("a");
      endLink.className = "btn btn--ghost";
      endLink.href = "editor.html";
      endLink.textContent = "Practicar en el editor";
      nav.appendChild(endLink);
    } else {
      var homeLink = document.createElement("a");
      homeLink.className = "btn btn--ghost";
      homeLink.href = "index.html";
      homeLink.textContent = "Volver al inicio";
      nav.appendChild(homeLink);
    }

    host.appendChild(nav);
  }

  /* ---------- Choose initial lesson ---------- */
  function pickInitialLesson() {
    var requested = param("lesson");
    if (requested && data.getLesson(requested)) return requested;

    var langKey = param("lang");
    if (langKey) {
      var inLang = data.lessonsByLang(langKey);
      if (inLang.length) return inLang[0].id;
    }

    var last = LC.store.get(LAST_KEY, null);
    if (last && data.getLesson(last)) return last;

    var firstUndone = null;
    for (var i = 0; i < data.LESSONS.length; i++) {
      if (!LC.progress.isDone(data.LESSONS[i].id)) {
        firstUndone = data.LESSONS[i].id;
        break;
      }
    }

    return firstUndone || data.LESSONS[0].id;
  }

  /* ---------- Boot ---------- */
  function boot() {
    var initial = pickInitialLesson();
    renderLesson(initial);
    renderSidebar();
    renderCounts();

    var search = document.getElementById("lesson-search");
    if (search) {
      search.addEventListener("input", function () {
        state.query = search.value;
        renderSidebar();
      });
    }

    var reset = document.getElementById("reset-progress");
    if (reset) {
      reset.addEventListener("click", function () {
        var ok = window.confirm(
          "¿Borrar tu progreso? Se marcarán todas las lecciones como pendientes."
        );
        if (!ok) return;
        LC.progress.reset();
        renderSidebar();
        renderLesson(state.currentId || initial);
      });
    }

    // Keep the sidebar in sync if the learner comes back with the back button.
    window.addEventListener("popstate", function () {
      renderLesson(pickInitialLesson());
      renderSidebar();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

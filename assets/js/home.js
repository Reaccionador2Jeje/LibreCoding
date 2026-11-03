/* ============================================================
   LibreCoding — home.js
   Renders the language grid and the progress summary on the
   landing page. Depends on core.js and lessons-data.js.
   ============================================================ */
(function () {
  "use strict";

  var LC = window.LC;
  var data = LC.data;

  /* ---------- Language grid ---------- */
  function renderLanguages() {
    var grid = document.getElementById("lang-grid");
    if (!grid) return;

    // Remove the <noscript> fallback: JS is clearly working.
    var noscript = grid.querySelector("noscript");
    if (noscript) noscript.remove();

    var frag = document.createDocumentFragment();

    data.LANGUAGES.forEach(function (lang) {
      var count = data.lessonsByLang(lang.key).length;

      if (lang.available && count > 0) {
        var a = document.createElement("a");
        a.className = "lang-card";
        a.href = "aprender.html?lang=" + encodeURIComponent(lang.key);
        a.innerHTML =
          '<div class="lang-card-top">' +
          '<span class="lang-name"></span>' +
          '<span class="lang-sigil"></span>' +
          "</div>" +
          "<p></p>" +
          '<span class="badge badge--brand"></span>';

        a.querySelector(".lang-name").textContent = lang.name;
        a.querySelector(".lang-sigil").textContent = lang.sigil;
        a.querySelector("p").textContent = lang.blurb;
        a.querySelector(".badge").textContent =
          count === 1 ? "1 lección" : count + " lecciones";
        a.setAttribute(
          "data-search",
          (lang.name + " " + lang.blurb).toLowerCase()
        );
        frag.appendChild(a);
      } else {
        var box = document.createElement("div");
        box.className = "lang-card is-locked";
        box.innerHTML =
          '<div class="lang-card-top">' +
          '<span class="lang-name"></span>' +
          '<span class="lang-sigil"></span>' +
          "</div>" +
          "<p></p>" +
          '<span class="badge">Próximamente</span>';

        box.querySelector(".lang-name").textContent = lang.name;
        box.querySelector(".lang-sigil").textContent = lang.sigil;
        box.querySelector("p").textContent = lang.blurb;
        box.setAttribute(
          "data-search",
          (lang.name + " " + lang.blurb).toLowerCase()
        );
        frag.appendChild(box);
      }
    });

    grid.appendChild(frag);

    var countEl = document.getElementById("lang-count");
    if (countEl) {
      var available = data.LANGUAGES.filter(function (lang) {
        return lang.available && data.lessonsByLang(lang.key).length > 0;
      }).length;
      countEl.textContent =
        available + (available === 1 ? " lenguaje" : " lenguajes");
    }

    var search = document.getElementById("lang-search");
    var empty = document.getElementById("lang-empty");

    if (search) {
      search.addEventListener("input", function () {
        var query = search.value.toLowerCase().trim();
        var visible = 0;

        grid.querySelectorAll(".lang-card").forEach(function (card) {
          var match =
            !query ||
            (card.getAttribute("data-search") || "").indexOf(query) !== -1;
          card.hidden = !match;
          if (match) visible++;
        });

        if (empty) empty.hidden = visible !== 0 || !query;
      });
    }
  }

  /* ---------- Lesson counters ---------- */
  function renderCounts() {
    document.querySelectorAll("[data-lesson-count]").forEach(function (el) {
      el.textContent = String(data.total);
    });
  }

  /* ---------- Progress summary ---------- */
  function renderProgress() {
    var fill = document.getElementById("home-progress-fill");
    var text = document.getElementById("home-progress-text");
    var pct = document.getElementById("home-progress-pct");
    var desc = document.getElementById("progress-desc");
    var title = document.getElementById("progress-title");
    var cta = document.getElementById("progress-cta");

    if (!fill || !text || !pct) return;

    var done = LC.progress.count();
    var total = data.total;
    var percent = total > 0 ? Math.round((done / total) * 100) : 0;

    fill.style.width = percent + "%";
    text.textContent = done + " de " + total + " lecciones";
    pct.textContent = percent + "%";

    if (done === 0) {
      if (desc) {
        desc.textContent =
          "Todavía no has completado ninguna lección. Empieza por la primera.";
      }
      if (cta) cta.textContent = "Empezar";
      return;
    }

    // Find the next lesson that is not done yet, to send the learner there.
    var nextLesson = null;
    for (var i = 0; i < data.LESSONS.length; i++) {
      if (!LC.progress.isDone(data.LESSONS[i].id)) {
        nextLesson = data.LESSONS[i];
        break;
      }
    }

    if (title) title.textContent = "Tu progreso: " + percent + "%";

    if (!nextLesson) {
      if (desc) {
        desc.textContent =
          "Has completado todas las lecciones disponibles. Ya puedes practicar libremente en el editor.";
      }
      if (cta) {
        cta.textContent = "Ir al editor";
        cta.href = "editor.html";
      }
      return;
    }

    if (desc) {
      desc.textContent =
        "Siguiente: " + nextLesson.title + " (" + nextLesson.minutes + " min).";
    }
    if (cta) {
      cta.textContent = "Continuar";
      cta.href = "aprender.html?lesson=" + encodeURIComponent(nextLesson.id);
    }
  }

  function boot() {
    renderLanguages();
    renderCounts();
    renderProgress();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

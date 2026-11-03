/* ============================================================
   LibreCoding — community.js
   A local-only feed. There is no server yet, so every post
   lives in this browser's localStorage. The UI is honest about
   that: nothing is uploaded and nobody else can see it.
   Depends on core.js.
   ============================================================ */
(function () {
  "use strict";

  var LC = window.LC;
  var POSTS_KEY = "lc.feed.posts";
  var LIKES_KEY = "lc.feed.likes";
  var NAME_KEY = "lc.feed.name";
  var MAX_TEXT = 280;
  var MAX_CODE = 600;

  var feedEl = document.getElementById("feed");
  var nameEl = document.getElementById("composer-name");
  var textEl = document.getElementById("composer-text");
  var codeEl = document.getElementById("composer-code");
  var countEl = document.getElementById("composer-count");
  var submitEl = document.getElementById("composer-submit");
  var avatarEl = document.getElementById("composer-avatar");

  if (!feedEl || !textEl) return;

  /* ---------- Seed content ---------- */
  function seedPosts() {
    var now = Date.now();
    return [
      {
        id: "seed-1",
        author: "LibreCoding",
        text:
          "Bienvenido al muro. Esto es una demostración local: tus publicaciones se quedan en tu navegador y nadie más las ve. Cuando exista el servidor, este aviso desaparecerá.",
        code: "",
        at: now - 1000 * 60 * 60 * 26,
        seed: true
      },
      {
        id: "seed-2",
        author: "Ada",
        text:
          "Primera página terminada. Me costó entender que hay que cerrar cada etiqueta, pero ya sale.",
        code: "<h1>Mi primera página</h1>\n<p>Hecho con LibreCoding</p>",
        at: now - 1000 * 60 * 60 * 5,
        seed: true
      },
      {
        id: "seed-3",
        author: "Sam",
        text:
          "Truco: si un color de CSS no se aplica, casi siempre es que falta el punto y coma en la línea anterior.",
        code: "",
        at: now - 1000 * 60 * 42,
        seed: true
      }
    ];
  }

  /* ---------- State ---------- */
  function loadPosts() {
    var stored = LC.store.get(POSTS_KEY, null);
    if (Array.isArray(stored) && stored.length) return stored;

    var seeded = seedPosts();
    LC.store.set(POSTS_KEY, seeded);
    return seeded;
  }

  function savePosts(posts) {
    LC.store.set(POSTS_KEY, posts);
  }

  function loadLikes() {
    var likes = LC.store.get(LIKES_KEY, {});
    return likes && typeof likes === "object" ? likes : {};
  }

  function loadName() {
    var name = LC.store.get(NAME_KEY, "");
    return typeof name === "string" ? name : "";
  }

  /* ---------- Rendering ---------- */
  function initials(name) {
    var clean = String(name || "?").trim();
    if (!clean) return "?";
    return clean.charAt(0).toUpperCase();
  }

  function relativeTime(timestamp) {
    var diff = Date.now() - timestamp;
    var minute = 60 * 1000;
    var hour = 60 * minute;
    var day = 24 * hour;

    if (diff < minute) return "hace un momento";
    if (diff < hour) {
      var m = Math.floor(diff / minute);
      return "hace " + m + (m === 1 ? " minuto" : " minutos");
    }
    if (diff < day) {
      var h = Math.floor(diff / hour);
      return "hace " + h + (h === 1 ? " hora" : " horas");
    }
    if (diff < 7 * day) {
      var d = Math.floor(diff / day);
      return "hace " + d + (d === 1 ? " día" : " días");
    }
    return LC.formatDate(timestamp);
  }

  function buildPost(post, likes, myName) {
    var article = document.createElement("article");
    article.className = "card post";

    /* Head */
    var head = document.createElement("div");
    head.className = "post-head";

    var avatar = document.createElement("span");
    avatar.className = "avatar avatar--sm";
    avatar.textContent = initials(post.author);
    avatar.setAttribute("aria-hidden", "true");
    head.appendChild(avatar);

    var who = document.createElement("div");
    var author = document.createElement("div");
    author.className = "post-author";
    author.textContent = post.author || "Anónimo";
    var sub = document.createElement("div");
    sub.className = "post-sub";
    sub.textContent = post.seed ? "Ejemplo de la casa" : "Publicado por ti";
    who.appendChild(author);
    who.appendChild(sub);
    head.appendChild(who);

    var when = document.createElement("span");
    when.className = "post-when";
    when.textContent = relativeTime(post.at || Date.now());
    head.appendChild(when);

    article.appendChild(head);

    /* Body */
    var body = document.createElement("p");
    body.className = "post-body";
    body.textContent = post.text;
    article.appendChild(body);

    /* Code */
    if (post.code) {
      var block = document.createElement("div");
      block.className = "post-code";
      var label = document.createElement("span");
      label.className = "post-code-lang";
      label.textContent = "código";
      block.appendChild(label);
      block.appendChild(document.createTextNode(post.code));
      article.appendChild(block);
    }

    /* Actions */
    var actions = document.createElement("ul");
    actions.className = "post-actions";

    var likeItem = document.createElement("li");
    var likeBtn = document.createElement("button");
    likeBtn.type = "button";
    var liked = !!likes[post.id];
    likeBtn.setAttribute("aria-pressed", liked ? "true" : "false");
    likeBtn.textContent = (liked ? "\u2665 " : "\u2661 ") + (liked ? "Te gusta" : "Me gusta");
    likeBtn.addEventListener("click", function () {
      var current = loadLikes();
      if (current[post.id]) {
        delete current[post.id];
      } else {
        current[post.id] = true;
      }
      LC.store.set(LIKES_KEY, current);
      render();
    });
    likeItem.appendChild(likeBtn);
    actions.appendChild(likeItem);

    var isMine = !post.seed && post.author === myName;
    if (isMine) {
      var deleteItem = document.createElement("li");
      var deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.textContent = "Borrar";
      deleteBtn.addEventListener("click", function () {
        var ok = window.confirm("¿Borrar esta publicación? No se puede deshacer.");
        if (!ok) return;
        var posts = loadPosts().filter(function (item) {
          return item.id !== post.id;
        });
        savePosts(posts);
        render();
      });
      deleteItem.appendChild(deleteBtn);
      actions.appendChild(deleteItem);
    }

    article.appendChild(actions);
    return article;
  }

  function render() {
    var posts = loadPosts();
    var likes = loadLikes();
    var myName = loadName() || "Tú";

    // Newest first.
    var ordered = posts.slice().sort(function (a, b) {
      return (b.at || 0) - (a.at || 0);
    });

    feedEl.innerHTML = "";

    if (!ordered.length) {
      var empty = document.createElement("div");
      empty.className = "card feed-empty";
      var h3 = document.createElement("h3");
      h3.textContent = "El muro está vacío";
      var p = document.createElement("p");
      p.className = "mb-0";
      p.textContent = "Escribe la primera publicación arriba. Nadie se va a reír.";
      empty.appendChild(h3);
      empty.appendChild(p);
      feedEl.appendChild(empty);
      return;
    }

    var frag = document.createDocumentFragment();
    ordered.forEach(function (post) {
      frag.appendChild(buildPost(post, likes, myName));
    });
    feedEl.appendChild(frag);
  }

  /* ---------- Composer ---------- */
  function updateCount() {
    var length = textEl.value.length;
    if (countEl) {
      countEl.textContent = length + " / " + MAX_TEXT;
      countEl.classList.toggle("is-over", length > MAX_TEXT);
    }
    if (submitEl) {
      submitEl.disabled = textEl.value.trim().length === 0;
    }
  }

  function updateAvatar() {
    if (!avatarEl) return;
    avatarEl.textContent = initials(nameEl ? nameEl.value : "T");
  }

  textEl.addEventListener("input", updateCount);

  if (nameEl) {
    nameEl.value = loadName();
    updateAvatar();

    nameEl.addEventListener("input", function () {
      LC.store.set(NAME_KEY, nameEl.value.trim().slice(0, 24));
      updateAvatar();
    });
  }

  if (submitEl) {
    submitEl.addEventListener("click", function () {
      var text = textEl.value.trim();
      if (!text) return;

      var posts = loadPosts();
      posts.push({
        id: "p-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        author: (nameEl ? nameEl.value.trim() : "") || "Anónimo",
        text: text.slice(0, MAX_TEXT),
        code: codeEl ? codeEl.value.trim().slice(0, MAX_CODE) : "",
        at: Date.now(),
        seed: false
      });

      savePosts(posts);

      textEl.value = "";
      if (codeEl) codeEl.value = "";
      updateCount();
      render();

      // Move focus to the new post so keyboard and screen reader users land on it.
      var first = feedEl.querySelector(".post");
      if (first) {
        first.setAttribute("tabindex", "-1");
        first.focus();
      }
    });
  }

  /* ---------- Boot ---------- */
  function boot() {
    updateCount();
    render();

    if (!LC.store.available()) {
      var warn = document.createElement("div");
      warn.className = "notice notice--warn";
      var span = document.createElement("span");
      span.textContent =
        "Tu navegador no permite guardar datos: las publicaciones desaparecerán al cerrar la página.";
      warn.appendChild(span);
      feedEl.parentNode.insertBefore(warn, feedEl);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

/* ============================================================
   LibreCoding — community.js
   Feed with two modes:
     - server: talks to the Go API (shared wall)
     - local:  localStorage fallback (static hosting / file://)
   The UI never lies about which mode is active.
   Depends on core.js and api.js.
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
  var statusEl = document.getElementById("community-status");
  var noticeEl = document.getElementById("community-notice");

  if (!feedEl || !textEl) return;

  var state = {
    mode: "local",
    remote: null,
    busy: false
  };

  /* ---------- Seed content (local mode) ---------- */
  function seedPosts() {
    var now = Date.now();
    return [
      {
        id: "seed-1",
        author: "LibreCoding",
        text:
          "Bienvenido al muro. En modo local tus publicaciones se quedan en tu navegador. Arranca el servidor Go para compartirlas con la comunidad.",
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

  /* ---------- Local storage ---------- */
  function loadLocalPosts() {
    var stored = LC.store.get(POSTS_KEY, null);
    if (Array.isArray(stored) && stored.length) return stored;

    var seeded = seedPosts();
    LC.store.set(POSTS_KEY, seeded);
    return seeded;
  }

  function saveLocalPosts(posts) {
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

  /* ---------- Helpers ---------- */
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

  function normalizeRemote(post) {
    var when = Date.parse(post.createdAt || "");
    return {
      id: post.id,
      author: post.author || "Anónimo",
      text: post.text || "",
      code: post.code || "",
      at: isNaN(when) ? Date.now() : when,
      seed: !!post.seed,
      remote: true,
      mine: !!post.mine,
      likes: Number(post.likes || 0),
      liked: !!post.liked
    };
  }

  /* ---------- Mode UI ---------- */
  function setMode(mode) {
    state.mode = mode;

    if (statusEl) {
      statusEl.setAttribute("data-mode", mode);
      statusEl.textContent =
        mode === "server"
          ? "Servidor conectado"
          : mode === "offline"
            ? "Modo local"
            : "Comprobando servidor";
    }

    if (noticeEl) {
      noticeEl.className =
        "notice mb-4 " + (mode === "server" ? "notice--brand" : "notice--warn");
      noticeEl.innerHTML =
        mode === "server"
          ? "<span><strong>Servidor de comunidad activo.</strong> Lo que publiques se guarda en el servidor Go y lo puede ver el resto de la comunidad. Usa un apodo, nunca tu nombre completo ni datos personales.</span>"
          : "<span><strong>Modo local.</strong> El servidor Go no está disponible, así que el muro funciona solo en este navegador: nadie más verá lo que publiques. No escribas datos personales reales — ni tuyos ni de otras personas.</span>";
    }
  }

  /* ---------- Rendering ---------- */
  function activePosts() {
    if (state.mode === "server" && state.remote) return state.remote;
    return loadLocalPosts();
  }

  function buildPost(post, likes, myName) {
    var article = document.createElement("article");
    article.className = "card post";

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
    sub.textContent = post.seed
      ? "Ejemplo de la casa"
      : post.remote
        ? post.mine
          ? "Tu publicación"
          : "Miembro de la comunidad"
        : "Publicado por ti";
    who.appendChild(author);
    who.appendChild(sub);
    head.appendChild(who);

    var when = document.createElement("span");
    when.className = "post-when";
    when.textContent = relativeTime(post.at || Date.now());
    head.appendChild(when);

    article.appendChild(head);

    var body = document.createElement("p");
    body.className = "post-body";
    body.textContent = post.text;
    article.appendChild(body);

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

    var actions = document.createElement("ul");
    actions.className = "post-actions";

    var likeItem = document.createElement("li");
    var likeBtn = document.createElement("button");
    likeBtn.type = "button";
    var liked = post.remote ? post.liked : !!likes[post.id];
    var likeCount = post.remote ? post.likes : 0;

    likeBtn.setAttribute("aria-pressed", liked ? "true" : "false");
    likeBtn.textContent = post.remote
      ? (liked ? "\u2665 " : "\u2661 ") +
        (likeCount > 0 ? likeCount : "Me gusta")
      : (liked ? "\u2665 " : "\u2661 ") + (liked ? "Te gusta" : "Me gusta");

    likeBtn.addEventListener("click", function () {
      if (state.mode === "server" && post.remote) {
        likeBtn.disabled = true;
        LC.api
          .toggleLike(post.id)
          .then(refreshRemote)
          .catch(function () {
            likeBtn.disabled = false;
          });
        return;
      }

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

    var isMine = post.remote ? post.mine : !post.seed && post.author === myName;
    if (isMine) {
      var deleteItem = document.createElement("li");
      var deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.textContent = "Borrar";
      deleteBtn.addEventListener("click", function () {
        var ok = window.confirm("¿Borrar esta publicación? No se puede deshacer.");
        if (!ok) return;

        if (state.mode === "server" && post.remote) {
          deleteBtn.disabled = true;
          LC.api
            .deletePost(post.id)
            .then(refreshRemote)
            .catch(function () {
              deleteBtn.disabled = false;
            });
          return;
        }

        var posts = loadLocalPosts().filter(function (item) {
          return item.id !== post.id;
        });
        saveLocalPosts(posts);
        render();
      });
      deleteItem.appendChild(deleteBtn);
      actions.appendChild(deleteItem);
    }

    article.appendChild(actions);
    return article;
  }

  function render() {
    var posts = activePosts();
    var likes = loadLikes();
    var myName = loadName() || "Tú";

    var ordered = posts.slice().sort(function (a, b) {
      return (b.at || 0) - (a.at || 0);
    });

    feedEl.innerHTML = "";

    if (!ordered.length) {
      var empty = document.createElement("div");
      empty.className = "card feed-empty";
      var h3 = document.createElement("h3");
      h3.textContent = state.mode === "server" ? "El muro está vacío" : "El muro local está vacío";
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

  function refreshRemote() {
    if (!LC.api) return Promise.reject(new Error("API no disponible"));

    return LC.api.listPosts().then(function (posts) {
      state.remote = posts.map(normalizeRemote);
      setMode("server");
      render();
      loadStats();
    });
  }

  var statsCard = document.getElementById("community-stats-card");

  function loadStats() {
    if (!LC.api || !statsCard) return Promise.resolve();

    return LC.api
      .stats()
      .then(function (stats) {
        statsCard.hidden = false;
        statsCard.querySelectorAll("[data-stat]").forEach(function (el) {
          var key = el.getAttribute("data-stat");
          el.textContent = String(Number(stats[key]) || 0);
        });
      })
      .catch(function () {
        statsCard.hidden = true;
      });
  }

  /* ---------- Composer ---------- */
  function updateCount() {
    var length = textEl.value.length;
    if (countEl) {
      countEl.textContent = length + " / " + MAX_TEXT;
      countEl.classList.toggle("is-over", length > MAX_TEXT);
    }
    if (submitEl) {
      submitEl.disabled = state.busy || textEl.value.trim().length === 0;
    }
  }

  function updateAvatar() {
    if (!avatarEl) return;
    avatarEl.textContent = initials(nameEl ? nameEl.value : "T");
  }

  function submitPost() {
    var text = textEl.value.trim();
    if (!text || state.busy) return;

    var author = (nameEl ? nameEl.value.trim() : "") || "Anónimo";
    var code = codeEl ? codeEl.value.trim().slice(0, MAX_CODE) : "";

    if (state.mode === "server") {
      state.busy = true;
      if (submitEl) {
        submitEl.disabled = true;
        submitEl.textContent = "Publicando...";
      }

      LC.api
        .createPost({ author: author, text: text.slice(0, MAX_TEXT), code: code })
        .then(function () {
          textEl.value = "";
          if (codeEl) codeEl.value = "";
          updateCount();
          return refreshRemote();
        })
        .catch(function (err) {
          var message = err && err.message ? err.message : "No se pudo publicar.";
          window.alert(message);
        })
        .then(function () {
          state.busy = false;
          if (submitEl) {
            submitEl.textContent = "Publicar";
          }
          updateCount();
        });
      return;
    }

    var posts = loadLocalPosts();
    posts.push({
      id: "p-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
      author: author,
      text: text.slice(0, MAX_TEXT),
      code: code,
      at: Date.now(),
      seed: false
    });

    saveLocalPosts(posts);
    textEl.value = "";
    if (codeEl) codeEl.value = "";
    updateCount();
    render();

    var first = feedEl.querySelector(".post");
    if (first) {
      first.setAttribute("tabindex", "-1");
      first.focus();
    }
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
    submitEl.addEventListener("click", submitPost);
  }

  /* ---------- Boot ---------- */
  function boot() {
    updateCount();
    render();

    if (!LC.store || !LC.store.available()) {
      var warn = document.createElement("div");
      warn.className = "notice notice--warn";
      var span = document.createElement("span");
      span.textContent =
        "Tu navegador no permite guardar datos: en modo local las publicaciones desaparecerán al cerrar la página.";
      warn.appendChild(span);
      feedEl.parentNode.insertBefore(warn, feedEl);
    }

    if (!LC.api) {
      setMode("offline");
      return;
    }

    setMode("local");
    LC.api
      .health()
      .then(function () {
        return refreshRemote();
      })
      .catch(function () {
        setMode("offline");
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

/* ============================================================
   LibreCoding — playground.js
   A small HTML/CSS/JS editor with a live, sandboxed preview
   and a console bridge. Depends on core.js and lessons-data.js.

   SECURITY NOTE: the preview iframe uses sandbox="allow-scripts"
   WITHOUT allow-same-origin on purpose. That gives the frame an
   opaque origin, so user code cannot read localStorage, cookies
   or the parent page. Never add allow-same-origin: combined with
   allow-scripts it lets the frame remove its own sandbox.
   ============================================================ */
(function () {
  "use strict";

  var LC = window.LC;
  var CODE_KEY = "lc.playground";
  var MAX_LINES = 200;

  var FILES = [
    { key: "html", label: "index.html" },
    { key: "css", label: "estilos.css" },
    { key: "js", label: "script.js" }
  ];

  var DEFAULT_CODE = {
    html:
      '<h1>Hola, mundo</h1>\n<p>Escribe código y pulsa <strong>Ejecutar</strong>.</p>\n<button id="btn">Púlsame</button>',
    css:
      "body {\n  font-family: sans-serif;\n  padding: 24px;\n  color: #16181f;\n}\n\nh1 {\n  color: #4f37e0;\n}\n\nbutton {\n  padding: 8px 14px;\n  border-radius: 8px;\n  border: 1px solid #c9cee0;\n  background: #ece9ff;\n  cursor: pointer;\n}",
    js:
      'const boton = document.getElementById("btn");\n\nboton.addEventListener("click", () => {\n  console.log("Has pulsado el botón");\n  boton.textContent = "¡Otra vez!";\n});\n\nconsole.log("Editor listo");\n'
  };

  var editor = document.getElementById("pg-editor");
  var preview = document.getElementById("pg-preview");
  var consoleBox = document.getElementById("pg-console");
  var statusEl = document.getElementById("pg-status");
  var fileLabel = document.getElementById("pg-file-label");
  var fileDot = document.getElementById("pg-file-dot");
  var titleEl = document.getElementById("pg-title");
  var gutter = document.getElementById("pg-gutter");
  var positionEl = document.getElementById("pg-position");
  var countEl = document.getElementById("pg-count");
  var shareBtn = document.getElementById("pg-share");
  var shareState = document.getElementById("pg-share-state");
  var serverStatus = document.getElementById("editor-server-status");
  var saveState = document.getElementById("pg-save-state");
  var lessonPanel = document.getElementById("pg-lesson-panel");
  var lessonTitleEl = document.getElementById("pg-lesson-title");
  var lessonChallengeEl = document.getElementById("pg-lesson-challenge");
  var lessonLinkEl = document.getElementById("pg-lesson-link");
  var previewStage = document.querySelector(".pg-preview-stage");
  var focusBtn = document.getElementById("pg-focus");

  if (!editor || !preview || !consoleBox) return;

  var code = loadCode();
  var activeTab = "html";
  var lineCount = 0;

  /* ---------- Persistence ---------- */
  function loadCode() {
    var stored = LC.store.get(CODE_KEY, null);

    if (stored && typeof stored === "object") {
      return {
        html: typeof stored.html === "string" ? stored.html : DEFAULT_CODE.html,
        css: typeof stored.css === "string" ? stored.css : DEFAULT_CODE.css,
        js: typeof stored.js === "string" ? stored.js : DEFAULT_CODE.js
      };
    }

    return {
      html: DEFAULT_CODE.html,
      css: DEFAULT_CODE.css,
      js: DEFAULT_CODE.js
    };
  }

  function setSaveState(mode, text) {
    if (!saveState) return;
    saveState.setAttribute("data-mode", mode);
    saveState.textContent = text;
  }

  function formatBytes(bytes) {
    if (bytes < 1024) return bytes + " B";
    return (bytes / 1024).toFixed(1).replace(".0", "") + " KB";
  }

  function updateFileSizes() {
    document.querySelectorAll("[data-file-size]").forEach(function (el) {
      var key = el.getAttribute("data-file-size");
      var value = String(code[key] || "");
      el.textContent = formatBytes(value.length);
    });
  }

  var save = LC.debounce(function () {
    var ok = LC.store.set(CODE_KEY, code);
    setSaveState(ok ? "saved" : "error", ok ? "Guardado" : "Sin guardar");
  }, 450);

  /* ---------- Lesson preload ---------- */
  function preloadFromLesson() {
    var id;
    try {
      id = new URLSearchParams(window.location.search).get("lesson");
    } catch (err) {
      return false;
    }
    if (!id) return false;

    var lesson = LC.data.getLesson(id);
    if (!lesson || !lesson.practice) return false;

    code = {
      html: lesson.practice.html || "",
      css: lesson.practice.css || "",
      js: lesson.practice.js || ""
    };
    LC.store.set(CODE_KEY, code);

    if (titleEl) titleEl.textContent = lesson.title;
    if (lessonPanel && lessonTitleEl && lessonChallengeEl) {
      lessonTitleEl.textContent = lesson.title;
      lessonChallengeEl.textContent = lesson.challenge || "";
      lessonPanel.hidden = false;
      if (lessonLinkEl) {
        lessonLinkEl.href =
          "aprender.html?lesson=" + encodeURIComponent(lesson.id);
      }
    }

    return true;
  }

  /* ---------- Server / snippets ---------- */
  function setShareState(mode, text) {
    if (!shareState) return;
    shareState.setAttribute("data-mode", mode);
    shareState.textContent = text;
  }

  function setServerState(online) {
    if (serverStatus) {
      serverStatus.textContent = online
        ? "Servidor: conectado"
        : "Servidor: modo local";
      serverStatus.className = online ? "badge badge--accent" : "badge";
    }

    if (shareBtn) {
      shareBtn.disabled = !online;
      shareBtn.title = online
        ? "Crear un enlace permanente a este proyecto"
        : "Arranca el servidor Go para compartir proyectos";
    }

    if (!online) {
      setShareState("idle", "Solo local");
    }
  }

  function loadFromSnippet() {
    if (!LC.api) return Promise.resolve(false);

    var id;
    try {
      id = new URLSearchParams(window.location.search).get("snippet");
    } catch (err) {
      return Promise.resolve(false);
    }
    if (!id) return Promise.resolve(false);

    return LC.api.getSnippet(id).then(function (snippet) {
      code = {
        html: snippet.html || "",
        css: snippet.css || "",
        js: snippet.js || ""
      };
      LC.store.set(CODE_KEY, code);
      if (titleEl) titleEl.textContent = snippet.title || "Proyecto compartido";
      setShareState("saved", "Enlace cargado");
      setSaveState("saved", "Guardado");
      updateFileSizes();
      return true;
    });
  }

  var gallery = document.getElementById("pg-gallery");
  var galleryGrid = document.getElementById("pg-gallery-grid");

  function galleryDate(value) {
    var date = new Date(value);
    if (isNaN(date.getTime())) return "";
    try {
      return new Intl.DateTimeFormat("es", {
        day: "numeric",
        month: "short"
      }).format(date);
    } catch (err) {
      return "";
    }
  }

  function renderGallery(items) {
    if (!gallery || !galleryGrid) return;
    gallery.hidden = false;
    galleryGrid.innerHTML = "";

    if (!items.length) {
      var empty = document.createElement("p");
      empty.className = "pg-gallery-empty";
      empty.textContent =
        "Todavía no hay proyectos compartidos. Sé la primera persona en publicar uno.";
      galleryGrid.appendChild(empty);
      return;
    }

    var frag = document.createDocumentFragment();
    items.forEach(function (item) {
      var card = document.createElement("a");
      card.className = "pg-gallery-card";
      card.href = "editor.html?snippet=" + encodeURIComponent(item.id);

      var title = document.createElement("strong");
      title.textContent = item.title || "Proyecto sin título";

      var meta = document.createElement("span");
      meta.className = "pg-gallery-meta";
      var date = galleryDate(item.createdAt);
      var size = Math.max(1, Math.round((Number(item.size) || 0) / 1024));
      meta.textContent = (date ? date + " · " : "") + size + " KB";

      card.appendChild(title);
      card.appendChild(meta);
      frag.appendChild(card);
    });
    galleryGrid.appendChild(frag);
  }

  function loadGallery() {
    if (!LC.api) return Promise.resolve();
    return LC.api.listSnippets().then(renderGallery).catch(function () {});
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      try {
        var helper = document.createElement("textarea");
        helper.value = text;
        helper.setAttribute("readonly", "");
        helper.style.position = "fixed";
        helper.style.opacity = "0";
        document.body.appendChild(helper);
        helper.select();
        var ok = document.execCommand("copy");
        document.body.removeChild(helper);
        if (ok) {
          resolve();
        } else {
          reject(new Error("No se pudo copiar"));
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  /* ---------- Console ---------- */
  function clearConsole() {
    consoleBox.innerHTML = "";
    lineCount = 0;
  }

  function addLine(level, text) {
    if (lineCount >= MAX_LINES) return;

    var empty = consoleBox.querySelector(".pg-console-empty");
    if (empty) empty.remove();

    var row = document.createElement("div");
    row.className = "pg-console-line";
    row.setAttribute("data-level", level || "log");

    var tag = document.createElement("span");
    tag.className = "lvl";
    tag.textContent = level === "error" ? "error" : level === "warn" ? "aviso" : "log";

    var body = document.createElement("span");
    body.textContent = text;

    row.appendChild(tag);
    row.appendChild(body);
    consoleBox.appendChild(row);

    lineCount++;
    consoleBox.scrollTop = consoleBox.scrollHeight;
  }

  /* ---------- Preview ---------- */
  function buildDocument() {
    var bridge = [
      "(function () {",
      "  function send(level, args) {",
      "    var parts = [];",
      "    for (var i = 0; i < args.length; i++) {",
      "      var a = args[i];",
      "      if (typeof a === 'string') { parts.push(a); }",
      "      else if (a instanceof Error) { parts.push(a.name + ': ' + a.message); }",
      "      else {",
      "        try { parts.push(JSON.stringify(a)); }",
      "        catch (e) { parts.push(String(a)); }",
      "      }",
      "    }",
      "    parent.postMessage({ lc: true, level: level, text: parts.join(' ') }, '*');",
      "  }",
      "  ['log', 'info', 'warn', 'error', 'debug'].forEach(function (m) {",
      "    var orig = console[m] ? console[m].bind(console) : function () {};",
      "    console[m] = function () {",
      "      var level = (m === 'info' || m === 'debug') ? 'log' : m;",
      "      send(level, Array.prototype.slice.call(arguments));",
      "      orig.apply(null, arguments);",
      "    };",
      "  });",
      "  window.addEventListener('error', function (e) {",
      "    send('error', [e.message + ' (linea ' + e.lineno + ')']);",
      "  });",
      "  window.addEventListener('unhandledrejection', function (e) {",
      "    var r = e.reason;",
      "    send('error', ['Promesa rechazada: ' + (r && r.message ? r.message : r)]);",
      "  });",
      "})();"
    ].join("\n");

    return (
      "<!doctype html>\n<html lang=\"es\">\n<head>\n<meta charset=\"utf-8\">\n" +
      "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
      "<style>\n" +
      code.css +
      "\n</style>\n<script>\n" +
      bridge +
      "\n</" +
      "script>\n</head>\n<body>\n" +
      code.html +
      "\n<script>\n" +
      code.js +
      "\n</" +
      "script>\n</body>\n</html>"
    );
  }

  function run() {
    clearConsole();
    preview.srcdoc = buildDocument();
    if (statusEl) statusEl.textContent = "Ejecutado ahora";
  }

  preview.addEventListener("load", function () {
    if (statusEl) statusEl.textContent = "Listo";
  });

  /* ---------- Console messages from the frame ---------- */
  window.addEventListener("message", function (event) {
    // Only accept messages from our own preview frame.
    if (event.source !== preview.contentWindow) return;

    var msg = event.data;
    if (!msg || msg.lc !== true) return;

    addLine(msg.level, msg.text);
  });

  /* ---------- Tabs ---------- */
  function selectTab(key) {
    activeTab = key;
    editor.value = code[key] || "";

    document.querySelectorAll(".pg-tab").forEach(function (tab) {
      tab.setAttribute(
        "aria-selected",
        tab.getAttribute("data-tab") === key ? "true" : "false"
      );
    });

    document.querySelectorAll(".pg-file-item").forEach(function (item) {
      item.classList.toggle("is-active", item.getAttribute("data-file") === key);
    });

    var file = null;
    for (var i = 0; i < FILES.length; i++) {
      if (FILES[i].key === key) file = FILES[i];
    }
    if (fileLabel && file) fileLabel.textContent = file.label;
    if (fileDot) fileDot.className = "pg-dot pg-dot--" + key;

    updateGutter();
    updateEditorMeta();
    updateFileSizes();
    editor.focus();
  }

  /* ---------- Gutter and cursor ---------- */
  function lineCountOf(text) {
    return String(text).split("\n").length;
  }

  function updateGutter() {
    if (!gutter) return;

    var lines = lineCountOf(editor.value);
    var numbers = "";
    for (var i = 1; i <= lines; i++) {
      numbers += i + (i < lines ? "\n" : "");
    }

    gutter.textContent = numbers;
    gutter.scrollTop = editor.scrollTop;
  }

  function updateEditorMeta() {
    var value = editor.value;
    var position = editor.selectionStart || 0;
    var before = value.slice(0, position);
    var line = lineCountOf(before);
    var lastBreak = before.lastIndexOf("\n");
    var column = position - lastBreak;

    if (positionEl) {
      positionEl.textContent = "Línea " + line + ", col. " + column;
    }

    if (countEl) {
      var chars = value.length;
      countEl.textContent =
        chars + (chars === 1 ? " carácter" : " caracteres");
    }
  }

  document.querySelectorAll(".pg-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      selectTab(tab.getAttribute("data-tab"));
    });
  });

  document.querySelectorAll(".pg-file-item").forEach(function (item) {
    item.addEventListener("click", function () {
      selectTab(item.getAttribute("data-file"));
    });
  });

  document.querySelectorAll(".pg-device").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var device = btn.getAttribute("data-device") || "full";
      if (previewStage) previewStage.setAttribute("data-device", device);
      document.querySelectorAll(".pg-device").forEach(function (other) {
        other.setAttribute(
          "aria-pressed",
          other === btn ? "true" : "false"
        );
      });
    });
  });

  var refreshBtn = document.getElementById("pg-refresh");
  if (refreshBtn) refreshBtn.addEventListener("click", run);

  if (focusBtn) {
    focusBtn.addEventListener("click", function () {
      var active = document.body.classList.toggle("is-editor-focus");
      focusBtn.setAttribute("aria-pressed", active ? "true" : "false");
      focusBtn.textContent = active ? "Salir" : "Enfoque";
      window.setTimeout(run, 80);
    });
  }

  /* ---------- Editing ---------- */
  editor.addEventListener("input", function () {
    code[activeTab] = editor.value;
    setSaveState("saving", "Guardando...");
    save();
    updateGutter();
    updateEditorMeta();
    updateFileSizes();
    if (statusEl) statusEl.textContent = "Sin ejecutar";
  });

  editor.addEventListener("scroll", function () {
    if (gutter) gutter.scrollTop = editor.scrollTop;
  });

  ["keyup", "click", "select", "focus"].forEach(function (eventName) {
    editor.addEventListener(eventName, updateEditorMeta);
  });

  // Tab key inserts two spaces instead of leaving the editor.
  editor.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
      event.preventDefault();
      var start = editor.selectionStart;
      var end = editor.selectionEnd;
      editor.value =
        editor.value.slice(0, start) + "  " + editor.value.slice(end);
      editor.selectionStart = editor.selectionEnd = start + 2;
      code[activeTab] = editor.value;
      setSaveState("saving", "Guardando...");
      save();
      updateGutter();
      updateEditorMeta();
      updateFileSizes();
    }

    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      run();
    }
  });

  /* ---------- Buttons ---------- */
  var runBtn = document.getElementById("pg-run");
  if (runBtn) runBtn.addEventListener("click", run);

  var clearBtn = document.getElementById("pg-clear");
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      clearConsole();
      var empty = document.createElement("p");
      empty.className = "pg-console-empty";
      empty.textContent = "Los mensajes de console.log aparecerán aquí.";
      consoleBox.appendChild(empty);
    });
  }

  var copyBtn = document.getElementById("pg-copy");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var text = code[activeTab] || "";
      var original = copyBtn.textContent;

      function announce() {
        copyBtn.textContent = "Copiado";
        window.setTimeout(function () {
          copyBtn.textContent = original;
        }, 1400);
      }

      function fallbackCopy() {
        try {
          editor.focus();
          editor.select();
          document.execCommand("copy");
          announce();
        } catch (err) {
          copyBtn.textContent = "No se pudo";
          window.setTimeout(function () {
            copyBtn.textContent = original;
          }, 1400);
        }
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(announce, fallbackCopy);
      } else {
        fallbackCopy();
      }
    });
  }

  var downloadBtn = document.getElementById("pg-download");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      var title = titleEl ? titleEl.textContent : "proyecto";
      var name = String(title)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || "proyecto";
      var blob = new Blob([buildDocument()], { type: "text/html" });
      var objectUrl = URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.href = objectUrl;
      link.download = name + ".html";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.setTimeout(function () {
        URL.revokeObjectURL(objectUrl);
      }, 1000);
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      if (!LC.api || !LC.api.online) return;

      var original = "Compartir";
      shareBtn.disabled = true;
      shareBtn.textContent = "Guardando...";
      setShareState("idle", "Guardando...");

      LC.api
        .createSnippet({
          title: titleEl ? titleEl.textContent : "Proyecto de LibreCoding",
          html: code.html,
          css: code.css,
          js: code.js
        })
        .then(function (snippet) {
          var link = new URL(window.location.href);
          link.search = "";
          link.hash = "";
          link.searchParams.set("snippet", snippet.id);

          if (window.history && window.history.replaceState) {
            window.history.replaceState(null, "", link.toString());
          }

          setShareState("saved", "Enlace listo");
          shareBtn.textContent = "Enlace copiado";
          loadGallery();

          return copyText(link.toString()).catch(function () {
            window.prompt("Copia el enlace de tu proyecto:", link.toString());
          });
        })
        .catch(function (err) {
          var message = err && err.message ? err.message : "No se pudo guardar.";
          setShareState("error", "Error al guardar");
          window.alert(message);
        })
        .then(function () {
          window.setTimeout(function () {
            shareBtn.disabled = false;
            shareBtn.textContent = original;
          }, 1600);
        });
    });
  }

  var resetBtn = document.getElementById("pg-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      var ok = window.confirm(
        "¿Reiniciar el código a la plantilla inicial? Se perderá lo que hayas escrito."
      );
      if (!ok) return;

      code = {
        html: DEFAULT_CODE.html,
        css: DEFAULT_CODE.css,
        js: DEFAULT_CODE.js
      };
      LC.store.set(CODE_KEY, code);
      setSaveState("saved", "Guardado");
      selectTab(activeTab);
      run();
    });
  }

  document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      run();
    }
  });

  /* ---------- Boot ---------- */
  function boot() {
    preloadFromLesson();
    updateFileSizes();
    setSaveState("saved", "Guardado");
    selectTab("html");
    run();

    setServerState(false);

    if (LC.api) {
      LC.api
        .health()
        .then(function () {
          setServerState(true);
          loadGallery();
          return loadFromSnippet()
            .then(function (loaded) {
              if (loaded) {
                selectTab("html");
                run();
                if (statusEl) statusEl.textContent = "Enlace cargado";
              }
            })
            .catch(function () {
              setShareState("error", "Enlace no encontrado");
            });
        })
        .catch(function () {
          setServerState(false);
        });
    }

    if (!LC.store.available()) {
      addLine(
        "warn",
        "Tu navegador no permite guardar datos: el código se perderá al cerrar."
      );
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

/* ============================================================
   LibreCoding — core.js
   Shared behaviour: theme, mobile nav, local storage helpers,
   and lesson progress. Classic script on purpose (no modules)
   so the site works from file:// without a server.
   ============================================================ */
(function () {
  "use strict";

  var THEME_KEY = "lc.theme";
  var PROGRESS_KEY = "lc.progress";

  /* ---------- Safe storage ----------
     localStorage can throw (private mode, file:// in some browsers),
     so every access is wrapped. The app must never crash over it. */
  var store = {
    get: function (key, fallback) {
      try {
        var raw = window.localStorage.getItem(key);
        if (raw === null) return fallback;
        return JSON.parse(raw);
      } catch (err) {
        return fallback;
      }
    },
    set: function (key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (err) {
        return false;
      }
    },
    remove: function (key) {
      try {
        window.localStorage.removeItem(key);
      } catch (err) {
        /* ignore */
      }
    },
    available: function () {
      try {
        var probe = "__lc_probe__";
        window.localStorage.setItem(probe, "1");
        window.localStorage.removeItem(probe);
        return true;
      } catch (err) {
        return false;
      }
    }
  };

  /* ---------- Theme ---------- */
  function getTheme() {
    var stored = store.get(THEME_KEY, null);
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    store.set(THEME_KEY, theme);
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Activar tema claro" : "Activar tema oscuro"
      );
    });
  }

  function initTheme() {
    setTheme(getTheme());
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next =
          document.documentElement.getAttribute("data-theme") === "dark"
            ? "light"
            : "dark";
        setTheme(next);
      });
    });
  }

  /* ---------- Mobile navigation ---------- */
  function initNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a") && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---------- Progress ---------- */
  function dayKey(date) {
    var d = new Date(date);
    return (
      d.getFullYear() +
      "-" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(d.getDate()).padStart(2, "0")
    );
  }

  var progress = {
    all: function () {
      var data = store.get(PROGRESS_KEY, {});
      return data && typeof data === "object" ? data : {};
    },
    isDone: function (lessonId) {
      return !!this.all()[lessonId];
    },
    set: function (lessonId, done) {
      var data = this.all();
      if (done) {
        data[lessonId] = Date.now();
      } else {
        delete data[lessonId];
      }
      store.set(PROGRESS_KEY, data);
      syncStats();
      return data;
    },
    toggle: function (lessonId) {
      return this.set(lessonId, !this.isDone(lessonId));
    },
    count: function () {
      return Object.keys(this.all()).length;
    },
    xp: function () {
      return this.count() * 10;
    },
    streak: function () {
      var data = this.all();
      var days = {};
      Object.keys(data).forEach(function (id) {
        var when = Number(data[id]);
        if (when > 0) days[dayKey(when)] = true;
      });

      var cursor = new Date();
      cursor.setHours(0, 0, 0, 0);

      if (!days[dayKey(cursor)]) {
        cursor.setDate(cursor.getDate() - 1);
      }

      var total = 0;
      while (days[dayKey(cursor)]) {
        total++;
        cursor.setDate(cursor.getDate() - 1);
      }
      return total;
    },
    reset: function () {
      store.remove(PROGRESS_KEY);
      syncStats();
    }
  };

  function syncStats() {
    var streak = progress.streak();
    var xp = progress.xp();
    document.querySelectorAll("[data-streak]").forEach(function (el) {
      el.textContent = String(streak);
    });
    document.querySelectorAll("[data-xp]").forEach(function (el) {
      el.textContent = String(xp);
    });
  }

  /* ---------- Small helpers ---------- */
  function formatDate(timestamp) {
    try {
      return new Intl.DateTimeFormat("es", {
        day: "numeric",
        month: "short",
        year: "numeric"
      }).format(new Date(timestamp));
    } catch (err) {
      return "";
    }
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function debounce(fn, wait) {
    var timer = null;
    return function () {
      var args = arguments;
      var self = this;
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        fn.apply(self, args);
      }, wait);
    };
  }

  /* ---------- Boot ---------- */
  function boot() {
    initTheme();
    initNav();
    syncStats();

    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });

    // Warn once if storage is unavailable, so the UI never lies about saving.
    if (!store.available()) {
      document.querySelectorAll("[data-storage-warning]").forEach(function (el) {
        el.hidden = false;
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  // Public surface used by the page scripts.
  window.LC = {
    store: store,
    progress: progress,
    setTheme: setTheme,
    getTheme: getTheme,
    syncStats: syncStats,
    formatDate: formatDate,
    escapeHtml: escapeHtml,
    debounce: debounce
  };
})();

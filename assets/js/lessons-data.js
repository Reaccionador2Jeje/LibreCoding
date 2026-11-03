/* ============================================================
   LibreCoding — lessons-data.js
   The lesson catalogue. Plain data, no imports, so it can be
   loaded from file:// as a classic script before learn.js and
   playground.js.

   Lesson shape:
     id       unique slug, used in URLs (?lesson=html-1)
     lang     language key, must exist in LANGUAGES
     title    lesson title
     level    Principiante | Intermedio | Avanzado
     minutes  rough reading time
     summary  one-line description used in listings
     body     blocks rendered by learn.js
              { t: "p",     text }
              { t: "h2",    text }
              { t: "h3",    text }
              { t: "ul",    items: [] }
              { t: "ol",    items: [] }
              { t: "code",  text, label }
              { t: "note",  title, text }
     practice { html, css, js } starter code for the playground
     challenge free-text exercise description
   ============================================================ */
(function () {
  "use strict";

  var LANGUAGES = [
    {
      key: "html",
      name: "HTML",
      sigil: "</>",
      blurb: "La estructura de toda página web.",
      available: true
    },
    {
      key: "css",
      name: "CSS",
      sigil: "{ }",
      blurb: "Colores, espacios y diseño.",
      available: true
    },
    {
      key: "js",
      name: "JavaScript",
      sigil: "JS",
      blurb: "Haz que la página reaccione.",
      available: true
    },
    {
      key: "python",
      name: "Python",
      sigil: "py",
      blurb: "Sintaxis clara para empezar.",
      available: false
    },
    {
      key: "lua",
      name: "Lua",
      sigil: "lua",
      blurb: "Pequeño y usado en videojuegos.",
      available: false
    },
    {
      key: "java",
      name: "Java",
      sigil: "jv",
      blurb: "Muy usado en apps y Android.",
      available: false
    }
  ];

  var LESSONS = [
    /* ---------------- HTML ---------------- */
    {
      id: "html-1",
      lang: "html",
      title: "Tu primera página web",
      level: "Principiante",
      minutes: 8,
      summary: "Qué es una etiqueta y cómo crear un título y un párrafo.",
      body: [
        {
          t: "p",
          text:
            "Una página web es un archivo de texto con instrucciones. El navegador lo lee y dibuja lo que esas instrucciones dicen. Esas instrucciones se llaman etiquetas, y el lenguaje se llama HTML."
        },
        {
          t: "p",
          text:
            "Cada etiqueta empieza con un signo menor que y termina con un signo mayor que, y casi siempre viene en parejas: una que abre y otra que cierra. La de cierre lleva una barra."
        },
        {
          t: "code",
          label: "HTML",
          text: "<h1>Hola, mundo</h1>\n<p>Esta es mi primera página.</p>"
        },
        {
          t: "p",
          text:
            "h1 significa encabezado de nivel 1: el título más importante. p significa párrafo. El navegador le da formato automáticamente: el h1 sale grande y en negrita, el p sale como texto normal."
        },
        {
          t: "h2",
          text: "Estructura mínima"
        },
        {
          t: "p",
          text:
            "Un archivo HTML completo lleva siempre las mismas tres piezas. head es información sobre la página que no se ve; body es todo lo que sí se ve."
        },
        {
          t: "code",
          label: "HTML",
          text:
            '<!doctype html>\n<html lang="es">\n  <head>\n    <meta charset="utf-8">\n    <title>Mi página</title>\n  </head>\n  <body>\n    <h1>Hola, mundo</h1>\n  </body>\n</html>'
        },
        {
          t: "note",
          title: "Si algo no se ve",
          text:
            "Revisa que cada etiqueta abierta tenga su cierre. Un <p> sin </p> es el error más común cuando empiezas."
        }
      ],
      practice: {
        html: "<h1>Hola, mundo</h1>\n<p>Esta es mi primera página.</p>",
        css: "body {\n  font-family: sans-serif;\n  padding: 20px;\n}",
        js: ""
      },
      challenge:
        "Cambia el texto del título por tu nombre, y añade un segundo párrafo que cuente algo que te guste."
    },
    {
      id: "html-2",
      lang: "html",
      title: "Listas y enlaces",
      level: "Principiante",
      minutes: 10,
      summary: "Agrupa información en listas y conecta páginas con enlaces.",
      body: [
        {
          t: "p",
          text:
            "Las listas sirven para agrupar cosas. ul es una lista sin orden, donde los elementos no van numerados. ol es una lista ordenada, donde sí."
        },
        {
          t: "code",
          label: "HTML",
          text:
            "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>"
        },
        {
          t: "p",
          text:
            "Cada elemento de la lista va dentro de un li. Los li siempre van dentro de un ul o un ol, nunca sueltos."
        },
        {
          t: "h2",
          text: "Enlaces"
        },
        {
          t: "p",
          text:
            "Un enlace se crea con la etiqueta a, y su destino se guarda en un atributo llamado href. Un atributo es información extra que va dentro de la etiqueta de apertura."
        },
        {
          t: "code",
          label: "HTML",
          text:
            '<a href="https://es.wikipedia.org/wiki/HTML">Aprende sobre HTML</a>'
        },
        {
          t: "note",
          title: "El texto del enlace importa",
          text:
            'Escribe "Guía de Python" y no "haz clic aquí". Un enlace que dice a dónde va se entiende sin ver el resto de la página.'
        }
      ],
      practice: {
        html:
          "<h1>Lenguajes que quiero aprender</h1>\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>\n\n<p>\n  <a href=\"https://developer.mozilla.org/es/\">Documentación</a>\n</p>",
        css: "body {\n  font-family: sans-serif;\n  padding: 20px;\n  line-height: 1.6;\n}",
        js: ""
      },
      challenge:
        "Convierte la lista en una lista ordenada (ol) y añade un enlace más que apunte a tu página favorita."
    },
    {
      id: "html-3",
      lang: "html",
      title: "Imágenes y atributos",
      level: "Principiante",
      minutes: 10,
      summary: "Añade imágenes y entiende qué es un atributo.",
      body: [
        {
          t: "p",
          text:
            "La etiqueta img muestra una imagen. Es de las pocas que no se cierran: no existe un cierre para ella, porque no contiene texto dentro."
        },
        {
          t: "code",
          label: "HTML",
          text:
            '<img src="foto.jpg" alt="Un gato durmiendo sobre un teclado">'
        },
        {
          t: "ul",
          items: [
            "src dice dónde está la imagen.",
            "alt describe la imagen con palabras. Se muestra si la imagen no carga, y los lectores de pantalla lo leen en voz alta."
          ]
        },
        {
          t: "note",
          title: "alt no es opcional",
          text:
            "Si una persona no puede ver la imagen, el texto de alt es todo lo que tiene. Escribe qué se ve, no \"imagen\"."
        },
        {
          t: "h2",
          text: "Texto con énfasis"
        },
        {
          t: "p",
          text:
            "strong marca algo importante y suele verse en negrita. em marca énfasis y suele verse en cursiva. No son adornos: dicen algo sobre el significado del texto."
        },
        {
          t: "code",
          label: "HTML",
          text: "<p>Esto es <strong>muy importante</strong> y esto <em>matiza</em>.</p>"
        }
      ],
      practice: {
        html:
          '<h1>Mi rincón</h1>\n<p>Me gusta <strong>programar</strong> y <em>aprender</em>.</p>\n\n<img\n  src="https://placehold.co/320x180/4f37e0/ffffff?text=LibreCoding"\n  alt="Rectángulo morado con el texto LibreCoding"\n  width="320"\n  height="180">',
        css: "body {\n  font-family: sans-serif;\n  padding: 20px;\n}\n\nimg {\n  border-radius: 10px;\n  max-width: 100%;\n}",
        js: ""
      },
      challenge:
        "Añade una segunda imagen y escribe un texto alternativo que describa de verdad lo que se ve."
    },

    /* ---------------- CSS ---------------- */
    {
      id: "css-1",
      lang: "css",
      title: "Colores y tipografía",
      level: "Principiante",
      minutes: 10,
      summary: "Cambia el aspecto del texto con propiedades de CSS.",
      body: [
        {
          t: "p",
          text:
            "HTML pone el contenido; CSS decide cómo se ve. Una regla de CSS tiene dos partes: el selector, que dice a qué elemento afecta, y el bloque, con las propiedades entre llaves."
        },
        {
          t: "code",
          label: "CSS",
          text:
            "h1 {\n  color: #4f37e0;\n  font-size: 40px;\n  text-align: center;\n}"
        },
        {
          t: "ul",
          items: [
            "color cambia el color del texto.",
            "font-size cambia el tamaño.",
            "text-align mueve el texto a la izquierda, al centro o a la derecha."
          ]
        },
        {
          t: "h2",
          text: "Tres formas de escribir un color"
        },
        {
          t: "code",
          label: "CSS",
          text:
            "color: red;              /* por nombre */\ncolor: #4f37e0;          /* hexadecimal */\ncolor: rgb(79, 55, 224); /* rojo, verde, azul */"
        },
        {
          t: "note",
          title: "Cada propiedad termina en punto y coma",
          text:
            "Si olvidas el punto y coma, la propiedad siguiente puede no aplicarse. Es el fallo número uno al empezar."
        }
      ],
      practice: {
        html:
          "<h1>LibreCoding</h1>\n<p>Aprende a programar, poco a poco.</p>\n<p class=\"destacado\">Este párrafo tiene su propia clase.</p>",
        css:
          "body {\n  font-family: sans-serif;\n  padding: 24px;\n  background: #f6f7fb;\n}\n\nh1 {\n  color: #4f37e0;\n  font-size: 36px;\n}\n\n.destacado {\n  color: #0f9e96;\n  font-weight: bold;\n}",
        js: ""
      },
      challenge:
        "Cambia el color de fondo del body y el tamaño del h1. Después añade una regla nueva para p que cambie el color a gris."
    },
    {
      id: "css-2",
      lang: "css",
      title: "Cajas, márgenes y relleno",
      level: "Principiante",
      minutes: 12,
      summary: "Entiende el modelo de caja, la idea central de CSS.",
      body: [
        {
          t: "p",
          text:
            "En CSS todo elemento es una caja. Cada caja tiene cuatro capas, de dentro hacia fuera: el contenido, el relleno (padding), el borde (border) y el margen (margin)."
        },
        {
          t: "code",
          label: "CSS",
          text:
            ".tarjeta {\n  padding: 20px;      /* espacio dentro */\n  border: 1px solid #ccc;\n  margin: 16px;       /* espacio fuera */\n}"
        },
        {
          t: "h2",
          text: "La diferencia que más cuesta"
        },
        {
          t: "ul",
          items: [
            "padding es espacio interno: separa el texto del borde.",
            "margin es espacio externo: separa la caja de las demás."
          ]
        },
        {
          t: "p",
          text:
            "Es la misma diferencia que entre la distancia de tu cabeza al sombrero puesto (padding) y la distancia a la persona de al lado (margin)."
        },
        {
          t: "note",
          title: "box-sizing",
          text:
            "Con border-box, el ancho que escribes incluye el padding y el borde. Casi todo el mundo lo pone en todo desde el principio para no volverse loco sumando."
        }
      ],
      practice: {
        html:
          '<div class="tarjeta">\n  <h2>Soy una tarjeta</h2>\n  <p>Tengo padding dentro y margin fuera.</p>\n</div>\n\n<div class="tarjeta">\n  <h2>Y yo otra</h2>\n  <p>Entre las dos hay margen.</p>\n</div>',
        css:
          "* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: sans-serif;\n  padding: 20px;\n  background: #f6f7fb;\n}\n\n.tarjeta {\n  padding: 20px;\n  border: 1px solid #d8dbe8;\n  border-radius: 12px;\n  margin: 16px 0;\n  background: white;\n}",
        js: ""
      },
      challenge:
        "Sube el padding a 40px y observa cómo el contenido se aleja del borde. Después cambia el margin y fíjate en lo contrario: las cajas se separan entre sí."
    },
    {
      id: "css-3",
      lang: "css",
      title: "Flexbox en diez minutos",
      level: "Intermedio",
      minutes: 12,
      summary: "Alinea elementos en fila o columna sin pelear.",
      body: [
        {
          t: "p",
          text:
            "Flexbox coloca los hijos de un contenedor en fila, y reparte el espacio entre ellos. Se activa con una sola línea."
        },
        {
          t: "code",
          label: "CSS",
          text:
            ".fila {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  justify-content: space-between;\n}"
        },
        {
          t: "ul",
          items: [
            "display: flex convierte al contenedor en una fila.",
            "gap pone espacio entre elementos, sin márgenes raros.",
            "justify-content reparte el espacio horizontal.",
            "align-items alinea verticalmente."
          ]
        },
        {
          t: "note",
          title: "Empieza siempre por flex",
          text:
            "Antes de tocar margin y position, prueba display: flex. Resuelve la mayoría de los problemas de alineación con menos código."
        }
      ],
      practice: {
        html:
          '<nav class="fila">\n  <strong>LibreCoding</strong>\n  <div class="fila">\n    <a href="#">Aprender</a>\n    <a href="#">Editor</a>\n    <a href="#">Comunidad</a>\n  </div>\n</nav>',
        css:
          "body {\n  font-family: sans-serif;\n  margin: 0;\n}\n\n.fila {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  justify-content: space-between;\n}\n\nnav {\n  padding: 16px 20px;\n  background: #16181f;\n  color: white;\n}\n\nnav a {\n  color: #b9bece;\n  text-decoration: none;\n}",
        js: ""
      },
      challenge:
        "Cambia justify-content a center y luego a space-around. Compara las tres versiones antes de decidir cuál queda mejor."
    },

    /* ---------------- JavaScript ---------------- */
    {
      id: "js-1",
      lang: "js",
      title: "Variables y console.log",
      level: "Principiante",
      minutes: 10,
      summary: "Guarda datos y muéstralos en la consola.",
      body: [
        {
          t: "p",
          text:
            "JavaScript añade comportamiento. Una variable es una caja con nombre donde guardas un valor para usarlo después."
        },
        {
          t: "code",
          label: "JavaScript",
          text:
            'let nombre = "Ada";\nconst edad = 12;\n\nconsole.log("Hola, " + nombre);'
        },
        {
          t: "ul",
          items: [
            "let crea una variable que puede cambiar.",
            "const crea una que no puedes reasignar.",
            "console.log muestra un valor en la consola, que en este editor aparece abajo a la derecha."
          ]
        },
        {
          t: "note",
          title: "Usa const por defecto",
          text:
            "Cambia a let solo cuando necesites reasignar. Menos cambios posibles significa menos errores."
        }
      ],
      practice: {
        html: '<h1 id="salida">Hola</h1>\n<p>Mira la consola del editor.</p>',
        css: "body {\n  font-family: sans-serif;\n  padding: 20px;\n}",
        js:
          'let nombre = "Ada";\nconst edad = 12;\n\nconsole.log("Hola, " + nombre);\nconsole.log("Tienes " + edad + " años");\n\nconst titulo = document.getElementById("salida");\ntitulo.textContent = "Hola, " + nombre;\n'
      },
      challenge:
        "Crea una constante con tu lenguaje favorito y muéstrala en la consola. Después cambia el texto del h1 usando textContent."
    },
    {
      id: "js-2",
      lang: "js",
      title: "Condiciones: if y else",
      level: "Principiante",
      minutes: 12,
      summary: "Toma decisiones según los datos.",
      body: [
        {
          t: "p",
          text:
            "Un if ejecuta código solo si una condición es verdadera. Si no lo es, se ejecuta el else."
        },
        {
          t: "code",
          label: "JavaScript",
          text:
            'const nota = 7;\n\nif (nota >= 5) {\n  console.log("Aprobado");\n} else {\n  console.log("A seguir practicando");\n}'
        },
        {
          t: "h2",
          text: "Comparadores"
        },
        {
          t: "ul",
          items: [
            "=== es igual (y del mismo tipo).",
            "!== es distinto.",
            ">= mayor o igual, <= menor o igual.",
            "> y < mayor y menor estrictos."
          ]
        },
        {
          t: "note",
          title: "Usa === y no ==",
          text:
            "Dos signos iguales comparan de forma extraña y convierten tipos por su cuenta. Tres signos comparan de verdad."
        }
      ],
      practice: {
        html: '<h1 id="resultado">?</h1>',
        css: "body {\n  font-family: sans-serif;\n  padding: 20px;\n}",
        js:
          'const nota = 7;\nconst resultado = document.getElementById("resultado");\n\nif (nota >= 5) {\n  resultado.textContent = "Aprobado con " + nota;\n  console.log("Aprobado");\n} else {\n  resultado.textContent = "A seguir practicando";\n  console.log("Suspenso");\n}\n'
      },
      challenge:
        "Añade un else if para la nota 10 que muestre \"Matrícula\". Prueba con 10, con 7 y con 3."
    }
  ];

  /* Lookup helpers, kept here so every page uses the same source. */
  function lessonsByLang(langKey) {
    return LESSONS.filter(function (lesson) {
      return lesson.lang === langKey;
    });
  }

  function getLesson(id) {
    for (var i = 0; i < LESSONS.length; i++) {
      if (LESSONS[i].id === id) return LESSONS[i];
    }
    return null;
  }

  function getLanguage(key) {
    for (var i = 0; i < LANGUAGES.length; i++) {
      if (LANGUAGES[i].key === key) return LANGUAGES[i];
    }
    return null;
  }

  function indexOfLesson(id) {
    for (var i = 0; i < LESSONS.length; i++) {
      if (LESSONS[i].id === id) return i;
    }
    return -1;
  }

  window.LC = window.LC || {};
  window.LC.data = {
    LANGUAGES: LANGUAGES,
    LESSONS: LESSONS,
    lessonsByLang: lessonsByLang,
    getLesson: getLesson,
    getLanguage: getLanguage,
    indexOfLesson: indexOfLesson,
    total: LESSONS.length
  };
})();

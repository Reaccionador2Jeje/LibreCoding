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
     practice { html, css, js } optional starter code for the playground.
              Only languages the browser can run (HTML, CSS, JS) have it.
              Lessons without practice show the code and the challenge only.
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
      blurb: "Sintaxis clara para empezar y crear.",
      available: true
    },
    {
      key: "scratch",
      name: "Scratch",
      sigil: "Sc",
      blurb: "Programa con bloques, sin escribir código.",
      available: true
    },
    {
      key: "lua",
      name: "Lua",
      sigil: "lua",
      blurb: "Pequeño y usado en videojuegos.",
      available: true
    },
    {
      key: "java",
      name: "Java",
      sigil: "jv",
      blurb: "Muy usado en apps y Android.",
      available: true
    },
    {
      key: "c",
      name: "C",
      sigil: "C",
      blurb: "La base de casi todo lo que usas.",
      available: true
    },
    {
      key: "cpp",
      name: "C++",
      sigil: "C++",
      blurb: "Rápido y usado en videojuegos.",
      available: true
    },
    {
      key: "csharp",
      name: "C#",
      sigil: "C#",
      blurb: "Para videojuegos con Unity y apps.",
      available: true
    },
    {
      key: "sql",
      name: "SQL",
      sigil: "SQL",
      blurb: "Para consultar y organizar datos.",
      available: true
    },
    {
      key: "typescript",
      name: "TypeScript",
      sigil: "TS",
      blurb: "JavaScript con tipos para proyectos grandes.",
      available: true
    },
    {
      key: "ruby",
      name: "Ruby",
      sigil: "rb",
      blurb: "Sintaxis amable y muy legible.",
      available: true
    },
    {
      key: "php",
      name: "PHP",
      sigil: "php",
      blurb: "El lenguaje de muchas páginas web.",
      available: true
    },
    {
      key: "go",
      name: "Go",
      sigil: "Go",
      blurb: "Sencillo y rápido para servidores.",
      available: true
    },
    {
      key: "kotlin",
      name: "Kotlin",
      sigil: "Kt",
      blurb: "El lenguaje moderno de Android.",
      available: true
    },
    {
      key: "swift",
      name: "Swift",
      sigil: "Sw",
      blurb: "Para crear apps de iPhone y iPad.",
      available: true
    },
    {
      key: "rust",
      name: "Rust",
      sigil: "Rs",
      blurb: "Seguro y muy rápido, sin sorpresas.",
      available: true
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
    },

    /* ---------------- Python ---------------- */
    {
      id: "python-1",
      lang: "python",
      title: "Tu primer programa en Python",
      level: "Principiante",
      minutes: 8,
      summary: "Muestra texto, guarda datos y escribe tus primeros comentarios.",
      body: [
        {
          t: "p",
          text:
            "Python es un lenguaje pensado para leerse fácil. No hace falta declarar el tipo de cada dato, y muchas instrucciones se entienden casi como frases normales."
        },
        {
          t: "code",
          label: "Python",
          text:
            'print("Hola, mundo")\n\nnombre = "Ada"\nedad = 12\n\nprint("Hola,", nombre)\nprint("Tienes", edad, "años")'
        },
        {
          t: "p",
          text:
            "print muestra cosas en la pantalla. Los nombres como nombre y edad son variables: cajas con nombre donde guardas un valor para usarlo más tarde."
        },
        {
          t: "ul",
          items: [
            "Los textos van entre comillas: \"Ada\" es texto, 12 es un número.",
            "Puedes separar varios valores con comas dentro de print.",
            "Las líneas que empiezan por # son comentarios: Python no las ejecuta."
          ]
        },
        {
          t: "h2",
          text: "Un programa es una lista de pasos"
        },
        {
          t: "p",
          text:
            "Python ejecuta las instrucciones de arriba abajo. Si cambias el valor de una variable y luego la usas, verás el valor nuevo."
        },
        {
          t: "note",
          title: "Sin punto y coma",
          text:
            "En Python no terminas cada línea con punto y coma. Solo escribes una instrucción por línea y pulsas Enter."
        }
      ],
      challenge:
        "Cambia el nombre y la edad por los tuyos, escribe una frase distinta y añade un comentario con el lenguaje que más te gustaría aprender."
    },
    {
      id: "python-2",
      lang: "python",
      title: "Condiciones y bucles en Python",
      level: "Principiante",
      minutes: 12,
      summary: "Toma decisiones con if y repite tareas con for y while.",
      body: [
        {
          t: "p",
          text:
            "Un if ejecuta un bloque solo si una condición es verdadera. En Python, el bloque va debajo y lleva sangría (espacios al principio de la línea)."
        },
        {
          t: "code",
          label: "Python",
          text:
            'edad = 12\n\nif edad >= 13:\n    print("Puedes usar la versión para mayores")\nelse:\n    print("Bienvenido a la versión infantil")\n\nfor numero in range(1, 6):\n    print(numero)'
        },
        {
          t: "ul",
          items: [
            "if abre una condición y else es lo que pasa si no se cumple.",
            "Los dos puntos : marcan el inicio del bloque.",
            "La sangría de cuatro espacios indica qué líneas pertenecen al bloque.",
            "range(1, 6) genera los números del 1 al 5."
          ]
        },
        {
          t: "h2",
          text: "Repetir hasta que pase algo"
        },
        {
          t: "code",
          label: "Python",
          text:
            'vidas = 3\n\nwhile vidas > 0:\n    print("Te quedan", vidas, "vidas")\n    vidas = vidas - 1\n\nprint("Fin del juego")'
        },
        {
          t: "note",
          title: "La sangría no es decoración",
          text:
            "En Python, la sangría forma parte del lenguaje. Si una línea del bloque no está alineada, el programa falla o hace algo distinto."
        }
      ],
      challenge:
        "Cambia el límite de range para contar del 1 al 10. Después prueba un while que cuente hacia atrás desde 5 hasta 1."
    },
    {
      id: "python-3",
      lang: "python",
      title: "Listas y funciones",
      level: "Intermedio",
      minutes: 14,
      summary: "Guarda varios valores juntos y crea tus propios comandos.",
      body: [
        {
          t: "p",
          text:
            "Una lista guarda varios valores en orden. Se escribe entre corchetes y separa los elementos con comas."
        },
        {
          t: "code",
          label: "Python",
          text:
            'lenguajes = ["Python", "Lua", "Java"]\nlenguajes.append("Scratch")\n\nfor lenguaje in lenguajes:\n    print(lenguaje)\n\nprint("Total:", len(lenguajes))'
        },
        {
          t: "ul",
          items: [
            "append añade un elemento al final de la lista.",
            "for recorre la lista y guarda cada valor en lenguaje.",
            "len devuelve cuántos elementos hay."
          ]
        },
        {
          t: "h2",
          text: "Funciones: tus propios comandos"
        },
        {
          t: "code",
          label: "Python",
          text:
            'def saludar(nombre):\n    return "Hola, " + nombre\n\ndef sumar(a, b):\n    return a + b\n\nprint(saludar("Ada"))\nprint(sumar(3, 4))'
        },
        {
          t: "p",
          text:
            "def crea una función. Lo que va entre paréntesis son los datos que recibe. return devuelve el resultado para que puedas usarlo en otra parte."
        },
        {
          t: "note",
          title: "return no es print",
          text:
            "print muestra algo en pantalla; return devuelve un valor para seguir trabajando con él. Una función que solo imprime no se puede reutilizar igual."
        }
      ],
      challenge:
        "Crea una función llamada despedir que reciba un nombre y devuelva \"Adiós, \" + nombre. Añade dos lenguajes más a la lista y recórrela."
    },

    /* ---------------- Scratch ---------------- */
    {
      id: "scratch-1",
      lang: "scratch",
      title: "Scratch: programa con bloques",
      level: "Principiante",
      minutes: 8,
      summary: "Mueve un personaje y hazlo hablar usando bloques de colores.",
      body: [
        {
          t: "p",
          text:
            "Scratch no se escribe: se construye arrastrando bloques. Cada bloque es una instrucción, y los bloques encajados se ejecutan en orden."
        },
        {
          t: "code",
          label: "Scratch (bloques)",
          text:
            'al hacer clic en la bandera verde\n  decir "¡Hola, mundo!" durante 2 segundos\n  mover 10 pasos\n  repetir 10\n    siguiente disfraz'
        },
        {
          t: "ul",
          items: [
            "La bandera verde es el evento que arranca el programa.",
            "Los bloques azules mueven al personaje, llamado objeto o sprite.",
            "Los bloques naranjas controlan el orden y las repeticiones.",
            "Los bloques morados cambian el aspecto del objeto."
          ]
        },
        {
          t: "h2",
          text: "El escenario también cuenta"
        },
        {
          t: "p",
          text:
            "Puedes añadir varios objetos y un fondo. Cada objeto tiene sus propios bloques, así que el mismo proyecto puede tener un gato que salta y una pelota que rueda a la vez."
        },
        {
          t: "note",
          title: "Prueba, mira y cambia",
          text:
            "En Scratch no hay errores de escritura: si algo no funciona, cambia un número o el orden de los bloques y vuelve a pulsar la bandera verde."
        }
      ],
      challenge:
        "Haz que tu objeto dé tres vueltas mientras dice su nombre. Después cambia el fondo y el disfraz."
    },
    {
      id: "scratch-2",
      lang: "scratch",
      title: "Scratch: variables y mensajes",
      level: "Principiante",
      minutes: 10,
      summary: "Cuenta puntos y comunica objetos con mensajes.",
      body: [
        {
          t: "p",
          text:
            "Una variable en Scratch es una etiqueta donde guardas un número o un texto. Puedes crear una llamada puntos y mostrarla en el escenario."
        },
        {
          t: "code",
          label: "Scratch (bloques)",
          text:
            'al hacer clic en la bandera verde\n  fijar puntos a 0\n  por siempre\n    si ¿tocando Manzana? entonces\n      cambiar puntos por 1\n      enviar mensaje "punto"\n      esperar 0.5 segundos'
        },
        {
          t: "ul",
          items: [
            "fijar pone un valor inicial; cambiar suma o resta.",
            "si comprueba una condición, por ejemplo si dos objetos se tocan.",
            "enviar mensaje avisa a otros objetos para que hagan algo.",
            "esperar evita que el contador suba miles de veces en un segundo."
          ]
        },
        {
          t: "h2",
          text: "Objetos que colaboran"
        },
        {
          t: "p",
          text:
            "Cuando un objeto envía un mensaje, otros objetos pueden reaccionar con \"al recibir mensaje\". Así puedes hacer que, al comer una manzana, aparezca otra en un sitio nuevo."
        },
        {
          t: "note",
          title: "Nombres claros",
          text:
            "Llama puntos a los puntos y vidas a las vidas. Si usas nombres como variable1 no sabrás qué hace tu programa cuando vuelvas a abrirlo."
        }
      ],
      challenge:
        "Añade una variable vidas que empiece en 3 y baje al tocar un obstáculo. Cuando llegue a 0, envía un mensaje de fin de partida."
    },

    /* ---------------- Lua ---------------- */
    {
      id: "lua-1",
      lang: "lua",
      title: "Lua desde cero",
      level: "Principiante",
      minutes: 8,
      summary: "Escribe mensajes, crea variables y une textos.",
      body: [
        {
          t: "p",
          text:
            "Lua es un lenguaje pequeño y rápido. Se usa dentro de muchos videojuegos, como Roblox, porque ocupa poco y se aprende rápido."
        },
        {
          t: "code",
          label: "Lua",
          text:
            'print("Hola, mundo")\n\nlocal nombre = "Ada"\nlocal edad = 12\n\nprint("Hola, " .. nombre)\nprint("Tienes " .. edad .. " años")'
        },
        {
          t: "ul",
          items: [
            "print muestra un mensaje en la pantalla.",
            "local crea una variable que solo se usa en esa parte del programa.",
            "Los dos puntos .. unen textos, como el signo + une números.",
            "Los comentarios empiezan con dos guiones: --"
          ]
        },
        {
          t: "h2",
          text: "Pocas reglas, muchas posibilidades"
        },
        {
          t: "p",
          text:
            "Lua no necesita punto y coma al final de cada línea. Eso hace que el código se parezca bastante a una lista de instrucciones."
        },
        {
          t: "note",
          title: "nil significa vacío",
          text:
            "Cuando una variable no tiene valor, Lua la trata como nil. Es parecido a decir \"aquí todavía no hay nada\"."
        }
      ],
      challenge:
        "Crea una variable con tu juego favorito y muestra una frase que lo mencione. Después añade un comentario explicando por qué te gusta."
    },
    {
      id: "lua-2",
      lang: "lua",
      title: "Decisiones, bucles y funciones en Lua",
      level: "Intermedio",
      minutes: 12,
      summary: "Haz que el programa elija y repita acciones.",
      body: [
        {
          t: "p",
          text:
            "Lua usa if, elseif y else para decidir. Cada bloque termina con la palabra end."
        },
        {
          t: "code",
          label: "Lua",
          text:
            'local puntuacion = 8\n\nif puntuacion >= 5 then\n  print("¡Ganaste!")\nelse\n  print("Inténtalo otra vez")\nend\n\nfor i = 1, 5 do\n  print(i)\nend'
        },
        {
          t: "ul",
          items: [
            "then marca el inicio del bloque que se ejecuta si se cumple la condición.",
            "end cierra el if y también los bucles y las funciones.",
            "for i = 1, 5 cuenta del 1 al 5.",
            "while repite mientras una condición sea verdadera."
          ]
        },
        {
          t: "h2",
          text: "Funciones reutilizables"
        },
        {
          t: "code",
          label: "Lua",
          text:
            'function saludar(nombre)\n  return "Hola, " .. nombre\nend\n\nlocal mensaje = saludar("Ada")\nprint(mensaje)'
        },
        {
          t: "note",
          title: "Cada bloque necesita su end",
          text:
            "Si abres un if, un for o una function, no olvides cerrarlo con end. Es el error más común cuando empiezas con Lua."
        }
      ],
      challenge:
        "Escribe una función sumar(a, b) que devuelva la suma. Después recorre del 1 al 3 y muestra el resultado de sumar ese número consigo mismo."
    },

    /* ---------------- Java ---------------- */
    {
      id: "java-1",
      lang: "java",
      title: "Tu primera clase en Java",
      level: "Principiante",
      minutes: 10,
      summary: "Crea el método main y muestra texto por pantalla.",
      body: [
        {
          t: "p",
          text:
            "Java organiza el código en clases. Todo programa empieza en un método especial llamado main, que Java busca para saber por dónde arrancar."
        },
        {
          t: "code",
          label: "Java",
          text:
            'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hola, mundo");\n\n    String nombre = "Ada";\n    int edad = 12;\n\n    System.out.println("Hola, " + nombre);\n    System.out.println("Tienes " + edad + " años");\n  }\n}'
        },
        {
          t: "ul",
          items: [
            "public class Main declara la clase principal del programa.",
            "public static void main inicia el programa.",
            "System.out.println muestra texto y salta a la línea siguiente.",
            "Cada instrucción termina en punto y coma."
          ]
        },
        {
          t: "h2",
          text: "Tipos desde el principio"
        },
        {
          t: "p",
          text:
            "En Java cada variable tiene un tipo: String para texto, int para números enteros, double para decimales y boolean para verdadero o falso."
        },
        {
          t: "note",
          title: "Compilar y ejecutar",
          text:
            "Java necesita compilarse antes de ejecutarse. Para practicar puedes usar un compilador online; no hace falta instalarlo en tu primer día."
        }
      ],
      challenge:
        "Cambia el nombre y la edad, añade una variable double con tu altura y muestra una frase que use los tres valores."
    },
    {
      id: "java-2",
      lang: "java",
      title: "Variables y decisiones en Java",
      level: "Intermedio",
      minutes: 12,
      summary: "Usa if, else y for dentro de un programa Java.",
      body: [
        {
          t: "p",
          text:
            "Las condiciones de Java se escriben entre paréntesis y el bloque va entre llaves. Es una estructura muy parecida a la de C, C++ y C#."
        },
        {
          t: "code",
          label: "Java",
          text:
            'public class Main {\n  public static void main(String[] args) {\n    int nota = 7;\n\n    if (nota >= 5) {\n      System.out.println("Aprobado");\n    } else {\n      System.out.println("A seguir practicando");\n    }\n\n    for (int i = 1; i <= 3; i++) {\n      System.out.println("Vuelta " + i);\n    }\n  }\n}'
        },
        {
          t: "ul",
          items: [
            "if ejecuta un bloque si la condición es verdadera.",
            "else se ejecuta cuando la condición del if no se cumple.",
            "for repite un bloque y lleva tres partes: inicio, condición y avance.",
            "i++ suma uno a i cada vuelta."
          ]
        },
        {
          t: "h2",
          text: "Comparar textos"
        },
        {
          t: "code",
          label: "Java",
          text:
            'String lenguaje = "Java";\n\nif (lenguaje.equals("Java")) {\n  System.out.println("¡Buena elección!");\n}'
        },
        {
          t: "note",
          title: "Para textos usa equals",
          text:
            "En Java, == compara objetos y puede dar resultados raros con textos. Para comparar el contenido de dos String se usa equals."
        }
      ],
      challenge:
        "Pide imaginariamente una nota en una variable y muestra \"Matrícula\" si es 10, \"Aprobado\" si es 5 o más y \"Suspenso\" en el resto."
    },

    /* ---------------- C ---------------- */
    {
      id: "c-1",
      lang: "c",
      title: "C: el lenguaje que empezó todo",
      level: "Principiante",
      minutes: 10,
      summary: "Escribe tu primer programa en C y entiende su estructura.",
      body: [
        {
          t: "p",
          text:
            "C es un lenguaje antiguo y muy influyente. Muchos sistemas operativos, videojuegos y lenguajes modernos están construidos con él o inspirados en él."
        },
        {
          t: "code",
          label: "C",
          text:
            '#include <stdio.h>\n\nint main(void) {\n  printf("Hola, mundo\\n");\n\n  int puntos = 10;\n  printf("Puntos: %d\\n", puntos);\n\n  return 0;\n}'
        },
        {
          t: "ul",
          items: [
            "#include <stdio.h> trae las funciones de entrada y salida.",
            "printf muestra texto; \\n significa salto de línea.",
            "%d es un hueco donde se coloca un número entero.",
            "return 0 avisa de que el programa terminó bien."
          ]
        },
        {
          t: "h2",
          text: "Cerca de la máquina"
        },
        {
          t: "p",
          text:
            "C te obliga a pensar en tipos y memoria, pero también te da mucho control. Es una buena segunda parada después de un lenguaje más sencillo."
        },
        {
          t: "note",
          title: "Los corchetes no son adorno",
          text:
            "Cada llave que abres debe cerrarse. Si falta una, el compilador se queja y el programa no se crea."
        }
      ],
      challenge:
        "Añade una variable int con tu edad y muestra una frase usando printf y %d. Después añade un segundo salto de línea al final."
    },

    /* ---------------- C++ ---------------- */
    {
      id: "cpp-1",
      lang: "cpp",
      title: "Hola, mundo en C++",
      level: "Principiante",
      minutes: 10,
      summary: "Crea tu primer programa en C++ y muestra texto.",
      body: [
        {
          t: "p",
          text:
            "C++ nació como una versión de C con más herramientas. Es famoso por su velocidad y se usa en videojuegos, navegadores y programas de escritorio."
        },
        {
          t: "code",
          label: "C++",
          text:
            '#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hola, mundo" << endl;\n\n  string nombre = "Ada";\n  int edad = 12;\n\n  cout << "Hola, " << nombre << endl;\n  cout << "Tienes " << edad << " años" << endl;\n\n  return 0;\n}'
        },
        {
          t: "ul",
          items: [
            "#include <iostream> trae la entrada y salida de datos.",
            "cout muestra valores en la pantalla.",
            "endl añade un salto de línea.",
            "Cada instrucción termina en punto y coma."
          ]
        },
        {
          t: "h2",
          text: "main es el punto de partida"
        },
        {
          t: "p",
          text:
            "Todo programa de C++ empieza en main. Las llaves marcan dónde empieza y dónde termina cada bloque."
        },
        {
          t: "note",
          title: "C++ no se ejecuta solo",
          text:
            "Necesita compilarse antes de funcionar. Puedes practicar con un compilador online mientras aprendes la sintaxis."
        }
      ],
      challenge:
        "Añade una variable con tu lenguaje favorito y muestra una frase que la incluya usando cout."
    },
    {
      id: "cpp-2",
      lang: "cpp",
      title: "Variables, condiciones y bucles en C++",
      level: "Intermedio",
      minutes: 12,
      summary: "Toma decisiones y repite acciones con C++.",
      body: [
        {
          t: "p",
          text:
            "C++ comparte con C la estructura de las condiciones y los bucles. Cambian algunas herramientas, pero la idea es la misma."
        },
        {
          t: "code",
          label: "C++",
          text:
            '#include <iostream>\nusing namespace std;\n\nint main() {\n  int nota = 7;\n\n  if (nota >= 5) {\n    cout << "Aprobado" << endl;\n  } else {\n    cout << "Sigue practicando" << endl;\n  }\n\n  for (int i = 1; i <= 3; i++) {\n    cout << "Vuelta " << i << endl;\n  }\n\n  return 0;\n}'
        },
        {
          t: "ul",
          items: [
            "int guarda números enteros.",
            "if y else eligen entre dos caminos.",
            "for repite un bloque un número conocido de veces.",
            "++i o i++ suman uno a la variable."
          ]
        },
        {
          t: "h2",
          text: "Contar hacia atrás"
        },
        {
          t: "code",
          label: "C++",
          text:
            'for (int i = 5; i >= 1; i--) {\n  cout << i << endl;\n}\ncout << "¡Despegue!" << endl;'
        },
        {
          t: "note",
          title: "Revisa los límites",
          text:
            "Si el bucle no termina, revisa la condición y el avance. Un i++ olvidado es una causa clásica de programa que se queda colgado."
        }
      ],
      challenge:
        "Cambia el bucle para contar del 10 al 1 y muestra \"¡Despegue!\" al final. Después añade un else if para la nota 10."
    },

    /* ---------------- C# ---------------- */
    {
      id: "csharp-1",
      lang: "csharp",
      title: "Hola, mundo en C#",
      level: "Principiante",
      minutes: 10,
      summary: "Escribe tu primer programa en C# y conoce sus tipos.",
      body: [
        {
          t: "p",
          text:
            "C# es el lenguaje de .NET y de Unity, uno de los motores más usados para crear videojuegos. Su sintaxis se parece a la de Java y C++."
        },
        {
          t: "code",
          label: "C#",
          text:
            'using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hola, mundo");\n\n    string nombre = "Ada";\n    int edad = 12;\n\n    Console.WriteLine("Hola, " + nombre);\n    Console.WriteLine("Tienes " + edad + " años");\n  }\n}'
        },
        {
          t: "ul",
          items: [
            "using System permite usar Console.",
            "Main es el método por donde empieza el programa.",
            "Console.WriteLine muestra texto y salta de línea.",
            "string es texto, int es número entero y bool es verdadero o falso."
          ]
        },
        {
          t: "h2",
          text: "Un lenguaje para crear"
        },
        {
          t: "p",
          text:
            "Con C# puedes hacer aplicaciones de escritorio, páginas web y videojuegos. Unity usa C# para dar vida a los objetos de una escena."
        },
        {
          t: "note",
          title: "Punto y coma y llaves",
          text:
            "Como en Java y C++, cada instrucción termina en punto y coma y los bloques van entre llaves."
        }
      ],
      challenge:
        "Añade una variable bool llamada tienesCuenta y muestra un mensaje distinto según sea true o false usando if."
    },

    /* ---------------- SQL ---------------- */
    {
      id: "sql-1",
      lang: "sql",
      title: "Consulta tus datos con SQL",
      level: "Principiante",
      minutes: 10,
      summary: "Pide información a una tabla con SELECT y WHERE.",
      body: [
        {
          t: "p",
          text:
            "SQL no crea páginas ni videojuegos: sirve para hablar con bases de datos. Imagina una tabla como una hoja de cálculo con filas y columnas."
        },
        {
          t: "code",
          label: "SQL",
          text:
            "SELECT nombre, puntos\nFROM alumnos\nWHERE puntos >= 50\nORDER BY puntos DESC;"
        },
        {
          t: "ul",
          items: [
            "SELECT elige las columnas que quieres ver.",
            "FROM indica la tabla donde están los datos.",
            "WHERE filtra las filas que cumplen una condición.",
            "ORDER BY ordena; DESC va de mayor a menor y ASC de menor a mayor."
          ]
        },
        {
          t: "h2",
          text: "Una pregunta, no un programa"
        },
        {
          t: "p",
          text:
            "Una consulta SQL se parece a una pregunta: \"dame los nombres y los puntos de los alumnos que tienen 50 puntos o más, ordenados de mejor a peor\"."
        },
        {
          t: "note",
          title: "Las mayúsculas son opcionales",
          text:
            "SELECT y select funcionan igual. Escribir las palabras clave en mayúsculas ayuda a leer la consulta, pero no cambia el resultado."
        }
      ],
      challenge:
        "Escribe una consulta que muestre solo el nombre de los alumnos con menos de 20 puntos, ordenados de menor a mayor."
    },
    {
      id: "sql-2",
      lang: "sql",
      title: "Crear, añadir y cambiar datos",
      level: "Intermedio",
      minutes: 12,
      summary: "Crea una tabla y modifica sus filas con INSERT, UPDATE y DELETE.",
      body: [
        {
          t: "p",
          text:
            "Además de consultar, SQL puede crear tablas y cambiar sus datos. Cada acción tiene su propia instrucción."
        },
        {
          t: "code",
          label: "SQL",
          text:
            "CREATE TABLE alumnos (\n  id INTEGER PRIMARY KEY,\n  nombre TEXT,\n  puntos INTEGER\n);\n\nINSERT INTO alumnos (nombre, puntos)\nVALUES ('Ada', 80);\n\nUPDATE alumnos\nSET puntos = 90\nWHERE nombre = 'Ada';\n\nDELETE FROM alumnos\nWHERE puntos = 0;"
        },
        {
          t: "ul",
          items: [
            "CREATE TABLE crea una tabla con sus columnas y tipos.",
            "INSERT INTO añade una fila nueva.",
            "UPDATE cambia valores de las filas que cumplan la condición.",
            "DELETE FROM borra filas."
          ]
        },
        {
          t: "h2",
          text: "El WHERE protege tus datos"
        },
        {
          t: "p",
          text:
            "Si olvidas el WHERE en un UPDATE o un DELETE, la instrucción afecta a todas las filas. Es uno de los errores más peligrosos al empezar."
        },
        {
          t: "note",
          title: "Primero consulta, después cambia",
          text:
            "Antes de borrar o actualizar, ejecuta un SELECT con el mismo WHERE para ver exactamente qué filas vas a tocar."
        }
      ],
      challenge:
        "Crea una tabla llamada videojuegos con las columnas título y nota. Añade dos juegos y sube la nota de uno de ellos."
    },

    /* ---------------- TypeScript ---------------- */
    {
      id: "typescript-1",
      lang: "typescript",
      title: "TypeScript: JavaScript con tipos",
      level: "Intermedio",
      minutes: 10,
      summary: "Añade tipos a JavaScript para detectar errores antes.",
      body: [
        {
          t: "p",
          text:
            "TypeScript es JavaScript con una capa extra: los tipos. Sirve para decir qué clase de dato espera cada variable y cada función."
        },
        {
          t: "code",
          label: "TypeScript",
          text:
            'const nombre: string = "Ada";\nlet puntos: number = 0;\n\nfunction saludar(nombre: string): string {\n  return "Hola, " + nombre;\n}\n\npuntos += 10;\n\nconsole.log(saludar(nombre));\nconsole.log("Puntos:", puntos);'
        },
        {
          t: "ul",
          items: [
            ": string indica que el valor es texto.",
            ": number indica que es un número.",
            "La función declara que recibe un string y devuelve un string.",
            "El código final se convierte en JavaScript para ejecutarse en el navegador."
          ]
        },
        {
          t: "h2",
          text: "Errores antes de ejecutar"
        },
        {
          t: "p",
          text:
            "Si intentas guardar un texto en una variable number, TypeScript avisa antes de que el programa se ejecute. Eso ahorra muchos sustos en proyectos grandes."
        },
        {
          t: "note",
          title: "Los tipos no cambian el navegador",
          text:
            "Los navegadores no entienden TypeScript directamente. El archivo se compila a JavaScript normal antes de publicarse."
        }
      ],
      challenge:
        "Crea una función sumar(a: number, b: number): number y úsala para mostrar el resultado con console.log. Prueba a pasarle un texto y mira el aviso."
    },

    /* ---------------- Ruby ---------------- */
    {
      id: "ruby-1",
      lang: "ruby",
      title: "Ruby: código que se lee fácil",
      level: "Principiante",
      minutes: 8,
      summary: "Muestra mensajes, usa variables y toma decisiones en Ruby.",
      body: [
        {
          t: "p",
          text:
            "Ruby se diseñó para que programar sea cómodo y divertido. Su sintaxis es corta y se lee casi como inglés."
        },
        {
          t: "code",
          label: "Ruby",
          text:
            'puts "Hola, mundo"\n\nnombre = "Ada"\nedad = 12\n\nputs "Hola, #{nombre}"\n\nif edad >= 13\n  puts "Eres mayor"\nelse\n  puts "Aún eres pequeño"\nend'
        },
        {
          t: "ul",
          items: [
            "puts muestra texto y añade un salto de línea.",
            "Las variables no necesitan declarar su tipo.",
            "Con #{...} puedes meter una variable dentro de un texto.",
            "Los bloques de if terminan con end."
          ]
        },
        {
          t: "h2",
          text: "Menos símbolos, más lectura"
        },
        {
          t: "p",
          text:
            "Ruby evita los punto y coma y los paréntesis cuando no hacen falta. Eso hace que el código se parezca más a una receta."
        },
        {
          t: "note",
          title: "Todo es un objeto",
          text:
            "En Ruby, hasta los números y los textos son objetos con métodos. Por eso puedes escribir cosas como nombre.upcase para ponerlo en mayúsculas."
        }
      ],
      challenge:
        "Crea una variable con tu comida favorita y muestra una frase que la incluya. Después cambia el if para que también reaccione a la edad 12."
    },

    /* ---------------- PHP ---------------- */
    {
      id: "php-1",
      lang: "php",
      title: "PHP para la web",
      level: "Principiante",
      minutes: 10,
      summary: "Escribe tus primeras instrucciones PHP y muestra texto.",
      body: [
        {
          t: "p",
          text:
            "PHP es un lenguaje que se ejecuta en el servidor. Se usa en muchas páginas web para guardar datos, iniciar sesión o mostrar contenido distinto a cada persona."
        },
        {
          t: "code",
          label: "PHP",
          text:
            '<?php\n$nombre = "Ada";\n$puntos = 10;\n\necho "Hola, " . $nombre;\necho "Puntos: " . $puntos;\n\nif ($puntos >= 10) {\n  echo "¡Bien hecho!";\n}\n?>'
        },
        {
          t: "ul",
          items: [
            "El código PHP va entre <?php y ?>.",
            "Las variables empiezan por el signo $.",
            "echo muestra texto en la página.",
            "El punto . une textos, como el + en otros lenguajes."
          ]
        },
        {
          t: "h2",
          text: "El servidor hace el trabajo"
        },
        {
          t: "p",
          text:
            "Cuando visitas una página PHP, el servidor ejecuta el código y envía el resultado. El navegador recibe HTML normal, no el código original."
        },
        {
          t: "note",
          title: "Cada instrucción termina en punto y coma",
          text:
            "Olvidar el ; al final de una línea es uno de los errores más comunes en PHP. El mensaje de error suele señalar la línea siguiente."
        }
      ],
      challenge:
        "Añade una variable con tu edad y muestra una frase distinta si es mayor o menor de 13 usando if y else."
    },

    /* ---------------- Go ---------------- */
    {
      id: "go-1",
      lang: "go",
      title: "Go: simple y rápido",
      level: "Principiante",
      minutes: 10,
      summary: "Escribe un programa en Go y repite acciones con un bucle.",
      body: [
        {
          t: "p",
          text:
            "Go es un lenguaje moderno creado para construir servidores y herramientas que funcionen rápido y sean fáciles de leer."
        },
        {
          t: "code",
          label: "Go",
          text:
            'package main\n\nimport "fmt"\n\nfunc main() {\n  nombre := "Ada"\n  fmt.Println("Hola,", nombre)\n\n  for i := 1; i <= 3; i++ {\n    fmt.Println("Vuelta", i)\n  }\n}'
        },
        {
          t: "ul",
          items: [
            "package main indica que el programa es ejecutable.",
            "import \"fmt\" trae las funciones para mostrar texto.",
            "func main es el punto de entrada.",
            ":= crea una variable y deja que Go decida su tipo."
          ]
        },
        {
          t: "h2",
          text: "Menos piezas, menos líos"
        },
        {
          t: "p",
          text:
            "Go tiene pocas palabras clave y un solo tipo de bucle: for. Esa sencillez hace que varios programadores puedan leer el mismo código sin sorpresas."
        },
        {
          t: "note",
          title: "El formato es automático",
          text:
            "La herramienta gofmt coloca los espacios y las tabulaciones por ti. En Go casi todo el mundo escribe el código con el mismo estilo."
        }
      ],
      challenge:
        "Crea una variable puntos con := y muestra su valor. Después cambia el bucle para que cuente del 5 al 1."
    },

    /* ---------------- Kotlin ---------------- */
    {
      id: "kotlin-1",
      lang: "kotlin",
      title: "Kotlin para Android",
      level: "Principiante",
      minutes: 10,
      summary: "Conoce val, var y las funciones de Kotlin.",
      body: [
        {
          t: "p",
          text:
            "Kotlin es el lenguaje recomendado para crear apps de Android. Es más corto que Java y evita muchos errores comunes."
        },
        {
          t: "code",
          label: "Kotlin",
          text:
            'fun main() {\n  val nombre = "Ada"\n  var puntos = 0\n\n  puntos = puntos + 10\n\n  println("Hola, $nombre")\n  println("Puntos: $puntos")\n\n  if (puntos >= 10) {\n    println("¡Bien hecho!")\n  }\n}'
        },
        {
          t: "ul",
          items: [
            "fun crea una función; main es la que arranca el programa.",
            "val crea un valor que no cambia.",
            "var crea una variable que sí puede cambiar.",
            "Dentro de un texto, $nombre mete el valor de la variable."
          ]
        },
        {
          t: "h2",
          text: "Pensado para apps"
        },
        {
          t: "p",
          text:
            "Kotlin se usa con Android Studio para crear pantallas, botones y aplicaciones completas. Su sintaxis moderna hace que haya menos código repetido."
        },
        {
          t: "note",
          title: "val o var",
          text:
            "Usa val por defecto y cambia a var solo cuando el valor tenga que cambiar. Igual que const y let en JavaScript."
        }
      ],
      challenge:
        "Añade una variable nivel que empiece en 1 y suba a 2. Muestra un mensaje distinto según el nivel usando if."
    },

    /* ---------------- Swift ---------------- */
    {
      id: "swift-1",
      lang: "swift",
      title: "Swift: apps para Apple",
      level: "Principiante",
      minutes: 10,
      summary: "Escribe tu primer programa en Swift y usa let y var.",
      body: [
        {
          t: "p",
          text:
            "Swift es el lenguaje de Apple para crear apps de iPhone, iPad y Mac. Es rápido, seguro y se lee con facilidad."
        },
        {
          t: "code",
          label: "Swift",
          text:
            'let nombre = "Ada"\nvar puntos = 0\n\npuntos += 10\n\nprint("Hola, \\(nombre)")\nprint("Puntos: \\(puntos)")\n\nif puntos >= 10 {\n  print("¡Bien hecho!")\n}'
        },
        {
          t: "ul",
          items: [
            "let crea una constante que no cambia.",
            "var crea una variable que puede cambiar.",
            "print muestra texto en la consola.",
            "Dentro de un texto, \\(...) mete el valor de una variable."
          ]
        },
        {
          t: "h2",
          text: "Seguridad desde el diseño"
        },
        {
          t: "p",
          text:
            "Swift obliga a manejar los valores vacíos con cuidado. Eso evita muchos cierres inesperados en las apps."
        },
        {
          t: "note",
          title: "No hace falta punto y coma",
          text:
            "Puedes escribir una instrucción por línea sin ;. Solo se usa para separar varias instrucciones en la misma línea."
        }
      ],
      challenge:
        "Crea una constante con tu app favorita y muestra una frase que la mencione. Después añade un else que muestre otro mensaje."
    },

    /* ---------------- Rust ---------------- */
    {
      id: "rust-1",
      lang: "rust",
      title: "Rust: rápido y seguro",
      level: "Intermedio",
      minutes: 12,
      summary: "Escribe un programa en Rust y entiende let y mut.",
      body: [
        {
          t: "p",
          text:
            "Rust es un lenguaje moderno que busca la velocidad de C++ sin los errores de memoria. Es exigente al principio, pero enseña mucho."
        },
        {
          t: "code",
          label: "Rust",
          text:
            'fn main() {\n  let nombre = "Ada";\n  let mut puntos = 0;\n\n  puntos += 10;\n\n  println!("Hola, {}", nombre);\n  println!("Puntos: {}", puntos);\n\n  if puntos >= 10 {\n    println!("¡Bien hecho!");\n  }\n}'
        },
        {
          t: "ul",
          items: [
            "fn crea una función; main es el punto de entrada.",
            "let crea una variable que no cambia por defecto.",
            "mut permite que una variable cambie.",
            "println! muestra texto; los {} son huecos para los valores."
          ]
        },
        {
          t: "h2",
          text: "El compilador ayuda mucho"
        },
        {
          t: "p",
          text:
            "Rust revisa el programa antes de ejecutarlo y te avisa de errores que en otros lenguajes aparecerían más tarde. Al principio da muchos mensajes, pero casi siempre explican cómo arreglarlos."
        },
        {
          t: "note",
          title: "La exclamación importa",
          text:
            "println! lleva ! porque es una macro, una herramienta que genera código. No es lo mismo que una función normal."
        }
      ],
      challenge:
        "Crea una variable mutable vidas que empiece en 3, réstale 1 dos veces y muestra el resultado. Después añade un if que avise cuando quede 0."
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

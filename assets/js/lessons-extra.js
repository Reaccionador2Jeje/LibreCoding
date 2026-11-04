/* ============================================================
   LibreCoding — lessons-extra.js
   Second part of the lesson catalogue. Loaded after
   lessons-data.js so it can extend the same arrays. The site
   stays build-free: this file is plain data plus a small factory
   that turns compact lesson definitions into the same shape
   used by the original catalogue.
   ============================================================ */
(function () {
  "use strict";

  var LC = window.LC;
  var data = LC && LC.data;
  if (!data) return;

  var EXTRA = {};

  /* Compact lesson definition:
       title, summary, intro, code, points, note, challenge
     plus optional level and minutes. */

  EXTRA.html = [
    {
      title: "Formularios",
      summary: "Recoge datos del visitante con campos y botones.",
      intro:
        "Un formulario permite que la persona que visita la página escriba datos: su nombre, un mensaje o una dirección. Cada campo vive dentro de la etiqueta form.",
      code:
        '<form action="/enviar" method="post">\n  <label for="nombre">Nombre:</label>\n  <input id="nombre" name="nombre" type="text" required>\n\n  <label for="mensaje">Mensaje:</label>\n  <textarea id="mensaje" name="mensaje"></textarea>\n\n  <button type="submit">Enviar</button>\n</form>',
      points: [
        "label se conecta con su campo mediante el atributo for y el id.",
        "input crea una línea de texto; textarea crea una caja más grande.",
        "required impide enviar el formulario si el campo está vacío.",
        "button type=\"submit\" envía todos los datos del formulario."
      ],
      note: [
        "Piensa en la accesibilidad",
        "Sin label, un lector de pantalla no sabe qué dato pide cada campo. No lo dejes para el final."
      ],
      challenge:
        "Añade un campo de correo con type=\"email\" y una casilla con type=\"checkbox\" para aceptar las normas."
    },
    {
      title: "Tablas de datos",
      summary: "Organiza información en filas y columnas.",
      intro:
        "Una tabla sirve para mostrar datos que se relacionan entre sí, como las notas de una clase. No la uses para colocar la página entera: para eso está CSS.",
      code:
        '<table>\n  <caption>Notas del trimestre</caption>\n  <thead>\n    <tr>\n      <th>Asignatura</th>\n      <th>Nota</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Matemáticas</td>\n      <td>8</td>\n    </tr>\n  </tbody>\n</table>',
      points: [
        "tr es una fila de la tabla.",
        "th es una celda de encabezado y td una celda normal.",
        "thead agrupa los encabezados y tbody los datos.",
        "caption describe la tabla para quien no puede verla."
      ],
      note: [
        "Tablas con sentido",
        "Usa tablas solo cuando los datos tengan filas y columnas reales. Para diseño existen Flexbox y Grid."
      ],
      challenge:
        "Crea una tabla con tres asignaturas y una columna más para los días de clase."
    },
    {
      title: "HTML semántico",
      summary: "Usa etiquetas que explican qué es cada parte de la página.",
      intro:
        "HTML semántico significa elegir etiquetas por su significado, no por su aspecto. header, nav, main y footer dicen mucho más que un montón de div.",
      code:
        '<header>\n  <h1>Mi blog</h1>\n</header>\n\n<nav>\n  <a href="/">Inicio</a>\n  <a href="/sobre-mi">Sobre mí</a>\n</nav>\n\n<main>\n  <article>\n    <h2>Mi primera entrada</h2>\n    <p>Hoy aprendí HTML semántico.</p>\n  </article>\n</main>\n\n<footer>\n  <p>Hecho con cariño.</p>\n</footer>',
      points: [
        "header contiene la cabecera de la página o de una sección.",
        "nav agrupa los enlaces de navegación.",
        "main envuelve el contenido principal y solo debería haber uno.",
        "article es un contenido completo por sí mismo, como una entrada."
      ],
      note: [
        "div sigue existiendo",
        "div es una caja sin significado. Úsalo cuando ninguna etiqueta semántica encaje, no como solución para todo."
      ],
      challenge:
        "Convierte una página llena de div en una estructura con header, nav, main, section y footer."
    },
    {
      title: "Audio y vídeo",
      summary: "Incrusta audio y vídeo sin plugins externos.",
      intro:
        "HTML puede reproducir audio y vídeo por sí mismo. La etiqueta video muestra una imagen en movimiento y audio reproduce sonido.",
      code:
        '<video controls width="480" poster="portada.jpg">\n  <source src="video.mp4" type="video/mp4">\n  <source src="video.webm" type="video/webm">\n  Tu navegador no puede reproducir este vídeo.\n</video>\n\n<audio controls>\n  <source src="cancion.mp3" type="audio/mpeg">\n</audio>',
      points: [
        "controls muestra los botones de reproducir, pausar y volumen.",
        "source ofrece el mismo contenido en varios formatos.",
        "poster es la imagen que se ve antes de reproducir el vídeo.",
        "El texto dentro de video o audio aparece si el navegador no lo soporta."
      ],
      note: [
        "No pongas reproducción automática",
        "El autoplay con sonido molesta y muchos navegadores lo bloquean. Deja que la persona decida cuándo empezar."
      ],
      challenge:
        "Añade un vídeo con dos formatos y un texto alternativo dentro de la etiqueta."
    },
    {
      title: "Accesibilidad web",
      summary: "Haz que tu página funcione para todo el mundo.",
      intro:
        "Una página accesible se puede usar con teclado, con lector de pantalla o con poca conexión. No es un extra: es parte de hacer las cosas bien.",
      code:
        '<a class="skip-link" href="#main">Saltar al contenido</a>\n\n<img src="gato.jpg" alt="Gato naranja durmiendo sobre un teclado">\n\n<button type="button" aria-label="Cerrar ventana">\n  <span aria-hidden="true">×</span>\n</button>',
      points: [
        "El texto alt describe las imágenes con palabras.",
        "Los enlaces deben decir a dónde llevan, no solo \"clic aquí\".",
        "aria-label da un nombre a un botón que solo tiene un símbolo.",
        "Todo debe poder usarse solo con el teclado."
      ],
      note: [
        "Prueba con Tab",
        "Recorre tu página pulsando Tab. Si no puedes llegar a un botón o no ves dónde estás, hay un problema de accesibilidad."
      ],
      challenge:
        "Revisa una página tuya: añade alt a todas las imágenes y comprueba que se puede navegar con Tab."
    },
    {
      title: "Metaetiquetas y SEO",
      summary: "Explica a los buscadores de qué trata tu página.",
      intro:
        "Las metaetiquetas van en el head y no se ven en la página, pero ayudan a los buscadores y a las redes sociales a mostrar tu contenido.",
      code:
        '<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Mi página de recetas</title>\n  <meta name="description" content="Recetas fáciles para aprender a cocinar.">\n\n  <meta property="og:title" content="Recetas fáciles">\n  <meta property="og:description" content="Aprende a cocinar paso a paso.">\n</head>',
      points: [
        "title es el texto que aparece en la pestaña y en los resultados.",
        "description resume la página en una o dos frases.",
        "viewport hace que la página se adapte al móvil.",
        "Las etiquetas og: controlan cómo se ve el enlace al compartirlo."
      ],
      note: [
        "Sé honesto",
        "La description debe describir el contenido real. Engañar a los buscadores hace que la gente se vaya de tu página."
      ],
      challenge:
        "Escribe un title y una description para una página sobre tu afición favorita."
    },
    {
      title: "Proyecto: tu página personal",
      summary: "Junta todo lo aprendido en una página completa.",
      intro:
        "Es hora de construir algo real. Una página personal puede tener una presentación, tus intereses, una imagen y un enlace de contacto.",
      code:
        '<!doctype html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title>Hola, soy Ada</title>\n  <link rel="stylesheet" href="estilos.css">\n</head>\n<body>\n  <header>\n    <h1>Hola, soy Ada</h1>\n    <p>Me gustan los videojuegos y la programación.</p>\n  </header>\n  <main>\n    <section>\n      <h2>Lo que estoy aprendiendo</h2>\n      <ul>\n        <li>HTML</li>\n        <li>CSS</li>\n        <li>JavaScript</li>\n      </ul>\n    </section>\n  </main>\n</body>\n</html>',
      points: [
        "Empieza por el contenido y después dale estilo.",
        "Usa etiquetas semánticas para ordenar la información.",
        "Comprueba que la página se entiende sin CSS.",
        "Abre la página en el móvil y en el ordenador."
      ],
      note: [
        "No busques la perfección",
        "Una página sencilla terminada enseña más que una idea enorme que nunca se publica."
      ],
      challenge:
        "Añade una sección de contacto, una imagen con alt y un enlace a tu red social favorita."
    }
  ];

  EXTRA.css = [
    {
      title: "Selectores y especificidad",
      summary: "Elige exactamente qué elemento quieres estilizar.",
      intro:
        "Un selector decide a qué elementos afecta una regla de CSS. Cuando dos reglas chocan, gana la que tiene más especificidad.",
      code:
        'p {\n  color: #333;\n}\n\n.destacado {\n  color: #4f37e0;\n}\n\n#aviso {\n  color: #b00020;\n}',
      points: [
        "Una etiqueta como p es el selector más general.",
        "Una clase como .destacado se puede repetir en muchos elementos.",
        "Un id como #aviso debería ser único en la página.",
        "En caso de empate, gana la regla que aparece más abajo."
      ],
      note: [
        "Evita abusar de los id",
        "Para estilos usa clases. Los id son difíciles de reutilizar y fuerzan reglas demasiado poderosas."
      ],
      challenge:
        "Crea tres párrafos y dales colores distintos usando una etiqueta, una clase y un id."
    },
    {
      title: "El modelo de caja",
      summary: "Entiende el espacio alrededor de cada elemento.",
      intro:
        "Cada elemento de HTML es una caja con contenido, relleno, borde y margen. Entender esas cuatro capas es la clave para colocar cosas sin pelear.",
      code:
        '.caja {\n  width: 200px;\n  padding: 16px;\n  border: 2px solid #4f37e0;\n  margin: 24px;\n  box-sizing: border-box;\n}',
      points: [
        "El contenido es el texto o la imagen de dentro.",
        "padding es el espacio entre el contenido y el borde.",
        "border es la línea que rodea la caja.",
        "margin es el espacio entre esta caja y las demás."
      ],
      note: [
        "box-sizing",
        "Con border-box, el ancho incluye el relleno y el borde. Así los cálculos son mucho más fáciles."
      ],
      challenge:
        "Crea una tarjeta con padding, borde redondeado, sombra y margen, y cambia cada valor para ver qué pasa."
    },
    {
      title: "Flexbox a fondo",
      summary: "Alinea y reparte elementos en una fila o columna.",
      intro:
        "Flexbox coloca elementos en una dirección y reparte el espacio libre. Es perfecto para barras de navegación, botones y tarjetas.",
      code:
        '.fila {\n  display: flex;\n  gap: 16px;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}',
      points: [
        "display: flex convierte los hijos en elementos flexibles.",
        "justify-content reparte el espacio en el eje principal.",
        "align-items alinea en el eje contrario.",
        "flex-wrap permite que los elementos bajen a otra línea."
      ],
      note: [
        "gap es tu amigo",
        "Usa gap para separar elementos. Es más limpio que añadir márgenes a cada hijo."
      ],
      challenge:
        "Crea una barra de navegación con el logo a la izquierda y tres enlaces a la derecha."
    },
    {
      title: "CSS Grid",
      summary: "Construye cuadrículas de filas y columnas.",
      intro:
        "Grid es ideal para diseños en dos dimensiones. Puedes definir columnas y filas, y colocar cada elemento en su celda.",
      code:
        '.galeria {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 16px;\n}\n\n.destacado {\n  grid-column: span 2;\n}',
      points: [
        "grid-template-columns define las columnas.",
        "repeat y minmax crean columnas que se adaptan solas.",
        "gap separa las celdas.",
        "grid-column permite que un elemento ocupe varias columnas."
      ],
      note: [
        "¿Flexbox o Grid?",
        "Si colocas cosas en una sola dirección, Flexbox suele ser suficiente. Si necesitas filas y columnas a la vez, usa Grid."
      ],
      challenge:
        "Crea una galería de seis tarjetas y haz que la primera ocupe dos columnas."
    },
    {
      title: "Diseño responsive",
      summary: "Adapta tu página al móvil, la tablet y el ordenador.",
      intro:
        "Una página responsive se ve bien en cualquier tamaño de pantalla. En lugar de hacer dos webs, usas reglas que se adaptan.",
      code:
        '.contenido {\n  width: 100%;\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 16px;\n}\n\n@media (min-width: 700px) {\n  .contenido {\n    padding: 32px;\n  }\n}',
      points: [
        "Empieza por el diseño móvil y amplía después.",
        "max-width evita que el contenido se estire demasiado.",
        "margin: 0 auto centra un bloque con ancho máximo.",
        "@media aplica reglas solo cuando se cumple una condición."
      ],
      note: [
        "No fijes alturas para todo",
        "Deja que el contenido crezca. Las alturas fijas suelen romperse cuando el texto cambia de tamaño."
      ],
      challenge:
        "Haz que una fila de tres tarjetas se convierta en una columna en pantallas pequeñas."
    },
    {
      title: "Variables y transiciones",
      summary: "Reutiliza colores y añade cambios suaves.",
      intro:
        "Las variables de CSS guardan valores que usas muchas veces. Las transiciones hacen que un cambio de estilo ocurra poco a poco.",
      code:
        ':root {\n  --color-principal: #4f37e0;\n  --color-fondo: #f4f2ff;\n}\n\n.boton {\n  background: var(--color-principal);\n  transition: transform 0.2s ease;\n}\n\n.boton:hover {\n  transform: translateY(-2px);\n}',
      points: [
        ":root guarda variables globales.",
        "var(--nombre) usa el valor guardado.",
        "transition indica qué propiedad animar y cuánto durar.",
        ":hover se activa cuando el ratón está encima."
      ],
      note: [
        "Respeta a quien prefiere menos movimiento",
        "Para animaciones grandes, añade una media query con prefers-reduced-motion."
      ],
      challenge:
        "Crea un botón con variables de color y una transición que cambie suavemente al pasar el ratón."
    },
    {
      title: "Animaciones y proyecto",
      summary: "Da vida a la interfaz con keyframes.",
      intro:
        "Una animación recorre una serie de estados llamados keyframes. Úsala para llamar la atención o explicar un cambio, no para distraer.",
      code:
        '@keyframes aparecer {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.tarjeta {\n  animation: aparecer 0.5s ease-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .tarjeta {\n    animation: none;\n  }\n}',
      points: [
        "@keyframes define los estados de la animación.",
        "from es el inicio y to el final.",
        "animation une la animación con el elemento.",
        "La media query desactiva el movimiento si la persona lo prefiere."
      ],
      note: [
        "Menos es más",
        "Una animación corta y sutil se siente profesional. Muchas animaciones a la vez marean."
      ],
      challenge:
        "Crea tres tarjetas que aparezcan una detrás de otra usando animation-delay."
    }
  ];

  EXTRA.js = [
    {
      title: "Tipos de datos y operadores",
      summary: "Guarda números, textos y valores verdadero o falso.",
      intro:
        "JavaScript distingue entre números, textos y booleanos. Saber qué tipo tienes evita errores raros cuando sumas o comparas.",
      code:
        'let edad = 12;\nconst nombre = "Ada";\nlet activo = true;\n\nconsole.log(typeof edad);\nconsole.log(edad + 1);\nconsole.log(nombre + " tiene " + edad + " años");\nconsole.log(edad === 12);',
      points: [
        "let crea una variable que puede cambiar.",
        "const crea una constante que no se reasigna.",
        "typeof dice el tipo de un valor.",
        "=== compara valor y tipo; == hace conversiones que sorprenden."
      ],
      note: [
        "Usa const por defecto",
        "Si no necesitas cambiar el valor, usa const. Así el código avisa antes si algo se modifica por error."
      ],
      challenge:
        "Crea variables para tu nombre, tu edad y si te gusta programar. Muestra una frase con las tres."
    },
    {
      title: "Operadores lógicos y switch",
      summary: "Combina condiciones y elige entre varios casos.",
      intro:
        "Además de if, JavaScript tiene switch para comparar un valor con varios casos. Los operadores && y || permiten combinar condiciones.",
      code:
        'const dia = "sábado";\n\nswitch (dia) {\n  case "sábado":\n  case "domingo":\n    console.log("Fin de semana");\n    break;\n  default:\n    console.log("Día de clase");\n}\n\nconst edad = 12;\n\nif (edad >= 10 && edad <= 14) {\n  console.log("Estás en secundaria");\n}',
      points: [
        "switch compara un valor con varios case.",
        "break evita que se ejecute el caso siguiente.",
        "default se ejecuta si ningún caso coincide.",
        "&& exige que ambas condiciones sean verdaderas; || solo una."
      ],
      note: [
        "No olvides break",
        "Sin break, la ejecución continúa en el caso siguiente. Ese comportamiento a veces se usa, pero casi siempre es un error."
      ],
      challenge:
        "Usa switch para mostrar una estación del año según un mes, y combina dos condiciones con &&."
    },
    {
      title: "Bucles",
      summary: "Repite instrucciones sin copiar y pegar.",
      intro:
        "Un bucle repite un bloque de código. for es útil cuando sabes cuántas veces repetir; while, cuando depende de una condición.",
      code:
        'for (let i = 1; i <= 5; i++) {\n  console.log("Vuelta " + i);\n}\n\nlet vidas = 3;\nwhile (vidas > 0) {\n  console.log("Te quedan " + vidas + " vidas");\n  vidas--;\n}',
      points: [
        "for tiene inicio, condición y avance en una sola línea.",
        "i++ suma uno a i después de cada vuelta.",
        "while comprueba la condición antes de cada repetición.",
        "Si la condición nunca se vuelve falsa, el bucle no termina."
      ],
      note: [
        "Bucles infinitos",
        "Si tu página se congela, revisa que el bucle cambie algo que haga falsa la condición."
      ],
      challenge:
        "Usa un bucle para mostrar los números pares del 2 al 20."
    },
    {
      title: "Funciones reutilizables",
      summary: "Agrupa código que quieres usar varias veces.",
      intro:
        "Una función guarda un bloque de código con un nombre. Puede recibir datos (parámetros) y devolver un resultado con return.",
      code:
        'function saludar(nombre) {\n  return "Hola, " + nombre;\n}\n\nconst sumar = (a, b) => a + b;\n\nconsole.log(saludar("Ada"));\nconsole.log(sumar(2, 3));',
      points: [
        "function declara una función clásica.",
        "Los parámetros son los datos que recibe.",
        "return devuelve un valor y termina la función.",
        "Las funciones flecha son una forma más corta de escribir funciones."
      ],
      note: [
        "Una función, una tarea",
        "Si una función hace demasiadas cosas, cuesta entenderla y probarla. Divídela en partes pequeñas."
      ],
      challenge:
        "Escribe una función que reciba dos números y devuelva el mayor."
    },
    {
      title: "Arrays",
      summary: "Guarda listas de valores y recórrelas.",
      intro:
        "Un array es una lista ordenada. Puedes añadir, quitar y transformar elementos con métodos que ya trae JavaScript.",
      code:
        'const frutas = ["manzana", "pera", "plátano"];\n\nfrutas.push("kiwi");\n\nconst largas = frutas.filter(function (fruta) {\n  return fruta.length > 4;\n});\n\nconsole.log(frutas.length);\nconsole.log(largas);',
      points: [
        "Los elementos se numeran desde 0.",
        "push añade al final y pop quita el último.",
        "filter crea un array nuevo con los elementos que cumplen una condición.",
        "map transforma cada elemento y devuelve un array nuevo."
      ],
      note: [
        "Los arrays empiezan en 0",
        "El primer elemento es frutas[0]. El último es frutas[frutas.length - 1]."
      ],
      challenge:
        "Crea un array con tus cinco videojuegos favoritos y muestra solo los que tengan más de seis letras."
    },
    {
      title: "Objetos",
      summary: "Agrupa datos relacionados con nombres.",
      intro:
        "Un objeto guarda pares de clave y valor. Es perfecto para representar una persona, un producto o una ficha de personaje.",
      code:
        'const jugador = {\n  nombre: "Ada",\n  puntos: 10,\n  nivel: 2,\n  subirNivel: function () {\n    this.nivel++;\n  }\n};\n\njugador.subirNivel();\nconsole.log(jugador.nombre + " está en el nivel " + jugador.nivel);',
      points: [
        "Cada dato se guarda como clave: valor.",
        "Puedes leer un valor con punto: jugador.nombre.",
        "this se refiere al objeto desde dentro de un método.",
        "Un método es una función guardada dentro de un objeto."
      ],
      note: [
        "No mezcles comas y puntos y comas",
        "Dentro de un objeto, las propiedades se separan con comas. Al final del objeto no hace falta coma."
      ],
      challenge:
        "Crea un objeto mascota con nombre, especie y energia. Añade un método que reduzca la energía."
    },
    {
      title: "El DOM",
      summary: "Lee y cambia la página desde JavaScript.",
      intro:
        "El DOM es la representación de la página que usa JavaScript. Con querySelector puedes encontrar elementos y cambiar su texto o sus clases.",
      code:
        'const titulo = document.querySelector("h1");\ntitulo.textContent = "Página actualizada";\n\ntitulo.classList.add("destacado");\n\nconst parrafo = document.createElement("p");\nparrafo.textContent = "Este párrafo lo creó JavaScript.";\ndocument.querySelector("main").appendChild(parrafo);',
      points: [
        "querySelector busca el primer elemento que coincide.",
        "textContent cambia el texto sin interpretar HTML.",
        "classList añade o quita clases de CSS.",
        "createElement crea un elemento nuevo; appendChild lo inserta."
      ],
      note: [
        "Espera a que exista",
        "Si el script se ejecuta antes que el HTML, querySelector devuelve null. Carga el script al final o usa DOMContentLoaded."
      ],
      challenge:
        "Cambia el título de una página y añade un párrafo nuevo desde JavaScript."
    },
    {
      title: "Eventos e interacción",
      summary: "Responde a clics, teclas y formularios.",
      intro:
        "Un evento es algo que ocurre en la página: un clic, una tecla o el envío de un formulario. addEventListener conecta ese evento con una función.",
      code:
        'const boton = document.querySelector("#saludar");\nconst salida = document.querySelector("#salida");\n\nboton.addEventListener("click", function () {\n  salida.textContent = "¡Hola desde JavaScript!";\n});\n\nconst formulario = document.querySelector("form");\nformulario.addEventListener("submit", function (evento) {\n  evento.preventDefault();\n  console.log("Formulario interceptado");\n});',
      points: [
        "addEventListener recibe el nombre del evento y una función.",
        "click, input, keydown y submit son eventos habituales.",
        "preventDefault evita que el navegador haga su acción por defecto.",
        "Una misma función puede responder a varios eventos."
      ],
      note: [
        "No mezcles HTML y JavaScript",
        "Es mejor conectar eventos desde JavaScript que llenar el HTML de onclick. Así el código se entiende y se mantiene mejor."
      ],
      challenge:
        "Crea un botón que cambie el color de fondo de la página cada vez que se pulse."
    }
  ];

  EXTRA.python = [
    {
      title: "Diccionarios",
      summary: "Guarda datos con nombre en lugar de número.",
      intro:
        "Un diccionario asocia una clave con un valor. Es ideal para representar fichas: el nombre, la edad o los puntos de un jugador.",
      code:
        'estudiante = {"nombre": "Ada", "edad": 12}\nestudiante["curso"] = "1º"\n\nprint(estudiante["nombre"])\n\nfor clave, valor in estudiante.items():\n    print(clave, ":", valor)',
      points: [
        "Las claves suelen ser textos y deben ser únicas.",
        "Se accede a un valor con corchetes y la clave.",
        "items() devuelve cada pareja clave-valor.",
        "get() permite buscar una clave sin provocar un error si no existe."
      ],
      note: [
        "Clave inexistente",
        'Si pides estudiante["nota"] y no existe, Python lanza un error. Usa estudiante.get("nota", 0) para dar un valor por defecto.'
      ],
      challenge:
        "Crea un diccionario con tres asignaturas y sus notas. Después calcula la media."
    },
    {
      title: "Módulos y librerías",
      summary: "Usa código que ya escribió otra persona.",
      intro:
        "Python trae muchas herramientas listas para usar. Un módulo es un archivo de código que puedes importar en tu programa.",
      code:
        "import random\nimport math\n\nprint(random.randint(1, 6))\nprint(math.sqrt(81))\nprint(random.choice([\"piedra\", \"papel\", \"tijera\"]))",
      points: [
        "import trae un módulo completo.",
        "from math import sqrt trae solo una función.",
        "random sirve para generar números y elegir opciones.",
        "math incluye raíces, potencias y constantes."
      ],
      note: [
        "No inventes la rueda",
        "Antes de escribir algo complicado, busca si ya existe en la biblioteca estándar. Ahorra tiempo y errores."
      ],
      challenge:
        "Escribe un programa que elija una fruta al azar de una lista y muestre cuántas letras tiene."
    },
    {
      title: "Errores y excepciones",
      summary: "Evita que el programa se rompa cuando algo falla.",
      intro:
        "Los errores son normales. try y except permiten intentar algo peligroso y responder con calma si sale mal.",
      code:
        'try:\n    numero = int(input("Número: "))\n    print(10 / numero)\nexcept ValueError:\n    print("Eso no es un número")\nexcept ZeroDivisionError:\n    print("No se puede dividir entre cero")\nfinally:\n    print("Fin del programa")',
      points: [
        "try envuelve el código que puede fallar.",
        "except atrapa un tipo concreto de error.",
        "finally se ejecuta siempre, haya error o no.",
        "Un error no atrapado detiene el programa."
      ],
      note: [
        "No atrapes todo",
        "Evita un except vacío. Es mejor saber qué error esperas y manejarlo de forma concreta."
      ],
      challenge:
        "Pide una edad y muestra un mensaje de error si la persona escribe letras en lugar de un número."
    },
    {
      title: "Leer y escribir archivos",
      summary: "Guarda información para volver a usarla después.",
      intro:
        "Con open puedes crear, leer y escribir archivos de texto. La forma recomendada es usar with, porque cierra el archivo automáticamente.",
      code:
        'with open("notas.txt", "w") as archivo:\n    archivo.write("Hola\\n")\n    archivo.write("Segunda línea\\n")\n\nwith open("notas.txt", "r") as archivo:\n    for linea in archivo:\n        print(linea.strip())',
      points: [
        "El modo w escribe y borra el contenido anterior.",
        "El modo a añade al final sin borrar.",
        "El modo r lee el archivo.",
        "strip() quita el salto de línea del final."
      ],
      note: [
        "Cuidado con w",
        "Abrir un archivo con w lo vacía. Si quieres conservar lo que había, usa a para añadir."
      ],
      challenge:
        "Crea un archivo con tres tareas y después léelo para mostrarlas numeradas."
    },
    {
      title: "Clases y objetos",
      summary: "Crea tus propios tipos de datos.",
      intro:
        "Una clase es un molde para crear objetos. Cada objeto tiene sus propios datos y sus propias funciones, llamadas métodos.",
      code:
        'class Mascota:\n    def __init__(self, nombre):\n        self.nombre = nombre\n        self.energia = 100\n\n    def jugar(self):\n        self.energia -= 10\n\nmascota = Mascota("Luna")\nmascota.jugar()\nprint(mascota.nombre, mascota.energia)',
      points: [
        "__init__ se ejecuta al crear el objeto.",
        "self hace referencia al objeto actual.",
        "Los atributos guardan datos del objeto.",
        "Los métodos son funciones que pertenecen a la clase."
      ],
      note: [
        "Una clase, una responsabilidad",
        "Si una clase intenta hacerlo todo, divídela. Es más fácil de entender y de cambiar."
      ],
      challenge:
        "Crea una clase Cuenta con saldo y métodos para ingresar y retirar dinero."
    },
    {
      title: "Listas por comprensión",
      summary: "Crea listas nuevas en una sola línea.",
      intro:
        "Las comprensiones de listas permiten transformar o filtrar elementos de forma muy compacta. Son una de las señas de identidad de Python.",
      code:
        "numeros = [1, 2, 3, 4, 5, 6]\n\npares = [n for n in numeros if n % 2 == 0]\ncuadrados = [n * n for n in numeros]\n\nprint(pares)\nprint(cuadrados)",
      points: [
        "La parte inicial indica qué hacer con cada elemento.",
        "El for recorre la lista original.",
        "El if opcional filtra los elementos.",
        "El resultado siempre es una lista nueva."
      ],
      note: [
        "No lo compliques",
        "Si una comprensión ocupa varias líneas o tiene muchos if, probablemente sea más clara con un bucle normal."
      ],
      challenge:
        "Crea una lista con los nombres de una lista que tengan más de cuatro letras."
    },
    {
      title: "Proyecto: agenda de contactos",
      summary: "Combina listas, diccionarios y funciones.",
      intro:
        "Una agenda sencilla guarda contactos y permite añadirlos y buscarlos. Es un proyecto pequeño que usa casi todo lo aprendido.",
      code:
        'agenda = []\n\ndef agregar(nombre, telefono):\n    agenda.append({"nombre": nombre, "telefono": telefono})\n\ndef buscar(nombre):\n    for contacto in agenda:\n        if contacto["nombre"].lower() == nombre.lower():\n            return contacto\n    return None\n\nagregar("Ada", "123456789")\nprint(buscar("ada"))',
      points: [
        "Una lista guarda todos los contactos.",
        "Cada contacto es un diccionario.",
        "Las funciones esconden la lógica y hacen el programa más claro.",
        "lower() permite buscar sin importar mayúsculas."
      ],
      note: [
        "Piensa antes de escribir",
        "Antes de programar, escribe en papel qué debe hacer la agenda: añadir, buscar, borrar y mostrar."
      ],
      challenge:
        "Añade una función para borrar un contacto por su nombre y otra para mostrar todos."
    }
  ];

  EXTRA.scratch = [
    {
      title: "Movimiento y coordenadas",
      summary: "Mueve objetos por el escenario con x e y.",
      intro:
        "En Scratch, el escenario tiene un eje x horizontal y un eje y vertical. El centro es (0, 0). Cambiar x mueve a los lados; cambiar y mueve arriba y abajo.",
      code:
        "al presionar bandera verde\npor siempre\n  si tecla flecha derecha presionada entonces\n    cambiar x por 10\n  si tecla flecha izquierda presionada entonces\n    cambiar x por -10\n  si tecla flecha arriba presionada entonces\n    cambiar y por 10\n  si tecla flecha abajo presionada entonces\n    cambiar y por -10",
      points: [
        "x positivo va a la derecha; x negativo, a la izquierda.",
        "y positivo va arriba; y negativo, abajo.",
        "El bloque por siempre repite sin parar.",
        "Los bloques de teclado comprueban si una tecla está pulsada."
      ],
      note: [
        "Limita la posición",
        "Puedes usar el bloque si toca borde para que el personaje no se salga del escenario."
      ],
      challenge:
        "Haz que el personaje se mueva con las cuatro flechas y rebote en los bordes."
    },
    {
      title: "Disfraces y apariencias",
      summary: "Cambia el aspecto de un personaje.",
      intro:
        "Cada personaje puede tener varios disfraces. Cambiarlos permite crear animaciones de caminar, saltar o cambiar de emoción.",
      code:
        'al presionar bandera verde\ncambiar disfraz a "feliz"\ndecir "¡Hola!" por 2 segundos\ncambiar tamaño por 20\nesperar 1 segundos\ncambiar tamaño por -20\ncambiar disfraz a "normal"',
      points: [
        "Los disfraces se crean en la pestaña Disfraces.",
        "decir muestra un bocadillo de texto.",
        "cambiar tamaño modifica el porcentaje actual.",
        "esperar pausa el script durante un tiempo."
      ],
      note: [
        "Los bocadillos se pueden quitar",
        "Usa el bloque decir sin texto o pensarlo para ocultar el bocadillo cuando ya no haga falta."
      ],
      challenge:
        "Crea dos disfraces y haz que el personaje cambie de uno a otro cada segundo."
    },
    {
      title: "Sonidos",
      summary: "Añade efectos de sonido y música a tus proyectos.",
      intro:
        "Scratch puede reproducir sonidos cortos o música en bucle. Un buen sonido da vida a un juego, pero demasiado ruido cansa.",
      code:
        'al presionar este objeto\nreproducir sonido "pop"\ncambiar efecto tono por 10\nesperar 0.2 segundos\ncambiar efecto tono por -10',
      points: [
        "Puedes grabar tus propios sonidos o elegir de la biblioteca.",
        "reproducir sonido termina antes de seguir con el siguiente bloque.",
        "Los efectos de tono y volumen modifican el sonido.",
        "Detener todos los sonidos es útil al cambiar de escena."
      ],
      note: [
        "Cuida los oídos",
        "No pongas música a volumen máximo ni sonidos repetidos sin parar. Piensa en quien está jugando."
      ],
      challenge:
        "Haz que el personaje reproduzca un sonido cada vez que se haga clic sobre él."
    },
    {
      title: "Bucles y clones",
      summary: "Repite acciones y crea copias de un personaje.",
      intro:
        "Los bucles permiten repetir bloques. Los clones crean copias temporales de un personaje, perfectas para lluvia, enemigos o estrellas.",
      code:
        "al presionar bandera verde\nrepetir 10\n  crear clon de mí mismo\n  esperar 0.5 segundos\n\ncuando empiece como clon\nir a posición aleatoria\nmostrar\nesperar 2 segundos\neliminar este clon",
      points: [
        "repetir ejecuta un bloque un número fijo de veces.",
        "por siempre se repite hasta que se detiene el proyecto.",
        "cuando empiece como clon separa el comportamiento de la copia.",
        "eliminar este clon borra la copia y libera recursos."
      ],
      note: [
        "Los clones tienen límite",
        "Scratch limita a 300 clones. Si creas clones sin eliminarlos, el proyecto se quedará sin copias."
      ],
      challenge:
        "Crea una lluvia de diez clones que aparezcan en posiciones aleatorias y desaparezcan al caer."
    },
    {
      title: "Condicionales y sensores",
      summary: "Haz que el juego reaccione al entorno.",
      intro:
        "Los sensores permiten saber si un personaje toca algo, el borde o el ratón. Con si y si no, el programa decide qué hacer.",
      code:
        'por siempre\n  si ¿tocando el color rojo? entonces\n    decir "¡Choque!" por 1 segundos\n    ir a x: 0 y: 0\n  si ¿tocando borde? entonces\n    apuntar en dirección (0 - dirección)\n    mover 10 pasos',
      points: [
        "tocando el color comprueba un color concreto del escenario.",
        "tocando borde detecta el límite del escenario.",
        "apuntar en dirección cambia hacia dónde mira el personaje.",
        "Los sensores no cambian nada por sí solos: hay que combinarlos con condiciones."
      ],
      note: [
        "Comprueba dentro del bucle",
        "Si la comprobación no está dentro de por siempre, solo se ejecuta una vez y el personaje no reacciona."
      ],
      challenge:
        "Crea un laberinto donde el personaje vuelva al inicio al tocar las paredes."
    },
    {
      title: "Mensajes y escenas",
      summary: "Coordina varios personajes y fondos.",
      intro:
        "Los mensajes permiten que un personaje avise a otro de que algo ha pasado. Así puedes coordinar historias y juegos con varias pantallas.",
      code:
        'al presionar bandera verde\ncambiar fondo a "bosque"\nenviar "empezar" y esperar\ndecir "La aventura continúa" por 2 segundos\n\nnuevo mensaje\n  borrar todos los efectos\n  mostrar',
      points: [
        "enviar mensaje avisa a todos los scripts que lo esperan.",
        "enviar y esperar pausa hasta que el receptor termina.",
        "al recibir mensaje inicia un script cuando llega el aviso.",
        "Los fondos se cambian desde la biblioteca o desde tus imágenes."
      ],
      note: [
        "Elige nombres claros",
        "Un mensaje llamado empezar se entiende mejor que uno llamado mensaje1. Te ahorrará confusiones."
      ],
      challenge:
        "Crea dos escenas y usa un mensaje para pasar de la primera a la segunda."
    },
    {
      title: "Listas y variables",
      summary: "Guarda puntuaciones y muchos datos.",
      intro:
        "Una variable guarda un solo valor. Una lista guarda muchos. Puedes añadir elementos, consultarlos y borrarlos.",
      code:
        'al presionar bandera verde\nborrar todos los elementos de "puntos"\nañadir 10 a "puntos"\nañadir 20 a "puntos"\ndecir elemento 1 de "puntos"\ncambiar puntuación por 1',
      points: [
        "Las variables se crean en la categoría Variables.",
        "Las listas pueden ser globales o de un solo personaje.",
        "añadir mete un elemento al final.",
        "elemento 1 de una lista empieza a contar desde 1."
      ],
      note: [
        "Variable o lista",
        "Si solo necesitas la puntuación actual, usa una variable. Si necesitas un historial, usa una lista."
      ],
      challenge:
        "Crea una lista para guardar los nombres de los jugadores y muestra el primero y el último."
    },
    {
      title: "Proyecto: tu primer juego",
      summary: "Diseña un juego pequeño de principio a fin.",
      intro:
        "Un juego necesita un objetivo, reglas y una forma de ganar o perder. Empieza pequeño: recoger objetos o esquivar enemigos ya es un juego completo.",
      code:
        "al presionar bandera verde\nponer puntuación en 0\nir a x: 0 y: 0\npor siempre\n  si ¿tocando estrella? entonces\n    cambiar puntuación por 1\n    ir a posición aleatoria\n  si ¿tocando enemigo? entonces\n    decir \"¡Perdiste!\" por 2 segundos\n    detener todos",
      points: [
        "Define primero cómo se gana y cómo se pierde.",
        "La puntuación debe empezar en cero.",
        "Los objetos que desaparecen deben volver a aparecer en otro lugar.",
        "Prueba el juego varias veces antes de compartirlo."
      ],
      note: [
        "Empieza por lo mínimo",
        "Primero haz que se pueda jugar. Después añade sonidos, fondos y animaciones. Así nunca te quedas sin un juego terminado."
      ],
      challenge:
        "Añade un temporizador de 30 segundos y una pantalla final con la puntuación."
    }
  ];

  EXTRA.lua = [
    {
      title: "Tablas",
      summary: "Usa la estructura más importante de Lua.",
      intro:
        "En Lua casi todo se guarda en tablas. Pueden funcionar como listas o como diccionarios con claves con nombre.",
      code:
        'local jugador = { nombre = "Ada", puntos = 0 }\njugador.puntos = jugador.puntos + 10\nprint(jugador.nombre .. " tiene " .. jugador.puntos)\n\nlocal frutas = { "manzana", "pera", "plátano" }\nprint(#frutas)\nprint(frutas[1])',
      points: [
        "Las listas se crean con valores separados por comas.",
        "Los diccionarios usan clave = valor.",
        "# devuelve la longitud de una lista.",
        "Las listas de Lua empiezan en 1, no en 0."
      ],
      note: [
        "Empieza a contar desde 1",
        "Si vienes de JavaScript o Python, recuerda que frutas[1] es el primer elemento en Lua."
      ],
      challenge:
        "Crea una tabla con tres notas, calcula su suma y muestra el resultado."
    },
    {
      title: "Funciones",
      summary: "Agrupa código y devuelve resultados.",
      intro:
        "Las funciones de Lua se declaran con function. Pueden recibir parámetros y devolver varios valores a la vez.",
      code:
        'local function saludar(nombre)\n  return "Hola, " .. nombre\nend\n\nlocal function dividir(a, b)\n  return a / b, a % b\nend\n\nprint(saludar("Ada"))\nlocal cociente, resto = dividir(10, 3)\nprint(cociente, resto)',
      points: [
        "local limita la función al archivo o bloque actual.",
        "return devuelve uno o varios valores.",
        "Los parámetros se separan con comas.",
        "Puedes guardar una función en una variable."
      ],
      note: [
        "Una función, una idea",
        "Si una función necesita un comentario largo para explicarse, suele ser mejor dividirla en funciones más pequeñas."
      ],
      challenge:
        "Escribe una función que reciba un nombre y una edad y devuelva una frase completa."
    },
    {
      title: "Textos",
      summary: "Une, corta y transforma cadenas de texto.",
      intro:
        "Los textos son cadenas de caracteres. Lua trae funciones para unirlos, medirlos, cortarlos y cambiar mayúsculas.",
      code:
        'local texto = "LibreCoding"\n\nprint(string.upper(texto))\nprint(#texto)\nprint(string.sub(texto, 1, 5))\nprint(texto .. " es genial")',
      points: [
        ".. une dos textos.",
        "# devuelve cuántos caracteres tiene.",
        "string.sub(texto, inicio, fin) corta un fragmento.",
        "string.upper y string.lower cambian las mayúsculas."
      ],
      note: [
        "Las posiciones incluyen el final",
        "En string.sub, el segundo número es la posición final incluida. string.sub(\"hola\", 1, 2) devuelve \"ho\"."
      ],
      challenge:
        "Pide un nombre y muestra su primera letra, su longitud y el nombre en mayúsculas."
    },
    {
      title: "Números y aleatoriedad",
      summary: "Haz cálculos y genera valores al azar.",
      intro:
        "Lua usa math para redondear, calcular potencias y generar números aleatorios. Es muy útil para juegos y simulaciones.",
      code:
        'math.randomseed(os.time())\n\nlocal dado = math.random(1, 6)\nprint("Sacaste " .. dado)\nprint(math.floor(3.9))\nprint(math.sqrt(81))\nprint(math.max(3, 8, 5))',
      points: [
        "math.random(1, 6) genera un número entre 1 y 6.",
        "math.floor redondea hacia abajo.",
        "math.sqrt calcula la raíz cuadrada.",
        "math.max devuelve el número mayor."
      ],
      note: [
        "Semilla aleatoria",
        "math.randomseed(os.time()) hace que los números cambien en cada ejecución. Sin semilla, la secuencia puede repetirse."
      ],
      challenge:
        "Simula el lanzamiento de dos dados y muestra la suma total."
    },
    {
      title: "Archivos",
      summary: "Guarda y lee datos desde el disco.",
      intro:
        "Lua puede abrir archivos para guardar puntuaciones o leer niveles. Recuerda cerrar siempre el archivo al terminar.",
      code:
        'local archivo = io.open("notas.txt", "w")\narchivo:write("Hola\\n")\narchivo:write("Segunda línea\\n")\narchivo:close()\n\nlocal lectura = io.open("notas.txt", "r")\nprint(lectura:read("*a"))\nlectura:close()',
      points: [
        "El modo w escribe y borra el contenido anterior.",
        "El modo r abre para leer.",
        "write escribe texto en el archivo.",
        "close cierra el archivo y guarda los cambios."
      ],
      note: [
        "Controla los errores",
        "io.open puede devolver nil si el archivo no existe. Comprueba el resultado antes de usarlo."
      ],
      challenge:
        "Guarda tres puntuaciones en un archivo y después léelas para mostrarlas."
    },
    {
      title: "Metatablas y objetos",
      summary: "Da superpoderes a las tablas.",
      intro:
        "Las metatablas permiten que una tabla se comporte de formas especiales. Con ellas se puede imitar la programación orientada a objetos.",
      code:
        'local Mascota = {}\nMascota.__index = Mascota\n\nfunction Mascota:nueva(nombre)\n  local objeto = { nombre = nombre, energia = 100 }\n  return setmetatable(objeto, self)\nend\n\nfunction Mascota:jugar()\n  self.energia = self.energia - 10\nend\n\nlocal luna = Mascota:nueva("Luna")\nluna:jugar()\nprint(luna.nombre, luna.energia)',
      points: [
        "__index permite buscar métodos en la tabla de la clase.",
        "setmetatable conecta la tabla con su metatabla.",
        "Los dos puntos pasan self automáticamente.",
        "Cada objeto conserva sus propios datos."
      ],
      note: [
        "No es magia",
        "Las metatablas son potentes, pero también pueden hacer el código difícil de seguir. Úsalas cuando aporten claridad."
      ],
      challenge:
        "Crea una clase Cuenta con un método para ingresar y otro para retirar dinero."
    },
    {
      title: "LÖVE y los videojuegos",
      summary: "Crea juegos 2D con Lua y LÖVE.",
      intro:
        "LÖVE es un motor de videojuegos que usa Lua. Con pocas funciones puedes dibujar en pantalla y responder al teclado.",
      code:
        'function love.load()\n  x = 100\n  y = 100\nend\n\nfunction love.update(dt)\n  if love.keyboard.isDown("right") then\n    x = x + 200 * dt\n  end\nend\n\nfunction love.draw()\n  love.graphics.rectangle("fill", x, y, 40, 40)\nend',
      points: [
        "love.load se ejecuta una vez al empezar.",
        "love.update se llama en cada fotograma.",
        "dt es el tiempo pasado desde el fotograma anterior.",
        "love.draw dibuja la escena."
      ],
      note: [
        "Movimiento por tiempo",
        "Multiplica la velocidad por dt para que el juego se mueva igual de rápido en ordenadores lentos y rápidos."
      ],
      challenge:
        "Añade movimiento vertical con las flechas arriba y abajo."
    },
    {
      title: "Proyecto: juego de preguntas",
      summary: "Usa tablas, funciones y azar en un mismo programa.",
      intro:
        "Un juego de preguntas puede guardar las preguntas en una tabla, elegir una al azar y comprobar la respuesta.",
      code:
        'local preguntas = {\n  { texto = "¿Cuánto es 2 + 2?", respuesta = "4" },\n  { texto = "¿Cuánto es 3 * 3?", respuesta = "9" },\n  { texto = "¿Cuánto es 10 - 4?", respuesta = "6" }\n}\n\nlocal elegida = preguntas[math.random(#preguntas)]\nprint(elegida.texto)\nlocal respuesta = io.read()\nif respuesta == elegida.respuesta then\n  print("¡Correcto!")\nelse\n  print("La respuesta era " .. elegida.respuesta)\nend',
      points: [
        "La tabla exterior guarda todas las preguntas.",
        "Cada pregunta es una tabla con texto y respuesta.",
        "math.random elige una posición válida.",
        "Compara la respuesta con ==."
      ],
      note: [
        "Piensa en los errores",
        "El programa debería funcionar también si la persona escribe espacios de más. Puedes limpiar el texto antes de comparar."
      ],
      challenge:
        "Añade dos preguntas más y un sistema de puntos que suba con cada acierto."
    }
  ];

  EXTRA.java = [
    {
      title: "Métodos y parámetros",
      summary: "Divide el programa en funciones con nombre.",
      intro:
        "En Java las funciones se llaman métodos. Un método puede recibir datos, hacer un cálculo y devolver un resultado.",
      code:
        'public class Main {\n  static int sumar(int a, int b) {\n    return a + b;\n  }\n\n  static void saludar(String nombre) {\n    System.out.println("Hola, " + nombre);\n  }\n\n  public static void main(String[] args) {\n    saludar("Ada");\n    System.out.println(sumar(2, 3));\n  }\n}',
      points: [
        "El tipo antes del nombre indica qué devuelve el método.",
        "void significa que no devuelve nada.",
        "Los parámetros se declaran con su tipo.",
        "main es el método por donde empieza el programa."
      ],
      note: [
        "Nombres claros",
        "Un método llamado calcularTotal dice mucho más que uno llamado cosa1. El nombre debe explicar qué hace."
      ],
      challenge:
        "Crea un método que reciba tres notas y devuelva la media."
    },
    {
      title: "Bucles en Java",
      summary: "Repite código con for y while.",
      intro:
        "Java tiene bucles for, while y do-while. Los tres repiten un bloque, pero comprueban la condición en momentos distintos.",
      code:
        'for (int i = 1; i <= 5; i++) {\n  System.out.println("Vuelta " + i);\n}\n\nint vidas = 3;\nwhile (vidas > 0) {\n  System.out.println("Vidas: " + vidas);\n  vidas--;\n}',
      points: [
        "for es ideal cuando conoces el número de repeticiones.",
        "while comprueba la condición antes de cada vuelta.",
        "do-while ejecuta el bloque al menos una vez.",
        "i++ suma uno a i."
      ],
      note: [
        "No olvides actualizar",
        "Si la variable de control no cambia, el bucle puede no terminar nunca."
      ],
      challenge:
        "Muestra los números del 10 al 1 usando un bucle for."
    },
    {
      title: "Arrays",
      summary: "Guarda varios valores del mismo tipo.",
      intro:
        "Un array de Java tiene un tamaño fijo. Se accede a sus elementos por índice, empezando en cero.",
      code:
        'int[] notas = { 8, 9, 7, 10 };\n\nfor (int i = 0; i < notas.length; i++) {\n  System.out.println(notas[i]);\n}\n\nint suma = 0;\nfor (int nota : notas) {\n  suma += nota;\n}\nSystem.out.println("Media: " + (suma / notas.length));',
      points: [
        "El tipo se escribe como int[].",
        "length indica cuántos elementos hay.",
        "El primer índice es 0 y el último length - 1.",
        "El for mejorado recorre todos los elementos."
      ],
      note: [
        "Fuera de rango",
        "Si pides notas[10] en un array de cuatro elementos, Java lanza una excepción. Revisa siempre los límites."
      ],
      challenge:
        "Crea un array con cinco nombres y muestra cada uno en una línea."
    },
    {
      title: "Objetos y clases",
      summary: "Modela cosas del mundo real con Java.",
      intro:
        "Una clase describe cómo es un objeto y qué puede hacer. Un objeto es una copia concreta creada a partir de esa clase.",
      code:
        'class Mascota {\n  String nombre;\n  int energia;\n\n  Mascota(String nombre) {\n    this.nombre = nombre;\n    this.energia = 100;\n  }\n\n  void jugar() {\n    energia -= 10;\n  }\n}\n\nMascota luna = new Mascota("Luna");\nluna.jugar();\nSystem.out.println(luna.nombre + ": " + luna.energia);',
      points: [
        "Los atributos guardan el estado del objeto.",
        "El constructor tiene el mismo nombre que la clase.",
        "new crea un objeto nuevo.",
        "this se refiere al objeto actual."
      ],
      note: [
        "Encapsulación",
        "Más adelante puedes hacer los atributos privados y controlar su acceso con métodos. Así evitas cambios inesperados."
      ],
      challenge:
        "Crea una clase Libro con título, autor y un método que muestre su información."
    },
    {
      title: "Herencia",
      summary: "Comparte comportamiento entre clases.",
      intro:
        "La herencia permite crear una clase nueva a partir de otra. La clase hija hereda atributos y métodos, y puede añadir o cambiar cosas.",
      code:
        'class Animal {\n  void hablar() {\n    System.out.println("...");\n  }\n}\n\nclass Perro extends Animal {\n  @Override\n  void hablar() {\n    System.out.println("Guau");\n  }\n}\n\nAnimal animal = new Perro();\nanimal.hablar();',
      points: [
        "extends indica de qué clase se hereda.",
        "@Override avisa de que se está reemplazando un método.",
        "Un objeto Perro también es un Animal.",
        "La clase hija puede usar los métodos públicos de la madre."
      ],
      note: [
        "No abuses de la herencia",
        "Si dos clases comparten cosas pero no son del mismo tipo, a veces es mejor usar composición: guardar un objeto dentro de otro."
      ],
      challenge:
        "Crea una clase Vehiculo y dos clases hijas, Bicicleta y Coche, con su propia forma de moverse."
    },
    {
      title: "ArrayList",
      summary: "Usa listas que pueden crecer.",
      intro:
        "Los arrays tienen tamaño fijo. ArrayList es una lista dinámica: puedes añadir y quitar elementos cuando quieras.",
      code:
        'import java.util.ArrayList;\n\nArrayList<String> tareas = new ArrayList<>();\ntareas.add("Estudiar");\ntareas.add("Leer");\ntareas.remove("Leer");\n\nfor (String tarea : tareas) {\n  System.out.println(tarea);\n}',
      points: [
        "add añade un elemento al final.",
        "remove elimina un elemento.",
        "size devuelve cuántos elementos hay.",
        "Los genéricos indican el tipo de los elementos."
      ],
      note: [
        "Interfaz List",
        "Puedes declarar List<String> lista = new ArrayList<>(); así el código depende de la interfaz y no de una implementación concreta."
      ],
      challenge:
        "Crea una lista de compras, añade cuatro productos y elimina uno."
    },
    {
      title: "Excepciones",
      summary: "Maneja los errores sin que el programa se caiga.",
      intro:
        "Cuando algo falla, Java lanza una excepción. Con try y catch puedes responder al error y seguir con el programa.",
      code:
        'try {\n  int resultado = 10 / 0;\n  System.out.println(resultado);\n} catch (ArithmeticException e) {\n  System.out.println("No se puede dividir entre cero");\n} finally {\n  System.out.println("Fin");\n}',
      points: [
        "try contiene el código que puede fallar.",
        "catch recibe el tipo de excepción y la maneja.",
        "finally se ejecuta siempre.",
        "Puedes lanzar tus propias excepciones con throw."
      ],
      note: [
        "Atrapa lo concreto",
        "Evita capturar Exception para todo. Un catch demasiado general puede esconder errores que no esperabas."
      ],
      challenge:
        "Pide un número y muestra un mensaje si el texto no se puede convertir a entero."
    },
    {
      title: "Proyecto: sistema de tareas",
      summary: "Combina clases, listas y métodos.",
      intro:
        "Un gestor de tareas es un proyecto perfecto para practicar Java. Cada tarea es un objeto y la lista guarda todas.",
      code:
        'import java.util.ArrayList;\n\nclass Tarea {\n  String titulo;\n  boolean hecha;\n\n  Tarea(String titulo) {\n    this.titulo = titulo;\n  }\n}\n\nArrayList<Tarea> tareas = new ArrayList<>();\ntareas.add(new Tarea("Aprender Java"));\ntareas.get(0).hecha = true;\n\nfor (Tarea t : tareas) {\n  System.out.println((t.hecha ? "[x] " : "[ ] ") + t.titulo);\n}',
      points: [
        "Cada tarea guarda su título y si está hecha.",
        "ArrayList permite añadir tantas tareas como quieras.",
        "get(0) devuelve el primer elemento.",
        "El operador ? elige un texto u otro."
      ],
      note: [
        "Separa los datos de la interfaz",
        "Primero haz que funcione por consola. Después podrás añadir botones y pantallas sin reescribir la lógica."
      ],
      challenge:
        "Añade un método para contar cuántas tareas quedan pendientes."
    }
  ];

  EXTRA.c = [
    {
      title: "Variables y tipos en C",
      summary: "Declara números y caracteres con su tipo exacto.",
      intro:
        "En C cada variable tiene un tipo fijo. int guarda enteros, float decimales y char un carácter. El tipo decide cuánta memoria se usa.",
      code:
        '#include <stdio.h>\n\nint main(void) {\n  int edad = 12;\n  float altura = 1.55f;\n  char inicial = \'A\';\n\n  printf("Edad: %d\\n", edad);\n  printf("Altura: %.2f\\n", altura);\n  printf("Inicial: %c\\n", inicial);\n  return 0;\n}',
      points: [
        "int se usa para números enteros.",
        "float y double guardan decimales.",
        "char guarda un solo carácter entre comillas simples.",
        "Cada tipo tiene su formato en printf: %d, %f y %c."
      ],
      note: [
        "No mezcles tipos a lo loco",
        "C es estricto. Si usas el formato equivocado en printf, el resultado puede ser incorrecto o imprevisible."
      ],
      challenge:
        "Declara variables para tu edad, tu altura y tu inicial y muéstralas con printf."
    },
    {
      title: "printf y scanf",
      summary: "Muestra datos y pide información al usuario.",
      intro:
        "printf escribe en la pantalla y scanf lee lo que escribe el usuario. Juntos permiten crear programas de consola interactivos.",
      code:
        '#include <stdio.h>\n\nint main(void) {\n  int edad;\n\n  printf("¿Cuántos años tienes? ");\n  scanf("%d", &edad);\n  printf("Tienes %d años.\\n", edad);\n\n  return 0;\n}',
      points: [
        "printf usa %d para enteros y \\n para saltar de línea.",
        "scanf necesita la dirección de la variable con &.",
        "El formato de scanf debe coincidir con el tipo.",
        "Comprueba que scanf leyó correctamente el dato."
      ],
      note: [
        "El & es importante",
        "scanf(\"%d\", edad) sin & no guarda el valor donde debe y puede romper el programa. Usa &edad."
      ],
      challenge:
        "Pide dos números y muestra su suma, resta y multiplicación."
    },
    {
      title: "Condiciones y bucles",
      summary: "Controla el flujo del programa en C.",
      intro:
        "C usa if, else, for y while igual que otros lenguajes, pero con llaves para agrupar las instrucciones.",
      code:
        '#include <stdio.h>\n\nint main(void) {\n  for (int i = 1; i <= 5; i++) {\n    if (i % 2 == 0) {\n      printf("%d es par\\n", i);\n    } else {\n      printf("%d es impar\\n", i);\n    }\n  }\n  return 0;\n}',
      points: [
        "if y else eligen entre dos caminos.",
        "% devuelve el resto de una división.",
        "for repite con inicio, condición y avance.",
        "Las llaves agrupan varias instrucciones."
      ],
      note: [
        "Punto y coma",
        "En C casi todas las instrucciones terminan con ;. Olvidarlo es uno de los errores más habituales."
      ],
      challenge:
        "Muestra los números del 1 al 20 y marca cuáles son múltiplos de 3."
    },
    {
      title: "Funciones",
      summary: "Divide el programa en piezas reutilizables.",
      intro:
        "Una función de C tiene un tipo de retorno, un nombre y unos parámetros. Si no devuelve nada, su tipo es void.",
      code:
        '#include <stdio.h>\n\nint sumar(int a, int b) {\n  return a + b;\n}\n\nvoid saludar(const char *nombre) {\n  printf("Hola, %s\\n", nombre);\n}\n\nint main(void) {\n  saludar("Ada");\n  printf("%d\\n", sumar(2, 3));\n  return 0;\n}',
      points: [
        "El tipo antes del nombre indica qué devuelve.",
        "void significa que no devuelve valor.",
        "return termina la función y devuelve el resultado.",
        "Las funciones deben declararse antes de usarse o tener un prototipo."
      ],
      note: [
        "Prototipos",
        "Si una función se usa antes de su definición, declara su prototipo al principio del archivo."
      ],
      challenge:
        "Escribe una función que reciba tres notas y devuelva la media."
    },
    {
      title: "Arrays",
      summary: "Guarda varios valores en memoria contigua.",
      intro:
        "Un array de C es un bloque de elementos del mismo tipo. Su tamaño se fija al declararlo y no crece solo.",
      code:
        '#include <stdio.h>\n\nint main(void) {\n  int notas[4] = { 8, 9, 7, 10 };\n  int suma = 0;\n\n  for (int i = 0; i < 4; i++) {\n    suma += notas[i];\n  }\n\n  printf("Media: %.2f\\n", suma / 4.0);\n  return 0;\n}',
      points: [
        "El índice empieza en 0.",
        "El último índice válido es tamaño - 1.",
        "No puedes cambiar el tamaño de un array fijo.",
        "C no comprueba los límites: si te sales, el comportamiento es peligroso."
      ],
      note: [
        "Desbordamiento",
        "Escribir fuera de los límites de un array puede corromper memoria. Revisa siempre las condiciones de los bucles."
      ],
      challenge:
        "Crea un array con cinco temperaturas y muestra la máxima y la mínima."
    },
    {
      title: "Punteros",
      summary: "Guarda direcciones de memoria.",
      intro:
        "Un puntero guarda la dirección donde vive un valor. Son una de las herramientas más potentes y delicadas de C.",
      code:
        '#include <stdio.h>\n\nint main(void) {\n  int numero = 42;\n  int *puntero = &numero;\n\n  printf("Valor: %d\\n", numero);\n  printf("Dirección: %p\\n", (void *)puntero);\n  printf("Valor desde el puntero: %d\\n", *puntero);\n\n  *puntero = 50;\n  printf("Nuevo valor: %d\\n", numero);\n  return 0;\n}',
      points: [
        "& obtiene la dirección de una variable.",
        "* declara un puntero o accede al valor apuntado.",
        "Un puntero debe apuntar a memoria válida antes de usarse.",
        "Los punteros permiten modificar valores desde otra función."
      ],
      note: [
        "Punteros sin inicializar",
        "Un puntero que no apunta a nada no debe usarse. Inicialízalo a NULL si todavía no tiene destino."
      ],
      challenge:
        "Crea una función que reciba un puntero a un número y lo multiplique por dos."
    },
    {
      title: "Cadenas de texto",
      summary: "Trabaja con texto como arrays de caracteres.",
      intro:
        "En C un texto es un array de char que termina con un carácter especial llamado cero. Por eso hay que reservar espacio para el final.",
      code:
        '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n  char nombre[20] = "Ada";\n\n  printf("Hola, %s\\n", nombre);\n  printf("Longitud: %lu\\n", strlen(nombre));\n\n  strcat(nombre, " Lovelace");\n  printf("Completo: %s\\n", nombre);\n  return 0;\n}',
      points: [
        "char nombre[20] reserva espacio para 19 caracteres y el final.",
        "%s muestra una cadena.",
        "strlen cuenta los caracteres sin contar el cero final.",
        "strcat añade texto, pero necesita espacio suficiente."
      ],
      note: [
        "Espacio para el cero",
        "\"Ada\" necesita cuatro bytes: tres letras y el carácter que marca el final."
      ],
      challenge:
        "Pide un nombre, guarda también un apellido y muestra el nombre completo."
    },
    {
      title: "Structs",
      summary: "Agrupa datos de distintos tipos.",
      intro:
        "Un struct permite crear tu propio tipo combinando varios campos. Es perfecto para representar un estudiante o un producto.",
      code:
        '#include <stdio.h>\n\nstruct Estudiante {\n  char nombre[20];\n  int edad;\n  float nota;\n};\n\nint main(void) {\n  struct Estudiante ada = { "Ada", 12, 9.5f };\n\n  printf("%s tiene %d años y una nota de %.1f\\n",\n         ada.nombre, ada.edad, ada.nota);\n  return 0;\n}',
      points: [
        "struct define un tipo con varios campos.",
        "Cada campo puede tener un tipo distinto.",
        "Se accede a los campos con un punto.",
        "Puedes crear arrays de structs para guardar muchos registros."
      ],
      note: [
        "typedef",
        "Puedes usar typedef para no escribir struct cada vez. Es una comodidad, no un cambio de comportamiento."
      ],
      challenge:
        "Crea un struct Libro y muestra por pantalla el título, el autor y el año."
    },
    {
      title: "Archivos y proyecto",
      summary: "Guarda datos en disco desde C.",
      intro:
        "Con fopen, fprintf y fclose puedes escribir archivos. Es la base para guardar puntuaciones o configuraciones.",
      code:
        '#include <stdio.h>\n\nint main(void) {\n  FILE *archivo = fopen("notas.txt", "w");\n  if (archivo == NULL) {\n    printf("No se pudo abrir el archivo\\n");\n    return 1;\n  }\n\n  fprintf(archivo, "Hola\\n");\n  fprintf(archivo, "Segunda línea\\n");\n  fclose(archivo);\n\n  printf("Archivo guardado\\n");\n  return 0;\n}',
      points: [
        "fopen abre un archivo y devuelve un puntero a FILE.",
        "Comprueba si devuelve NULL antes de usar el archivo.",
        "fprintf escribe con formato.",
        "fclose guarda y libera el archivo."
      ],
      note: [
        "Siempre cierra",
        "Si no cierras el archivo, algunos datos pueden no guardarse. fclose es obligatorio cuando terminas."
      ],
      challenge:
        "Escribe tres líneas en un archivo y después ábrelo para leerlas y mostrarlas."
    }
  ];

  EXTRA.cpp = [
    {
      title: "Funciones en C++",
      summary: "Organiza el código en bloques reutilizables.",
      intro:
        "C++ permite funciones normales, valores por defecto y sobrecarga: varias funciones con el mismo nombre pero distintos parámetros.",
      code:
        '#include <iostream>\nusing namespace std;\n\nint sumar(int a, int b) {\n  return a + b;\n}\n\nint sumar(int a, int b, int c) {\n  return a + b + c;\n}\n\nint main() {\n  cout << sumar(2, 3) << endl;\n  cout << sumar(2, 3, 4) << endl;\n  return 0;\n}',
      points: [
        "C++ usa cout para mostrar datos.",
        "endl termina la línea.",
        "La sobrecarga permite el mismo nombre con distintos parámetros.",
        "El tipo de retorno forma parte de la función."
      ],
      note: [
        "No repitas código",
        "Si dos funciones hacen lo mismo con tipos distintos, las plantillas (templates) pueden ayudarte a unificarlas."
      ],
      challenge:
        "Crea una función que calcule el área de un rectángulo y otra que calcule el área de un círculo."
    },
    {
      title: "Arrays y vectores",
      summary: "Usa listas fijas y listas que crecen.",
      intro:
        "C++ conserva los arrays de C, pero también ofrece std::vector, que puede cambiar de tamaño y conoce su longitud.",
      code:
        '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n  vector<int> notas = { 8, 9, 7, 10 };\n  notas.push_back(6);\n\n  for (int nota : notas) {\n    cout << nota << " ";\n  }\n  cout << endl << "Total: " << notas.size() << endl;\n  return 0;\n}',
      points: [
        "vector se declara con el tipo entre < >.",
        "push_back añade un elemento al final.",
        "size devuelve cuántos elementos hay.",
        "El for con dos puntos recorre todos los elementos."
      ],
      note: [
        "Acceso seguro",
        "Para leer un elemento usa at() si quieres que se lance una excepción cuando el índice no existe."
      ],
      challenge:
        "Crea un vector con cinco nombres y muestra el primero y el último."
    },
    {
      title: "Clases",
      summary: "Crea objetos con datos y comportamiento.",
      intro:
        "Una clase de C++ agrupa atributos y métodos. Puede tener un constructor que se ejecuta al crear el objeto.",
      code:
        '#include <iostream>\nusing namespace std;\n\nclass Mascota {\npublic:\n  string nombre;\n  int energia;\n\n  Mascota(string n) : nombre(n), energia(100) {}\n\n  void jugar() {\n    energia -= 10;\n  }\n};\n\nint main() {\n  Mascota luna("Luna");\n  luna.jugar();\n  cout << luna.nombre << ": " << luna.energia << endl;\n  return 0;\n}',
      points: [
        "public permite usar los miembros desde fuera.",
        "El constructor tiene el mismo nombre que la clase.",
        "La lista : nombre(n), energia(100) inicializa campos.",
        "Los métodos pueden modificar el estado del objeto."
      ],
      note: [
        "Encapsulación",
        "En proyectos reales los atributos suelen ser privados. Se accede a ellos con métodos que controlan los cambios."
      ],
      challenge:
        "Crea una clase Cuenta con saldo y métodos para ingresar y retirar."
    },
    {
      title: "Referencias y punteros",
      summary: "Comparte datos sin copiarlos.",
      intro:
        "Una referencia es otro nombre para una variable existente. Un puntero guarda una dirección de memoria. Ambos evitan copiar objetos grandes.",
      code:
        '#include <iostream>\nusing namespace std;\n\nvoid duplicar(int &numero) {\n  numero *= 2;\n}\n\nint main() {\n  int valor = 5;\n  duplicar(valor);\n  cout << valor << endl;\n\n  int *p = &valor;\n  *p = 20;\n  cout << valor << endl;\n  return 0;\n}',
      points: [
        "int &numero declara una referencia.",
        "Los cambios en la referencia afectan a la variable original.",
        "& obtiene una dirección; * accede al valor apuntado.",
        "Las referencias no pueden quedar sin apuntar a nada."
      ],
      note: [
        "Referencia o puntero",
        "Si siempre debe existir un objeto, usa una referencia. Si puede no haber objeto, usa un puntero y compruébalo."
      ],
      challenge:
        "Escribe una función que reciba una referencia a un número y le sume diez."
    },
    {
      title: "La biblioteca STL",
      summary: "Usa contenedores y algoritmos ya probados.",
      intro:
        "La STL incluye vectores, mapas, conjuntos y algoritmos. Aprender a usarla te ahorra escribir estructuras desde cero.",
      code:
        '#include <iostream>\n#include <map>\n#include <algorithm>\n#include <vector>\nusing namespace std;\n\nint main() {\n  map<string, int> puntos;\n  puntos["Ada"] = 10;\n  puntos["Linus"] = 7;\n\n  vector<int> numeros = { 3, 1, 4, 2 };\n  sort(numeros.begin(), numeros.end());\n\n  cout << puntos["Ada"] << endl;\n  cout << numeros[0] << endl;\n  return 0;\n}',
      points: [
        "map asocia claves con valores.",
        "vector es una lista dinámica.",
        "sort ordena un rango.",
        "begin y end marcan el inicio y el final de un contenedor."
      ],
      note: [
        "Lee la documentación",
        "La STL tiene muchas opciones. Conocer lo básico te permite resolver problemas sin reinventar cada estructura."
      ],
      challenge:
        "Crea un map con tres países y sus capitales y muestra una de ellas."
    },
    {
      title: "Herencia",
      summary: "Reutiliza comportamiento entre clases.",
      intro:
        "Una clase puede heredar de otra y especializar su comportamiento. En C++ se usa : public ClaseBase.",
      code:
        '#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n  virtual void hablar() {\n    cout << "..." << endl;\n  }\n};\n\nclass Perro : public Animal {\npublic:\n  void hablar() override {\n    cout << "Guau" << endl;\n  }\n};\n\nint main() {\n  Animal *a = new Perro();\n  a->hablar();\n  delete a;\n  return 0;\n}',
      points: [
        "virtual permite que una clase hija reemplace el método.",
        "override avisa de que se está sobrescribiendo.",
        "Un puntero a la clase base puede apuntar a un objeto hijo.",
        "delete libera la memoria creada con new."
      ],
      note: [
        "Memoria manual",
        "C++ no recoge la basura automáticamente. Cada new necesita su delete o, mejor, usa punteros inteligentes."
      ],
      challenge:
        "Crea una clase Forma con un método área y dos clases hijas, Cuadrado y Círculo."
    },
    {
      title: "Excepciones",
      summary: "Responde a errores de forma controlada.",
      intro:
        "C++ usa try, throw y catch. Puedes lanzar una excepción cuando algo imposible ocurre y capturarla más arriba.",
      code:
        '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nint dividir(int a, int b) {\n  if (b == 0) {\n    throw runtime_error("División entre cero");\n  }\n  return a / b;\n}\n\nint main() {\n  try {\n    cout << dividir(10, 2) << endl;\n    cout << dividir(10, 0) << endl;\n  } catch (const exception &e) {\n    cout << "Error: " << e.what() << endl;\n  }\n  return 0;\n}',
      points: [
        "throw lanza una excepción.",
        "try envuelve el código que puede fallar.",
        "catch captura un tipo de excepción.",
        "what() devuelve el mensaje de la excepción."
      ],
      note: [
        "Excepciones para lo excepcional",
        "No uses excepciones para controlar el flujo normal del programa. Úsalas cuando algo realmente no debería pasar."
      ],
      challenge:
        "Escribe una función que lance una excepción si la edad introducida es negativa."
    },
    {
      title: "Proyecto: agenda de tareas",
      summary: "Practica clases, vectores y STL.",
      intro:
        "Una agenda de tareas combina una clase Tarea con un vector que guarda todas las tareas y algoritmos para recorrerlas.",
      code:
        '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Tarea {\npublic:\n  string titulo;\n  bool hecha;\n\n  Tarea(string t) : titulo(t), hecha(false) {}\n};\n\nint main() {\n  vector<Tarea> tareas;\n  tareas.push_back(Tarea("Aprender C++"));\n  tareas[0].hecha = true;\n\n  for (const Tarea &t : tareas) {\n    cout << (t.hecha ? "[x] " : "[ ] ") << t.titulo << endl;\n  }\n  return 0;\n}',
      points: [
        "La clase Tarea guarda el título y el estado.",
        "vector almacena todas las tareas.",
        "const evita modificar la tarea al recorrerla.",
        "El operador ? elige entre dos textos."
      ],
      note: [
        "Piensa en las operaciones",
        "Antes de escribir código, decide qué debe poder hacer la agenda: añadir, completar, borrar y listar."
      ],
      challenge:
        "Añade una función que cuente cuántas tareas están pendientes."
    }
  ];

  EXTRA.csharp = [
    {
      title: "Variables y tipos en C#",
      summary: "Crea valores con tipos claros y seguros.",
      intro:
        "C# es un lenguaje tipado: cada variable tiene un tipo. Puedes declararlo explícitamente o dejar que el compilador lo deduzca con var.",
      code:
        'using System;\n\nclass Program {\n  static void Main() {\n    int edad = 12;\n    double altura = 1.55;\n    string nombre = "Ada";\n    bool activo = true;\n\n    Console.WriteLine($"{nombre} tiene {edad} años");\n    Console.WriteLine(activo);\n  }\n}',
      points: [
        "int, double, string y bool son tipos básicos.",
        "var deduce el tipo a partir del valor.",
        "Las cadenas usan comillas dobles.",
        "Los nombres de variables empiezan con minúscula por convención."
      ],
      note: [
        "Interpolación de cadenas",
        "El símbolo $ delante de una cadena permite meter variables entre llaves sin concatenar con +."
      ],
      challenge:
        "Crea variables para tu nombre, tu edad y tu altura y muéstralas en una sola frase."
    },
    {
      title: "Condiciones y bucles",
      summary: "Controla el flujo del programa en C#.",
      intro:
        "C# usa if, else, switch, for y while. La sintaxis es parecida a Java y JavaScript, pero con sus propias reglas.",
      code:
        'using System;\n\nclass Program {\n  static void Main() {\n    for (int i = 1; i <= 5; i++) {\n      if (i % 2 == 0) {\n        Console.WriteLine($"{i} es par");\n      } else {\n        Console.WriteLine($"{i} es impar");\n      }\n    }\n  }\n}',
      points: [
        "if y else eligen entre caminos.",
        "% devuelve el resto.",
        "for repite con inicio, condición y avance.",
        "switch es útil para comparar un valor con varios casos."
      ],
      note: [
        "switch moderno",
        "En C# moderno puedes usar switch con expresiones, que devuelven un valor de forma más compacta."
      ],
      challenge:
        "Muestra los números del 1 al 15 y escribe \"Fizz\" si son múltiplos de 3."
    },
    {
      title: "Métodos",
      summary: "Organiza el código en funciones reutilizables.",
      intro:
        "Un método de C# puede recibir parámetros, devolver un valor y tener valores por defecto.",
      code:
        'using System;\n\nclass Program {\n  static int Sumar(int a, int b) {\n    return a + b;\n  }\n\n  static void Saludar(string nombre = "amigo") {\n    Console.WriteLine($"Hola, {nombre}");\n  }\n\n  static void Main() {\n    Saludar();\n    Saludar("Ada");\n    Console.WriteLine(Sumar(2, 3));\n  }\n}',
      points: [
        "El tipo antes del nombre indica qué devuelve.",
        "void significa que no devuelve nada.",
        "Los parámetros pueden tener un valor por defecto.",
        "Los métodos static pertenecen a la clase, no a un objeto."
      ],
      note: [
        "Nombres con verbo",
        "Un método suele empezar con un verbo: CalcularMedia, MostrarMenu, GuardarPartida. Así se entiende qué hace."
      ],
      challenge:
        "Escribe un método que reciba tres notas y devuelva la media."
    },
    {
      title: "Clases y objetos",
      summary: "Modela entidades con estado y comportamiento.",
      intro:
        "Una clase de C# tiene propiedades, métodos y constructores. Puedes controlar quién lee o escribe cada dato.",
      code:
        'using System;\n\nclass Mascota {\n  public string Nombre { get; set; }\n  public int Energia { get; private set; }\n\n  public Mascota(string nombre) {\n    Nombre = nombre;\n    Energia = 100;\n  }\n\n  public void Jugar() {\n    Energia -= 10;\n  }\n}\n\nclass Program {\n  static void Main() {\n    Mascota luna = new Mascota("Luna");\n    luna.Jugar();\n    Console.WriteLine($"{luna.Nombre}: {luna.Energia}");\n  }\n}',
      points: [
        "Las propiedades usan get y set.",
        "private set impide cambiar la energía desde fuera.",
        "El constructor tiene el mismo nombre que la clase.",
        "new crea una instancia."
      ],
      note: [
        "Propiedades, no campos públicos",
        "Las propiedades permiten cambiar la implementación más adelante sin romper el código que las usa."
      ],
      challenge:
        "Crea una clase Libro con título, autor y un método que muestre su información."
    },
    {
      title: "Listas",
      summary: "Guarda colecciones que pueden crecer.",
      intro:
        "List<T> es una colección dinámica. Puedes añadir, quitar, buscar y recorrer elementos con comodidad.",
      code:
        'using System;\nusing System.Collections.Generic;\n\nclass Program {\n  static void Main() {\n    List<string> tareas = new List<string>();\n    tareas.Add("Estudiar");\n    tareas.Add("Leer");\n    tareas.Remove("Leer");\n\n    foreach (string tarea in tareas) {\n      Console.WriteLine(tarea);\n    }\n  }\n}',
      points: [
        "List<T> necesita el tipo entre < >.",
        "Add añade al final y Remove elimina.",
        "Count devuelve cuántos elementos hay.",
        "foreach recorre todos los elementos."
      ],
      note: [
        "Capacidad y cantidad",
        "Count es el número de elementos. Capacity es el espacio reservado internamente. Casi siempre te interesa Count."
      ],
      challenge:
        "Crea una lista de compras, añade cuatro productos y elimina uno."
    },
    {
      title: "LINQ",
      summary: "Consulta colecciones con estilo declarativo.",
      intro:
        "LINQ permite filtrar, ordenar y transformar colecciones con métodos como Where, Select y OrderBy.",
      code:
        'using System;\nusing System.Linq;\nusing System.Collections.Generic;\n\nclass Program {\n  static void Main() {\n    List<int> numeros = new List<int> { 1, 2, 3, 4, 5, 6 };\n\n    var pares = numeros.Where(n => n % 2 == 0);\n    var dobles = numeros.Select(n => n * 2);\n\n    foreach (int n in pares) {\n      Console.WriteLine(n);\n    }\n    Console.WriteLine(string.Join(", ", dobles));\n  }\n}',
      points: [
        "Where filtra elementos.",
        "Select transforma cada elemento.",
        "OrderBy ordena una colección.",
        "Las expresiones lambda se escriben con =>."
      ],
      note: [
        "Evaluación diferida",
        "Muchas consultas LINQ no se ejecutan hasta que recorres el resultado. Tenlo en cuenta si los datos cambian."
      ],
      challenge:
        "Filtra una lista de nombres y quédate solo con los que tengan más de cuatro letras."
    },
    {
      title: "Excepciones",
      summary: "Controla los errores de forma ordenada.",
      intro:
        "C# usa try, catch y finally. Las excepciones permiten separar el código normal del manejo de errores.",
      code:
        'using System;\n\nclass Program {\n  static void Main() {\n    try {\n      int numero = int.Parse("hola");\n      Console.WriteLine(numero);\n    } catch (FormatException) {\n      Console.WriteLine("El texto no es un número");\n    } finally {\n      Console.WriteLine("Fin");\n    }\n  }\n}',
      points: [
        "try contiene el código que puede fallar.",
        "catch captura un tipo concreto de error.",
        "finally se ejecuta siempre.",
        "int.TryParse evita la excepción si solo quieres comprobar."
      ],
      note: [
        "TryParse",
        "Si esperas que el usuario escriba cualquier cosa, int.TryParse es más cómodo que atrapar una excepción."
      ],
      challenge:
        "Pide una edad y muestra un mensaje si el texto no se puede convertir a número."
    },
    {
      title: "C# y Unity",
      summary: "Descubre cómo se usa C# en videojuegos.",
      intro:
        "Unity es uno de los motores de videojuegos más usados y programa sus comportamientos con C#. Los scripts se conectan a objetos de la escena.",
      code:
        'using UnityEngine;\n\npublic class MoverJugador : MonoBehaviour {\n  public float velocidad = 5f;\n\n  void Update() {\n    float x = Input.GetAxis("Horizontal");\n    float z = Input.GetAxis("Vertical");\n\n    transform.Translate(new Vector3(x, 0, z) * velocidad * Time.deltaTime);\n  }\n}',
      points: [
        "MonoBehaviour es la clase base de los scripts de Unity.",
        "Update se ejecuta en cada fotograma.",
        "Input.GetAxis lee el teclado o el mando.",
        "Time.deltaTime hace que el movimiento sea fluido."
      ],
      note: [
        "El nombre del archivo importa",
        "En Unity, el archivo debe llamarse igual que la clase que contiene el script."
      ],
      challenge:
        "Imagina un script que haga saltar al jugador al pulsar la barra espaciadora y describe sus pasos."
    },
    {
      title: "Proyecto: gestor de tareas",
      summary: "Combina clases, listas y LINQ.",
      intro:
        "Un gestor de tareas guarda tareas, permite completarlas y muestra las pendientes. Es un proyecto completo para practicar C#.",
      code:
        'using System;\nusing System.Linq;\nusing System.Collections.Generic;\n\nclass Tarea {\n  public string Titulo { get; set; }\n  public bool Hecha { get; set; }\n\n  public Tarea(string titulo) {\n    Titulo = titulo;\n  }\n}\n\nclass Program {\n  static void Main() {\n    var tareas = new List<Tarea> {\n      new Tarea("Aprender C#"),\n      new Tarea("Practicar LINQ")\n    };\n\n    tareas[0].Hecha = true;\n    var pendientes = tareas.Where(t => !t.Hecha);\n\n    foreach (var t in pendientes) {\n      Console.WriteLine(t.Titulo);\n    }\n  }\n}',
      points: [
        "La clase Tarea guarda título y estado.",
        "List<Tarea> almacena todas las tareas.",
        "Where filtra las pendientes.",
        "La lambda t => !t.Hecha devuelve true cuando no está hecha."
      ],
      note: [
        "Empieza por consola",
        "Un proyecto de consola te permite centrarte en la lógica. Después puedes añadir una interfaz gráfica."
      ],
      challenge:
        "Añade una opción para marcar una tarea como hecha y otra para eliminarla."
    }
  ];

  EXTRA.sql = [
    {
      title: "Filtrar con WHERE",
      summary: "Selecciona solo las filas que cumplen una condición.",
      intro:
        "WHERE va después de FROM y decide qué filas aparecen. Sin WHERE, la consulta devuelve todas las filas de la tabla.",
      code:
        "SELECT nombre, nota\nFROM estudiantes\nWHERE nota >= 7;\n\nSELECT nombre\nFROM estudiantes\nWHERE curso = '1º' AND activo = 1;",
      points: [
        "Los textos van entre comillas simples.",
        "= compara igualdad; >=, < y <> comparan cantidades.",
        "AND exige que se cumplan las dos condiciones.",
        "OR exige que se cumpla al menos una."
      ],
      note: [
        "NULL no es cero",
        "Para buscar valores vacíos se usa IS NULL o IS NOT NULL, no = NULL."
      ],
      challenge:
        "Escribe una consulta que muestre los estudiantes con nota mayor o igual a 8 del curso 2º."
    },
    {
      title: "Ordenar y limitar",
      summary: "Controla el orden y cuántas filas ves.",
      intro:
        "ORDER BY ordena los resultados y LIMIT recorta cuántas filas se devuelven. Juntos son útiles para rankings.",
      code:
        "SELECT nombre, nota\nFROM estudiantes\nORDER BY nota DESC\nLIMIT 5;",
      points: [
        "ASC ordena de menor a mayor; DESC, de mayor a menor.",
        "Puedes ordenar por varias columnas separadas por comas.",
        "LIMIT 5 devuelve como máximo cinco filas.",
        "El orden sin ORDER BY no está garantizado."
      ],
      note: [
        "Orden estable",
        "Si dos personas tienen la misma nota, añade otra columna al ORDER BY para decidir el desempate."
      ],
      challenge:
        "Muestra los tres estudiantes con la nota más baja, del más bajo al más alto."
    },
    {
      title: "Funciones de agregación",
      summary: "Calcula totales, medias y extremos.",
      intro:
        "COUNT cuenta filas, SUM suma valores, AVG calcula la media, MIN y MAX devuelven los extremos. Todas trabajan sobre un conjunto de filas.",
      code:
        "SELECT COUNT(*) AS total,\n       AVG(nota) AS media,\n       MAX(nota) AS maxima,\n       MIN(nota) AS minima\nFROM estudiantes;",
      points: [
        "COUNT(*) cuenta todas las filas.",
        "AVG ignora los valores NULL.",
        "AS da un nombre claro a la columna del resultado.",
        "Las funciones de agregación devuelven una sola fila si no agrupas."
      ],
      note: [
        "COUNT de una columna",
        "COUNT(nota) cuenta solo las filas donde nota no es NULL. COUNT(*) cuenta todas."
      ],
      challenge:
        "Calcula cuántos estudiantes hay y cuál es la nota media del curso 1º."
    },
    {
      title: "Agrupar con GROUP BY",
      summary: "Calcula totales por categoría.",
      intro:
        "GROUP BY agrupa las filas que comparten un valor y permite calcular agregados por grupo, como la media de cada curso.",
      code:
        "SELECT curso, COUNT(*) AS alumnos, AVG(nota) AS media\nFROM estudiantes\nGROUP BY curso\nORDER BY curso;",
      points: [
        "Cada grupo produce una fila en el resultado.",
        "Las columnas del SELECT deben estar en GROUP BY o dentro de una función de agregación.",
        "HAVING filtra grupos después de agrupar.",
        "WHERE filtra filas antes de agrupar."
      ],
      note: [
        "WHERE o HAVING",
        "Usa WHERE para condiciones sobre filas individuales y HAVING para condiciones sobre el resultado de una agrupación."
      ],
      challenge:
        "Muestra cuántos estudiantes hay en cada curso y quédate solo con los cursos que tengan más de dos."
    },
    {
      title: "JOIN",
      summary: "Combina datos de varias tablas.",
      intro:
        "JOIN une filas de dos tablas usando una columna en común. Es la base de las bases de datos relacionales.",
      code:
        "SELECT estudiantes.nombre, cursos.nombre AS curso\nFROM estudiantes\nJOIN cursos ON estudiantes.curso_id = cursos.id\nWHERE estudiantes.activo = 1;",
      points: [
        "ON indica qué columnas deben coincidir.",
        "Puedes usar el nombre de la tabla para evitar ambigüedades.",
        "INNER JOIN devuelve solo las filas que coinciden.",
        "LEFT JOIN conserva todas las filas de la tabla izquierda."
      ],
      note: [
        "Relaciones claras",
        "Cada tabla debe tener una clave que la identifique. Así los JOIN son predecibles y rápidos."
      ],
      challenge:
        "Une una tabla de libros con una tabla de autores y muestra el título y el nombre del autor."
    },
    {
      title: "Subconsultas",
      summary: "Usa el resultado de una consulta dentro de otra.",
      intro:
        "Una subconsulta es una consulta dentro de otra. Sirve para comparar con un valor calculado o para filtrar con una lista.",
      code:
        "SELECT nombre, nota\nFROM estudiantes\nWHERE nota > (SELECT AVG(nota) FROM estudiantes);\n\nSELECT nombre\nFROM estudiantes\nWHERE curso_id IN (\n  SELECT id FROM cursos WHERE nivel = 'avanzado'\n);",
      points: [
        "La subconsulta va entre paréntesis.",
        "Puede devolver un solo valor o una lista.",
        "IN comprueba si un valor está en una lista.",
        "Las subconsultas pueden ser difíciles de leer: dales nombres claros."
      ],
      note: [
        "A veces un JOIN es más claro",
        "Si la subconsulta solo sirve para relacionar tablas, prueba a reescribirla con JOIN y compara cuál se entiende mejor."
      ],
      challenge:
        "Muestra los estudiantes cuya nota sea mayor que la media de su propio curso."
    },
    {
      title: "Índices y rendimiento",
      summary: "Haz que las consultas vayan más rápido.",
      intro:
        "Un índice es como el índice de un libro: permite encontrar filas sin recorrer toda la tabla. Acelera las búsquedas, pero ocupa espacio y hace más lentas las escrituras.",
      code:
        "CREATE INDEX idx_estudiantes_curso\nON estudiantes (curso_id);\n\nEXPLAIN SELECT *\nFROM estudiantes\nWHERE curso_id = 3;",
      points: [
        "Crea índices en columnas que uses mucho en WHERE y JOIN.",
        "No indexes todas las columnas sin pensar.",
        "EXPLAIN muestra el plan que usará la base de datos.",
        "Los índices se actualizan al insertar o modificar datos."
      ],
      note: [
        "Mide antes de optimizar",
        "No añadas índices por intuición. Comprueba con EXPLAIN qué consulta es lenta y por qué."
      ],
      challenge:
        "Explica por qué un índice en la columna nombre ayudaría a buscar estudiantes por nombre."
    },
    {
      title: "Proyecto: base de datos escolar",
      summary: "Diseña tablas y consultas para un centro.",
      intro:
        "Un centro necesita guardar estudiantes, cursos y matrículas. Un buen diseño evita repetir datos y facilita las consultas.",
      code:
        "CREATE TABLE cursos (\n  id INTEGER PRIMARY KEY,\n  nombre TEXT NOT NULL\n);\n\nCREATE TABLE estudiantes (\n  id INTEGER PRIMARY KEY,\n  nombre TEXT NOT NULL,\n  curso_id INTEGER,\n  FOREIGN KEY (curso_id) REFERENCES cursos(id)\n);\n\nSELECT cursos.nombre, COUNT(estudiantes.id) AS alumnos\nFROM cursos\nLEFT JOIN estudiantes ON estudiantes.curso_id = cursos.id\nGROUP BY cursos.nombre;",
      points: [
        "PRIMARY KEY identifica cada fila.",
        "FOREIGN KEY relaciona dos tablas.",
        "NOT NULL obliga a que el dato exista.",
        "LEFT JOIN muestra también los cursos sin alumnos."
      ],
      note: [
        "Piensa en las preguntas",
        "Antes de crear tablas, escribe qué preguntas quieres responder. El diseño debe facilitar esas consultas sin repetir información."
      ],
      challenge:
        "Añade una tabla de asignaturas y una consulta que muestre cuántas asignaturas tiene cada curso."
    }
  ];

  EXTRA.typescript = [
    {
      title: "Tipos básicos",
      summary: "Declara qué tipo de dato espera cada variable.",
      intro:
        "TypeScript añade tipos a JavaScript. El compilador revisa el código antes de ejecutarlo y avisa de errores que antes aparecían en el navegador.",
      code:
        'let edad: number = 12;\nlet nombre: string = "Ada";\nlet activo: boolean = true;\nlet etiquetas: string[] = ["web", "code"];\n\nfunction saludar(nombre: string): string {\n  return "Hola, " + nombre;\n}\n\nconsole.log(saludar(nombre));',
      points: [
        "number, string y boolean son tipos básicos.",
        "string[] es un array de textos.",
        "Los parámetros y el retorno pueden llevar tipo.",
        "Si intentas asignar un tipo incorrecto, el compilador avisa."
      ],
      note: [
        "TypeScript no cambia el navegador",
        "El código se compila a JavaScript normal antes de ejecutarse. Los tipos desaparecen en el resultado final."
      ],
      challenge:
        "Declara variables tipadas para tu nombre, edad y una lista de aficiones."
    },
    {
      title: "Interfaces",
      summary: "Describe la forma que debe tener un objeto.",
      intro:
        "Una interfaz define qué propiedades y métodos tiene un objeto. Sirve para que el compilador compruebe que los datos son completos.",
      code:
        'interface Jugador {\n  nombre: string;\n  puntos: number;\n  nivel?: number;\n}\n\nconst ada: Jugador = {\n  nombre: "Ada",\n  puntos: 10\n};\n\nfunction mostrar(jugador: Jugador): string {\n  return jugador.nombre + ": " + jugador.puntos;\n}',
      points: [
        "interface describe la forma de un objeto.",
        "El signo ? marca una propiedad opcional.",
        "Los objetos deben cumplir la interfaz.",
        "Puedes usar una interfaz como tipo de parámetro."
      ],
      note: [
        "type o interface",
        "Ambos sirven para describir formas. interface es cómoda para objetos que se amplían; type es más flexible para uniones y alias."
      ],
      challenge:
        "Crea una interfaz Libro con título, autor y año, y un objeto que la cumpla."
    },
    {
      title: "Funciones tipadas",
      summary: "Deja claro qué entra y qué sale de cada función.",
      intro:
        "Los tipos en funciones documentan la entrada y la salida. También ayudan a detectar llamadas con argumentos incorrectos.",
      code:
        'function sumar(a: number, b: number): number {\n  return a + b;\n}\n\nfunction saludar(nombre: string = "amigo"): string {\n  return "Hola, " + nombre;\n}\n\nconst multiplicar = (a: number, b: number): number => a * b;\n\nconsole.log(sumar(2, 3));\nconsole.log(saludar());',
      points: [
        "Los parámetros se tipan después del nombre.",
        "El tipo después de los paréntesis indica el retorno.",
        "Los parámetros pueden tener valores por defecto.",
        "Las funciones flecha también aceptan tipos."
      ],
      note: [
        "No abuses de any",
        "any desactiva la comprobación de tipos. Si lo usas en todas partes, pierdes la ventaja de TypeScript."
      ],
      challenge:
        "Escribe una función tipada que reciba un array de números y devuelva su media."
    },
    {
      title: "Uniones y literales",
      summary: "Permite varios tipos posibles para un valor.",
      intro:
        "Una unión indica que un valor puede ser de varios tipos. Los tipos literales permiten limitar los valores a una lista concreta.",
      code:
        'type Estado = "pendiente" | "hecha" | "cancelada";\n\nfunction mostrarEstado(estado: Estado): string {\n  if (estado === "hecha") {\n    return "Tarea completada";\n  }\n  return "Estado: " + estado;\n}\n\nlet id: string | number = 42;\nid = "abc";',
      points: [
        "El operador | crea una unión de tipos.",
        "Un tipo literal acepta solo ese valor exacto.",
        "Las uniones obligan a comprobar el tipo antes de usar métodos específicos.",
        "Los tipos alias se declaran con type."
      ],
      note: [
        "Estrecha el tipo",
        "Dentro de un if, TypeScript entiende qué tipo tienes en cada rama. Eso se llama estrechamiento de tipos."
      ],
      challenge:
        "Crea un tipo Estado con tres valores y una función que devuelva un mensaje distinto para cada uno."
    },
    {
      title: "Genéricos",
      summary: "Escribe código que funciona con varios tipos.",
      intro:
        "Los genéricos permiten que una función o clase trabaje con distintos tipos sin perder la comprobación. Se escriben entre < >.",
      code:
        'function primero<T>(lista: T[]): T | undefined {\n  return lista[0];\n}\n\nconst numeros = [10, 20, 30];\nconst nombres = ["Ada", "Linus"];\n\nconsole.log(primero(numeros));\nconsole.log(primero(nombres));',
      points: [
        "T es un nombre de tipo que se decide al llamar.",
        "T[] significa un array de elementos T.",
        "T | undefined indica que puede no haber resultado.",
        "Los genéricos evitan repetir la misma función para cada tipo."
      ],
      note: [
        "No forces el tipo",
        "Si tienes que escribir muchos as, puede que el diseño de tipos no esté bien pensado. Revisa las interfaces."
      ],
      challenge:
        "Crea una función genérica que reciba un array y devuelva el último elemento."
    },
    {
      title: "Clases",
      summary: "Usa clases con tipos y modificadores de acceso.",
      intro:
        "TypeScript añade a las clases de JavaScript tipos, propiedades y modificadores como public, private y readonly.",
      code:
        'class Mascota {\n  readonly nombre: string;\n  private energia: number;\n\n  constructor(nombre: string) {\n    this.nombre = nombre;\n    this.energia = 100;\n  }\n\n  jugar(): void {\n    this.energia -= 10;\n  }\n\n  get nivelEnergia(): number {\n    return this.energia;\n  }\n}\n\nconst luna = new Mascota("Luna");\nluna.jugar();\nconsole.log(luna.nivelEnergia);',
      points: [
        "private solo permite usar la propiedad dentro de la clase.",
        "readonly impide cambiar el valor después del constructor.",
        "get crea una propiedad calculada de solo lectura.",
        "Los tipos se aplican también a los métodos."
      ],
      note: [
        "private es de compilación",
        "En tiempo de ejecución, private no oculta nada de verdad. Sirve para que el compilador te avise de accesos indebidos."
      ],
      challenge:
        "Crea una clase Cuenta con saldo privado y métodos públicos para ingresar y retirar."
    },
    {
      title: "Tipos de utilidad",
      summary: "Transforma tipos existentes sin repetirlos.",
      intro:
        "TypeScript incluye tipos de utilidad como Partial, Pick y Omit. Permiten crear variaciones de una interfaz sin copiar y pegar.",
      code:
        'interface Usuario {\n  id: number;\n  nombre: string;\n  correo: string;\n}\n\ntype UsuarioParcial = Partial<Usuario>;\ntype UsuarioPublico = Omit<Usuario, "correo">;\n\nconst cambios: UsuarioParcial = { nombre: "Ada" };\nconst publico: UsuarioPublico = { id: 1, nombre: "Ada" };\n\nconsole.log(cambios, publico);',
      points: [
        "Partial hace opcionales todas las propiedades.",
        "Pick elige solo algunas propiedades.",
        "Omit quita propiedades.",
        "Readonly hace que no se puedan modificar."
      ],
      note: [
        "Menos duplicación",
        "Si dos tipos comparten la mayoría de campos, deriva uno del otro con utilidades. Así los cambios se hacen en un solo sitio."
      ],
      challenge:
        "Crea una interfaz Tarea y un tipo TareaActualizada con todas las propiedades opcionales."
    },
    {
      title: "Configurar TypeScript",
      summary: "Ajusta el compilador a tu proyecto.",
      intro:
        "tsconfig.json controla cómo se compila TypeScript: qué archivos incluye, qué versión de JavaScript genera y cuánto exige al comprobar tipos.",
      code:
        '{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "ESNext",\n    "strict": true,\n    "outDir": "dist",\n    "sourceMap": true\n  },\n  "include": ["src/**/*.ts"]\n}',
      points: [
        "target decide la versión de JavaScript de salida.",
        "strict activa comprobaciones estrictas muy recomendables.",
        "outDir indica dónde se guardan los archivos compilados.",
        "include limita los archivos que se compilan."
      ],
      note: [
        "Activa strict desde el principio",
        "Es más fácil empezar con reglas estrictas que activarlas después en un proyecto grande lleno de errores."
      ],
      challenge:
        "Escribe un tsconfig.json para un proyecto con el código en src y la salida en dist."
    },
    {
      title: "Proyecto: lista de tareas tipada",
      summary: "Aplica tipos, interfaces y funciones a un proyecto real.",
      intro:
        "Una lista de tareas es un buen proyecto para practicar interfaces, uniones y funciones puras. La lógica queda separada de la interfaz.",
      code:
        'interface Tarea {\n  id: number;\n  titulo: string;\n  hecha: boolean;\n}\n\nfunction crearTarea(id: number, titulo: string): Tarea {\n  return { id: id, titulo: titulo, hecha: false };\n}\n\nfunction completar(tarea: Tarea): Tarea {\n  return { ...tarea, hecha: true };\n}\n\nconst tarea = crearTarea(1, "Aprender TypeScript");\nconsole.log(completar(tarea));',
      points: [
        "La interfaz Tarea describe la forma de los datos.",
        "crearTarea devuelve un objeto nuevo y válido.",
        "El operador ... copia las propiedades de un objeto.",
        "completar no modifica la tarea original."
      ],
      note: [
        "Funciones puras",
        "Una función pura devuelve un resultado y no cambia datos externos. Son más fáciles de probar y de razonar."
      ],
      challenge:
        "Añade una función que reciba una lista de tareas y devuelva solo las pendientes."
    }
  ];

  EXTRA.ruby = [
    {
      title: "Tipos y variables",
      summary: "Conoce números, textos y símbolos en Ruby.",
      intro:
        "Ruby es dinámico y muy legible. Las variables locales se escriben en minúscula y no necesitan declarar el tipo.",
      code:
        'nombre = "Ada"\nedad = 12\nactivo = true\nsimbolo = :ruby\n\nputs nombre\nputs "Tiene #{edad} años"\nputs simbolo',
      points: [
        "Los textos pueden usar comillas dobles o simples.",
        "La interpolación #{...} mete valores dentro de un texto.",
        "true y false son booleanos.",
        "Los símbolos son valores ligeros que se usan como nombres."
      ],
      note: [
        "Comillas simples y dobles",
        "La interpolación solo funciona con comillas dobles. Con comillas simples el texto se toma literal."
      ],
      challenge:
        "Crea variables para tu nombre y tu edad y muestra una frase con interpolación."
    },
    {
      title: "Condiciones y bucles",
      summary: "Controla el flujo con una sintaxis muy natural.",
      intro:
        "Ruby usa if, elsif y else. También tiene unless, que ejecuta el bloque cuando la condición es falsa.",
      code:
        'puntos = 8\n\nif puntos >= 10\n  puts "¡Nivel superado!"\nelsif puntos >= 5\n  puts "Vas por buen camino"\nelse\n  puts "Sigue practicando"\nend\n\n3.times do |i|\n  puts "Vuelta #{i + 1}"\nend',
      points: [
        "elsif se escribe junto, no else if.",
        "unless equivale a if not.",
        "times repite un bloque un número de veces.",
        "Los bloques pueden usar do ... end o llaves."
      ],
      note: [
        "Todo es verdad menos false y nil",
        "En Ruby, 0 y las cadenas vacías se consideran verdaderos. No es como en otros lenguajes."
      ],
      challenge:
        "Muestra los números del 1 al 5 y marca con un mensaje los que sean pares."
    },
    {
      title: "Métodos",
      summary: "Agrupa código con métodos claros.",
      intro:
        "Los métodos se declaran con def y terminan con end. El último valor evaluado se devuelve automáticamente.",
      code:
        'def saludar(nombre)\n  "Hola, #{nombre}"\nend\n\ndef sumar(a, b)\n  a + b\nend\n\nputs saludar("Ada")\nputs sumar(2, 3)',
      points: [
        "def inicia un método y end lo cierra.",
        "No hace falta return para devolver el último valor.",
        "Los parámetros se separan con comas.",
        "Los métodos pueden terminar en ? o ! por convención."
      ],
      note: [
        "Convenciones",
        "Un método con ? devuelve verdadero o falso. Uno con ! suele modificar el objeto original. Son avisos para quien lee."
      ],
      challenge:
        "Escribe un método que reciba tres notas y devuelva la media."
    },
    {
      title: "Arrays y hashes",
      summary: "Guarda listas y pares clave-valor.",
      intro:
        "Los arrays guardan elementos ordenados. Los hashes asocian claves con valores. Ruby tiene métodos muy expresivos para trabajar con ambos.",
      code:
        'frutas = ["manzana", "pera", "plátano"]\nfrutas << "kiwi"\n\nputs frutas.length\nputs frutas.first\n\nedades = { "Ada" => 12, "Linus" => 54 }\nedades["Grace"] = 85\n\nedades.each do |nombre, edad|\n  puts "#{nombre}: #{edad}"\nend',
      points: [
        "<< añade un elemento al final de un array.",
        "first y last devuelven los extremos.",
        "Los hashes usan => o la sintaxis clave: valor.",
        "each recorre elementos o pares."
      ],
      note: [
        "Símbolos como claves",
        "En Ruby moderno es habitual escribir { nombre: \"Ada\" }, que crea un hash con la clave :nombre."
      ],
      challenge:
        "Crea un hash con tres países y sus capitales y recórrelo para mostrarlos."
    },
    {
      title: "Bloques",
      summary: "Pasa comportamiento a los métodos.",
      intro:
        "Un bloque es un trozo de código que se pasa a un método. Es una de las ideas más potentes de Ruby y aparece en each, map y select.",
      code:
        'numeros = [1, 2, 3, 4, 5]\n\npares = numeros.select do |n|\n  n % 2 == 0\nend\n\ndobles = numeros.map { |n| n * 2 }\n\ntotal = numeros.reduce(0) { |suma, n| suma + n }\n\nputs pares.inspect\nputs dobles.inspect\nputs total',
      points: [
        "El bloque se escribe entre do ... end o llaves.",
        "|n| recibe el elemento actual.",
        "select filtra y map transforma.",
        "reduce acumula un resultado."
      ],
      note: [
        "Llaves o do-end",
        "Las llaves se usan para bloques cortos y do ... end para bloques de varias líneas. Es una convención, no una obligación."
      ],
      challenge:
        "Usa select para quedarte con los nombres de más de cuatro letras y map para ponerlos en mayúsculas."
    },
    {
      title: "Clases",
      summary: "Crea objetos con estado y métodos.",
      intro:
        "Una clase de Ruby empieza con class. El método initialize es el constructor y las variables @ guardan estado del objeto.",
      code:
        'class Mascota\n  attr_reader :nombre, :energia\n\n  def initialize(nombre)\n    @nombre = nombre\n    @energia = 100\n  end\n\n  def jugar\n    @energia -= 10\n  end\nend\n\nluna = Mascota.new("Luna")\nluna.jugar\nputs "#{luna.nombre}: #{luna.energia}"',
      points: [
        "initialize se ejecuta al crear el objeto.",
        "Las variables @pertenecen al objeto.",
        "attr_reader crea métodos para leer atributos.",
        "new crea una instancia de la clase."
      ],
      note: [
        "attr_reader, attr_writer y attr_accessor",
        "attr_reader solo lee; attr_writer solo escribe; attr_accessor hace las dos cosas. Elige el más restrictivo que necesites."
      ],
      challenge:
        "Crea una clase Libro con título y autor, y un método que devuelva una ficha con ambos datos."
    },
    {
      title: "Módulos",
      summary: "Comparte código sin usar herencia.",
      intro:
        "Un módulo agrupa métodos y constantes. Con include puedes mezclar sus métodos en una clase, lo que se llama mixin.",
      code:
        'module Saludable\n  def saludar\n    "Hola, soy #{nombre}"\n  end\nend\n\nclass Persona\n  include Saludable\n  attr_reader :nombre\n\n  def initialize(nombre)\n    @nombre = nombre\n  end\nend\n\nputs Persona.new("Ada").saludar',
      points: [
        "module define un módulo.",
        "include añade sus métodos a la clase.",
        "Los módulos no se pueden instanciar.",
        "También sirven para organizar el código en espacios de nombres."
      ],
      note: [
        "Composición antes que herencia",
        "Si una clase necesita varias capacidades, los módulos suelen ser más flexibles que una cadena larga de herencia."
      ],
      challenge:
        "Crea un módulo Volador con un método volar e inclúyelo en una clase Pájaro."
    },
    {
      title: "Errores y archivos",
      summary: "Maneja fallos y guarda datos.",
      intro:
        "Ruby usa begin, rescue y ensure para manejar errores. Para archivos, File.open con bloque cierra el archivo automáticamente.",
      code:
        'begin\n  numero = Integer("hola")\nrescue ArgumentError\n  puts "Eso no es un número"\nensure\n  puts "Fin"\nend\n\nFile.open("notas.txt", "w") do |archivo|\n  archivo.puts "Hola"\nend\n\nputs File.read("notas.txt")',
      points: [
        "rescue captura una excepción.",
        "ensure se ejecuta siempre.",
        "File.open con bloque cierra el archivo solo.",
        "File.read lee todo el contenido de una vez."
      ],
      note: [
        "Rescata lo concreto",
        "Evita rescue sin tipo. Capturar cualquier error puede ocultar fallos que deberías ver."
      ],
      challenge:
        "Pide un número, captura el error si no es válido y guarda el resultado en un archivo."
    },
    {
      title: "Proyecto: agenda de contactos",
      summary: "Combina clases, hashes y archivos.",
      intro:
        "Una agenda de contactos puede guardar personas en un array, buscarlas por nombre y guardar la lista en un archivo.",
      code:
        'class Contacto\n  attr_reader :nombre, :telefono\n\n  def initialize(nombre, telefono)\n    @nombre = nombre\n    @telefono = telefono\n  end\n\n  def to_s\n    "#{nombre}: #{telefono}"\n  end\nend\n\nagenda = []\nagenda << Contacto.new("Ada", "123456789")\nagenda << Contacto.new("Linus", "987654321")\n\nagenda.each { |contacto| puts contacto }\nputs agenda.select { |c| c.nombre.start_with?("A") }.inspect',
      points: [
        "Cada contacto es un objeto con nombre y teléfono.",
        "to_s define cómo se muestra el objeto.",
        "select filtra contactos por una condición.",
        "start_with? comprueba el inicio de un texto."
      ],
      note: [
        "Archivos al final",
        "Primero haz que la agenda funcione en memoria. Después añade guardar y cargar desde un archivo."
      ],
      challenge:
        "Añade un método para buscar un contacto por nombre y otro para guardar la agenda en un archivo."
    }
  ];

  EXTRA.php = [
    {
      title: "Variables y tipos en PHP",
      summary: "Empieza a escribir scripts del lado del servidor.",
      intro:
        "PHP se ejecuta en el servidor y genera HTML para el navegador. Las variables empiezan con $ y no necesitan declarar el tipo.",
      code:
        '<?php\n$nombre = "Ada";\n$edad = 12;\n$activo = true;\n\n echo "Hola, $nombre";\n echo "<br>";\n echo "Tiene $edad años";\n echo "<br>";\n var_dump($activo);\n?>',
      points: [
        "El código PHP va entre <?php y ?>.",
        "Las variables empiezan con $.",
        "echo escribe texto en la respuesta.",
        "var_dump muestra el tipo y el valor de una variable."
      ],
      note: [
        "Punto y coma",
        "Cada instrucción de PHP termina con ;. Olvidarlo produce un error de sintaxis."
      ],
      challenge:
        "Crea variables para tu nombre y tu edad y muéstralas en una frase con echo."
    },
    {
      title: "Condiciones y bucles",
      summary: "Controla el flujo de tus scripts PHP.",
      intro:
        "PHP tiene if, else, for, while y foreach. La sintaxis es parecida a la de otros lenguajes de llaves.",
      code:
        '<?php\nfor ($i = 1; $i <= 5; $i++) {\n    if ($i % 2 == 0) {\n        echo "$i es par<br>";\n    } else {\n        echo "$i es impar<br>";\n    }\n}\n\n$frutas = ["manzana", "pera", "plátano"];\nforeach ($frutas as $fruta) {\n    echo $fruta . "<br>";\n}\n?>',
      points: [
        "Las variables de bucle llevan $.",
        "== compara valores; === compara valor y tipo.",
        "foreach recorre arrays de forma sencilla.",
        "Puedes mezclar HTML y PHP en el mismo archivo."
      ],
      note: [
        "=== es más seguro",
        "Usa === cuando quieras evitar conversiones automáticas que pueden dar resultados inesperados."
      ],
      challenge:
        "Muestra los números del 1 al 10 y marca cuáles son múltiplos de 3."
    },
    {
      title: "Funciones",
      summary: "Reutiliza código en tus scripts.",
      intro:
        "Una función de PHP se declara con function. Puede recibir parámetros, devolver un valor y tener tipos opcionales.",
      code:
        '<?php\nfunction saludar(string $nombre = "amigo"): string {\n    return "Hola, $nombre";\n}\n\nfunction sumar(int $a, int $b): int {\n    return $a + $b;\n}\n\necho saludar("Ada");\necho "<br>";\necho sumar(2, 3);\n?>',
      points: [
        "function declara una función.",
        "Los parámetros pueden tener tipo y valor por defecto.",
        "return devuelve un valor.",
        "El tipo después de los paréntesis indica el retorno."
      ],
      note: [
        "Funciones pequeñas",
        "Una función que hace una sola cosa se prueba y se reutiliza mejor. Si crece demasiado, divídela."
      ],
      challenge:
        "Escribe una función que reciba tres notas y devuelva la media."
    },
    {
      title: "Arrays",
      summary: "Guarda listas y diccionarios en PHP.",
      intro:
        "En PHP los arrays pueden ser listas o mapas con claves. Muchas funciones integradas permiten ordenarlos, filtrarlos y recorrerlos.",
      code:
        '<?php\n$frutas = ["manzana", "pera", "plátano"];\n$frutas[] = "kiwi";\n\n$edades = [\n    "Ada" => 12,\n    "Linus" => 54\n];\n\nsort($frutas);\nprint_r($frutas);\n\necho $edades["Ada"];\necho count($frutas);\n?>',
      points: [
        "array() o [] crean arrays.",
        "$frutas[] = valor añade al final.",
        "Las claves con => crean un mapa.",
        "count devuelve el número de elementos."
      ],
      note: [
        "print_r para depurar",
        "print_r muestra la estructura de un array de forma legible. Úsalo mientras programas, no en la versión final."
      ],
      challenge:
        "Crea un array con tres asignaturas y sus notas, y muestra la nota de una de ellas."
    },
    {
      title: "Formularios",
      summary: "Recibe datos del navegador.",
      intro:
        "PHP puede leer datos enviados por un formulario con $_GET o $_POST. Es el primer paso para crear páginas interactivas.",
      code:
        '<form method="post" action="saludar.php">\n  <label for="nombre">Nombre:</label>\n  <input id="nombre" name="nombre" type="text">\n  <button type="submit">Enviar</button>\n</form>\n\n<?php\nif ($_SERVER["REQUEST_METHOD"] === "POST") {\n    $nombre = $_POST["nombre"] ?? "";\n    echo "Hola, " . htmlspecialchars($nombre);\n}\n?>',
      points: [
        "method indica cómo se envían los datos.",
        "action apunta al script que los recibe.",
        "$_POST guarda los campos enviados por POST.",
        "htmlspecialchars evita que el texto se interprete como HTML."
      ],
      note: [
        "Nunca confíes en la entrada",
        "Todo lo que llega de un formulario puede ser incorrecto o malicioso. Valida y escapa siempre."
      ],
      challenge:
        "Crea un formulario que pida una edad y muestre si es mayor o menor de edad."
    },
    {
      title: "Sesiones y cookies",
      summary: "Recuerda datos entre distintas páginas.",
      intro:
        "Las cookies se guardan en el navegador. Las sesiones guardan datos en el servidor y usan una cookie solo para identificar al visitante.",
      code:
        '<?php\nsession_start();\n\nif (!isset($_SESSION["visitas"])) {\n    $_SESSION["visitas"] = 0;\n}\n\n$_SESSION["visitas"]++;\n\necho "Has visitado esta página " . $_SESSION["visitas"] . " veces";\n?>',
      points: [
        "session_start debe llamarse antes de enviar HTML.",
        "$_SESSION guarda datos del lado del servidor.",
        "setcookie crea una cookie en el navegador.",
        "Las cookies pueden caducar y el usuario puede borrarlas."
      ],
      note: [
        "No guardes secretos en cookies",
        "Las cookies viajan al navegador y pueden ser leídas o modificadas. Los datos sensibles van en la sesión del servidor."
      ],
      challenge:
        "Crea un contador de visitas con sesión y muestra un mensaje distinto la primera vez."
    },
    {
      title: "Bases de datos con PDO",
      summary: "Conecta PHP con una base de datos de forma segura.",
      intro:
        "PDO permite hablar con distintos motores de bases de datos. Las consultas preparadas evitan inyecciones SQL.",
      code:
        '<?php\n$pdo = new PDO("sqlite:escuela.db");\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n\n$consulta = $pdo->prepare(\n    "SELECT nombre FROM estudiantes WHERE curso = :curso"\n);\n$consulta->execute(["curso" => "1º"]);\n\nforeach ($consulta as $fila) {\n    echo $fila["nombre"] . "<br>";\n}\n?>',
      points: [
        "PDO se conecta a SQLite, MySQL y otros motores.",
        "prepare crea una consulta preparada.",
        "execute envía los valores por separado.",
        "ERRMODE_EXCEPTION hace que los errores se vean como excepciones."
      ],
      note: [
        "Nunca concatenes datos del usuario",
        "Las consultas preparadas son la forma correcta de incluir valores. Concatenar abre la puerta a inyección SQL."
      ],
      challenge:
        "Escribe una consulta preparada que busque un estudiante por su nombre."
    },
    {
      title: "Seguridad básica",
      summary: "Protege tu web y a sus usuarios.",
      intro:
        "La seguridad no es un extra. Valida la entrada, escapa la salida, usa contraseñas hasheadas y mantén las dependencias actualizadas.",
      code:
        '<?php\n$nombre = trim($_POST["nombre"] ?? "");\n\nif ($nombre === "") {\n    echo "El nombre es obligatorio";\n} else {\n    echo "Hola, " . htmlspecialchars($nombre, ENT_QUOTES, "UTF-8");\n}\n\n$hash = password_hash("mi-clave", PASSWORD_DEFAULT);\n$correcta = password_verify("mi-clave", $hash);\n?>',
      points: [
        "trim elimina espacios sobrantes.",
        "htmlspecialchars escapa el texto antes de mostrarlo.",
        "password_hash guarda contraseñas de forma segura.",
        "password_verify comprueba una contraseña sin guardarla."
      ],
      note: [
        "Nunca guardes contraseñas en texto plano",
        "Usa password_hash y password_verify. Nunca compares contraseñas directamente en la base de datos."
      ],
      challenge:
        "Escribe un script que valide un correo y muestre un error si está vacío."
    },
    {
      title: "Proyecto: blog sencillo",
      summary: "Crea un blog con PHP y una base de datos.",
      intro:
        "Un blog necesita entradas, una página para listarlas y otra para ver una entrada concreta. Es un proyecto completo para practicar PHP.",
      code:
        '<?php\n$pdo = new PDO("sqlite:blog.db");\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n\n$pdo->exec(\n    "CREATE TABLE IF NOT EXISTS entradas (\n       id INTEGER PRIMARY KEY,\n       titulo TEXT NOT NULL,\n       contenido TEXT NOT NULL\n     )"\n);\n\n$entradas = $pdo->query("SELECT * FROM entradas ORDER BY id DESC");\n\nforeach ($entradas as $entrada) {\n    echo "<h2>" . htmlspecialchars($entrada["titulo"]) . "</h2>";\n    echo "<p>" . htmlspecialchars($entrada["contenido"]) . "</p>";\n}\n?>',
      points: [
        "CREATE TABLE IF NOT EXISTS evita errores al repetir.",
        "query devuelve todas las filas de una consulta.",
        "ORDER BY id DESC muestra primero lo más reciente.",
        "Escapa siempre el contenido antes de mostrarlo."
      ],
      note: [
        "Separa código y presentación",
        "Al principio puede estar todo en un archivo, pero separar la lógica del HTML te ayudará cuando el proyecto crezca."
      ],
      challenge:
        "Añade un formulario para crear una entrada nueva con una consulta preparada."
    }
  ];

  EXTRA.go = [
    {
      title: "Variables y tipos en Go",
      summary: "Declara valores con tipos simples y claros.",
      intro:
        "Go es un lenguaje compilado, rápido y sencillo. Las variables pueden declararse con var o con := dentro de una función.",
      code:
        'package main\n\nimport "fmt"\n\nfunc main() {\n  var nombre string = "Ada"\n  edad := 12\n  activo := true\n\n  fmt.Println(nombre, edad, activo)\n}',
      points: [
        "var declara una variable con su tipo.",
        ":= declara y asigna a la vez dentro de una función.",
        "string, int, float64 y bool son tipos básicos.",
        "Go no permite variables sin usar."
      ],
      note: [
        "El compilador es estricto",
        "Si declaras una variable y no la usas, el programa no compila. Es una molestia al principio y una ayuda después."
      ],
      challenge:
        "Declara variables para tu nombre, edad y altura y muéstralas con fmt.Println."
    },
    {
      title: "Condiciones y bucles",
      summary: "Usa if, for y switch en Go.",
      intro:
        "Go tiene if, for y switch. No tiene while: for puede actuar como while si solo lleva una condición.",
      code:
        'package main\n\nimport "fmt"\n\nfunc main() {\n  for i := 1; i <= 5; i++ {\n    if i%2 == 0 {\n      fmt.Println(i, "es par")\n    } else {\n      fmt.Println(i, "es impar")\n    }\n  }\n\n  vidas := 3\n  for vidas > 0 {\n    fmt.Println("Vidas:", vidas)\n    vidas--\n  }\n}',
      points: [
        "if no necesita paréntesis.",
        "for tiene inicio, condición y avance.",
        "for condición funciona como while.",
        "break sale del bucle y continue salta a la siguiente vuelta."
      ],
      note: [
        "Una sola forma de bucle",
        "Go simplifica el lenguaje usando solo for. Con distintas formas cubre todos los casos habituales."
      ],
      challenge:
        "Muestra los números del 10 al 1 usando un bucle for."
    },
    {
      title: "Funciones",
      summary: "Crea funciones que devuelven uno o varios valores.",
      intro:
        "Las funciones de Go se declaran con func. Pueden devolver varios valores, algo muy útil para devolver un resultado y un error.",
      code:
        'package main\n\nimport "fmt"\n\nfunc sumar(a int, b int) int {\n  return a + b\n}\n\nfunc dividir(a, b float64) (float64, error) {\n  if b == 0 {\n    return 0, fmt.Errorf("división entre cero")\n  }\n  return a / b, nil\n}\n\nfunc main() {\n  fmt.Println(sumar(2, 3))\n  resultado, err := dividir(10, 2)\n  fmt.Println(resultado, err)\n}',
      points: [
        "func declara una función.",
        "Los parámetros del mismo tipo se agrupan.",
        "Puedes devolver varios valores entre paréntesis.",
        "nil significa que no hay error."
      ],
      note: [
        "El error va al final",
        "Por convención, una función que puede fallar devuelve el resultado y, como último valor, un error."
      ],
      challenge:
        "Escribe una función que reciba tres notas y devuelva la media."
    },
    {
      title: "Arrays y slices",
      summary: "Trabaja con listas de tamaño fijo y dinámico.",
      intro:
        "Un array de Go tiene tamaño fijo. Un slice es una vista flexible sobre un array y es lo que usarás casi siempre.",
      code:
        'package main\n\nimport "fmt"\n\nfunc main() {\n  numeros := []int{1, 2, 3}\n  numeros = append(numeros, 4, 5)\n\n  for i, numero := range numeros {\n    fmt.Println(i, numero)\n  }\n\n  fmt.Println("Longitud:", len(numeros))\n}',
      points: [
        "[]int crea un slice de enteros.",
        "append añade elementos y devuelve el slice actualizado.",
        "range devuelve índice y valor.",
        "len devuelve la longitud."
      ],
      note: [
        "append puede reasignar",
        "Guarda siempre el resultado de append: numeros = append(numeros, 6). No lo llames y lo ignores."
      ],
      challenge:
        "Crea un slice con cinco nombres y muestra cada uno con su índice."
    },
    {
      title: "Maps",
      summary: "Guarda pares de clave y valor.",
      intro:
        "Un map asocia claves con valores. Es la estructura ideal para contar elementos o guardar datos por nombre.",
      code:
        'package main\n\nimport "fmt"\n\nfunc main() {\n  edades := map[string]int{\n    "Ada": 12,\n    "Linus": 54,\n  }\n\n  edades["Grace"] = 85\n\n  edad, existe := edades["Ada"]\n  fmt.Println(edad, existe)\n\n  delete(edades, "Linus")\n  fmt.Println(len(edades))\n}',
      points: [
        "map[clave]valor define el tipo del map.",
        "La segunda variable de una consulta indica si la clave existe.",
        "delete elimina una clave.",
        "len devuelve cuántas claves hay."
      ],
      note: [
        "Clave inexistente",
        "Leer una clave que no existe devuelve el valor cero del tipo. Usa la forma con dos variables para distinguirla de un cero real."
      ],
      challenge:
        "Crea un map con tres países y sus capitales y muestra una capital."
    },
    {
      title: "Structs y métodos",
      summary: "Agrupa datos y añade comportamiento.",
      intro:
        "Un struct agrupa campos con nombre. Puedes definir métodos para ese tipo y así trabajar con objetos de forma clara.",
      code:
        'package main\n\nimport "fmt"\n\ntype Mascota struct {\n  Nombre  string\n  Energia int\n}\n\nfunc (m *Mascota) Jugar() {\n  m.Energia -= 10\n}\n\nfunc main() {\n  luna := Mascota{Nombre: "Luna", Energia: 100}\n  luna.Jugar()\n  fmt.Println(luna.Nombre, luna.Energia)\n}',
      points: [
        "type define un struct con sus campos.",
        "Los nombres de campos exportados empiezan con mayúscula.",
        "Un método se declara con un receptor.",
        "El receptor con * permite modificar el struct original."
      ],
      note: [
        "Mayúsculas y visibilidad",
        "En Go, un nombre que empieza con mayúscula es visible fuera del paquete. Es una regla del lenguaje, no un estilo."
      ],
      challenge:
        "Crea un struct Libro con título y autor, y un método que muestre su información."
    },
    {
      title: "Errores",
      summary: "Maneja los fallos de forma explícita.",
      intro:
        "Go no usa excepciones como otros lenguajes. Las funciones devuelven un error y quien llama decide qué hacer con él.",
      code:
        'package main\n\nimport (\n  "errors"\n  "fmt"\n)\n\nfunc dividir(a, b float64) (float64, error) {\n  if b == 0 {\n    return 0, errors.New("no se puede dividir entre cero")\n  }\n  return a / b, nil\n}\n\nfunc main() {\n  resultado, err := dividir(10, 0)\n  if err != nil {\n    fmt.Println("Error:", err)\n    return\n  }\n  fmt.Println(resultado)\n}',
      points: [
        "error es un tipo que representa un fallo.",
        "errors.New crea un error sencillo.",
        "nil indica que no hubo error.",
        "Comprueba err justo después de la llamada."
      ],
      note: [
        "No ignores errores",
        "Usar _ para descartar un error puede estar bien en un ejemplo, pero en un programa real debes decidir qué hacer con el fallo."
      ],
      challenge:
        "Escribe una función que devuelva un error si la edad es negativa."
    },
    {
      title: "Paquetes y módulos",
      summary: "Organiza el código en varios archivos.",
      intro:
        "Go organiza el código en paquetes. Un módulo agrupa paquetes y declara sus dependencias en go.mod.",
      code:
        '// archivo main.go\npackage main\n\nimport (\n  "fmt"\n  "miproyecto/saludos"\n)\n\nfunc main() {\n  fmt.Println(saludos.Hola("Ada"))\n}\n\n// archivo saludos/saludos.go\npackage saludos\n\nfunc Hola(nombre string) string {\n  return "Hola, " + nombre\n}',
      points: [
        "package indica a qué paquete pertenece un archivo.",
        "main es el paquete ejecutable.",
        "Los nombres exportados empiezan con mayúscula.",
        "go.mod declara el nombre del módulo y las dependencias."
      ],
      note: [
        "Un paquete, una responsabilidad",
        "No metas todo en main. Separa en paquetes pequeños cuando el proyecto crezca."
      ],
      challenge:
        "Crea un paquete matematicas con una función Sumar y úsalo desde main."
    },
    {
      title: "Proyecto: lista de tareas",
      summary: "Combina structs, slices y funciones.",
      intro:
        "Una lista de tareas es un proyecto pequeño para practicar structs, slices y métodos. Puedes ampliarla después con archivos o una API.",
      code:
        'package main\n\nimport "fmt"\n\ntype Tarea struct {\n  Titulo string\n  Hecha  bool\n}\n\nfunc main() {\n  tareas := []Tarea{\n    {Titulo: "Aprender Go"},\n    {Titulo: "Practicar slices"},\n  }\n\n  tareas[0].Hecha = true\n\n  pendientes := 0\n  for _, tarea := range tareas {\n    if !tarea.Hecha {\n      pendientes++\n    }\n    fmt.Println(tarea.Titulo, tarea.Hecha)\n  }\n\n  fmt.Println("Pendientes:", pendientes)\n}',
      points: [
        "El struct Tarea guarda título y estado.",
        "El slice contiene todas las tareas.",
        "El for con range recorre los elementos.",
        "_ descarta el índice cuando no lo necesitas.",
        "El booleano se muestra como true o false."
      ],
      note: [
        "Piensa en las operaciones",
        "Añadir, completar, borrar y listar son las operaciones básicas. Diséñalas antes de escribir la interfaz."
      ],
      challenge:
        "Añade una función que reciba el slice de tareas y devuelva cuántas están pendientes."
    }
  ];

  EXTRA.kotlin = [
    {
      title: "Variables y tipos",
      summary: "Usa val y var con tipos seguros.",
      intro:
        "Kotlin distingue entre val, que no cambia, y var, que puede cambiar. El compilador deduce el tipo, pero también puedes escribirlo.",
      code:
        'fun main() {\n  val nombre: String = "Ada"\n  var edad = 12\n  edad = edad + 1\n\n  println("Hola, $nombre")\n  println("Edad: $edad")\n}',
      points: [
        "val crea una referencia que no se reasigna.",
        "var crea una variable que puede cambiar.",
        "El tipo puede deducirse del valor.",
        "String, Int, Double y Boolean son tipos básicos."
      ],
      note: [
        "Usa val por defecto",
        "Si no necesitas cambiar el valor, val evita errores. Cambia a var solo cuando sea necesario."
      ],
      challenge:
        "Crea una val con tu nombre y una var con tu edad. Cambia la edad y muestra ambas."
    },
    {
      title: "Condiciones y bucles",
      summary: "Controla el flujo con una sintaxis moderna.",
      intro:
        "Kotlin tiene if, when, for y while. when es una forma muy potente de comparar un valor con varios casos.",
      code:
        'fun main() {\n  val puntos = 8\n\n  when {\n    puntos >= 10 -> println("¡Nivel superado!")\n    puntos >= 5 -> println("Vas por buen camino")\n    else -> println("Sigue practicando")\n  }\n\n  for (i in 1..5) {\n    println("Vuelta $i")\n  }\n}',
      points: [
        "if también puede devolver un valor.",
        "when sustituye a switch y es más flexible.",
        "1..5 crea un rango inclusivo.",
        "for recorre rangos, listas y mapas."
      ],
      note: [
        "Rangos",
        "1..5 incluye el 5. Si quieres excluirlo, usa 1 until 5 o 1..4."
      ],
      challenge:
        "Muestra los números del 1 al 10 y escribe un mensaje distinto para los pares y los impares."
    },
    {
      title: "Funciones",
      summary: "Escribe funciones cortas y expresivas.",
      intro:
        "Las funciones de Kotlin se declaran con fun. Pueden tener parámetros con valor por defecto y devolver un valor directamente.",
      code:
        'fun saludar(nombre: String = "amigo"): String {\n  return "Hola, $nombre"\n}\n\nfun sumar(a: Int, b: Int): Int = a + b\n\nfun main() {\n  println(saludar())\n  println(saludar("Ada"))\n  println(sumar(2, 3))\n}',
      points: [
        "fun declara una función.",
        "Los parámetros llevan nombre y tipo.",
        "Puedes dar un valor por defecto.",
        "Las funciones de una línea pueden usar =."
      ],
      note: [
        "Parámetros con nombre",
        "Al llamar puedes escribir sumar(b = 3, a = 2). Mejora la claridad cuando hay muchos parámetros."
      ],
      challenge:
        "Escribe una función que reciba tres notas y devuelva la media."
    },
    {
      title: "Colecciones",
      summary: "Filtra y transforma listas con facilidad.",
      intro:
        "Kotlin distingue entre listas de solo lectura y listas mutables. Sus funciones de colección permiten escribir menos código.",
      code:
        'fun main() {\n  val numeros = listOf(1, 2, 3, 4, 5, 6)\n\n  val pares = numeros.filter { it % 2 == 0 }\n  val dobles = numeros.map { it * 2 }\n\n  println(pares)\n  println(dobles)\n  println(numeros.sum())\n}',
      points: [
        "listOf crea una lista de solo lectura.",
        "mutableListOf crea una lista que puede cambiar.",
        "filter filtra elementos.",
        "map transforma cada elemento; it es el elemento actual."
      ],
      note: [
        "Solo lectura por defecto",
        "Empieza con listOf y usa mutableListOf solo si de verdad necesitas modificar la lista. Así el código es más predecible."
      ],
      challenge:
        "Filtra una lista de nombres y quédate con los que tengan más de cuatro letras."
    },
    {
      title: "Clases",
      summary: "Crea objetos con constructores concisos.",
      intro:
        "Kotlin permite declarar el constructor en la cabecera de la clase. Las propiedades pueden ser val o var y los métodos se definen dentro.",
      code:
        'class Mascota(val nombre: String) {\n  var energia = 100\n    private set\n\n  fun jugar() {\n    energia -= 10\n  }\n}\n\nfun main() {\n  val luna = Mascota("Luna")\n  luna.jugar()\n  println("${luna.nombre}: ${luna.energia}")\n}',
      points: [
        "El constructor principal va después del nombre de la clase.",
        "val y var en el constructor crean propiedades.",
        "private set limita quién puede cambiar la energía.",
        "Los métodos se declaran con fun."
      ],
      note: [
        "Interpolación con llaves",
        "Usa ${...} cuando dentro de la cadena haya una expresión, no solo un nombre de variable."
      ],
      challenge:
        "Crea una clase Cuenta con saldo privado y métodos para ingresar y retirar."
    },
    {
      title: "Seguridad contra null",
      summary: "Evita los errores de valores vacíos.",
      intro:
        "Kotlin distingue entre tipos que pueden ser null y tipos que no. El compilador obliga a manejar el caso vacío.",
      code:
        'fun main() {\n  val nombre: String? = null\n\n  println(nombre?.length)\n  println(nombre ?: "sin nombre")\n\n  if (nombre != null) {\n    println(nombre.length)\n  }\n}',
      points: [
        "String? puede contener null.",
        "?. accede a una propiedad solo si no es null.",
        "?: devuelve un valor alternativo si es null.",
        "La comprobación con if estrecha el tipo."
      ],
      note: [
        "Evita !!",
        "El operador !! fuerza un valor y lanza una excepción si es null. Úsalo solo cuando estés completamente seguro."
      ],
      challenge:
        "Crea una variable String? y muestra su longitud solo si tiene valor, o un mensaje alternativo."
    },
    {
      title: "Lambdas",
      summary: "Pasa funciones como valores.",
      intro:
        "Una lambda es una función sin nombre. En Kotlin se usan mucho con colecciones y eventos.",
      code:
        'fun main() {\n  val saludar = { nombre: String -> "Hola, $nombre" }\n\n  val numeros = listOf(1, 2, 3, 4)\n  val pares = numeros.filter { numero -> numero % 2 == 0 }\n\n  println(saludar("Ada"))\n  println(pares)\n}',
      points: [
        "Las lambdas se escriben entre llaves.",
        "El parámetro va antes de ->.",
        "Si solo hay un parámetro, puedes usar it.",
        "Las lambdas se pueden guardar en variables."
      ],
      note: [
        "Legibilidad primero",
        "Una lambda muy larga es difícil de leer. Si crece, sácala a una función con nombre."
      ],
      challenge:
        "Crea una lambda que reciba un número y devuelva su cuadrado, y úsala con map."
    },
    {
      title: "Corrutinas",
      summary: "Haz tareas largas sin bloquear la app.",
      intro:
        "Las corrutinas permiten escribir código asíncrono de forma secuencial. Son clave para no congelar una app mientras espera una descarga.",
      code:
        'import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n  launch {\n    delay(1000)\n    println("Tarea en segundo plano")\n  }\n\n  println("Mientras tanto, la app sigue viva")\n}',
      points: [
        "runBlocking espera a que terminen las corrutinas.",
        "launch inicia una corrutina que no devuelve resultado.",
        "delay suspende sin bloquear el hilo.",
        "async devuelve un resultado que puedes esperar con await."
      ],
      note: [
        "No bloquees el hilo principal",
        "En Android, las operaciones largas deben ir fuera del hilo principal. Las corrutinas lo hacen más fácil."
      ],
      challenge:
        "Escribe dos corrutinas que impriman mensajes con un segundo de diferencia."
    },
    {
      title: "Proyecto: app de tareas",
      summary: "Modela una app Android con clases y listas.",
      intro:
        "Una app de tareas necesita un modelo de datos, una lista y una forma de marcar tareas. La lógica puede probarse antes de crear la interfaz.",
      code:
        'data class Tarea(\n  val id: Int,\n  val titulo: String,\n  var hecha: Boolean = false\n)\n\nfun main() {\n  val tareas = mutableListOf(\n    Tarea(1, "Aprender Kotlin"),\n    Tarea(2, "Practicar listas")\n  )\n\n  tareas[0].hecha = true\n\n  val pendientes = tareas.filter { !it.hecha }\n  println(pendientes.map { it.titulo })\n}',
      points: [
        "data class genera equals, toString y copy.",
        "mutableListOf crea una lista modificable.",
        "filter devuelve las tareas pendientes.",
        "map extrae solo los títulos."
      ],
      note: [
        "Modelo primero",
        "Si el modelo de datos está claro, la interfaz de Android será mucho más fácil de construir después."
      ],
      challenge:
        "Añade una función que cuente cuántas tareas quedan pendientes."
    }
  ];

  EXTRA.swift = [
    {
      title: "Variables y tipos",
      summary: "Usa let y var en Swift.",
      intro:
        "Swift distingue entre constantes (let) y variables (var). El compilador deduce el tipo, pero puedes escribirlo para mayor claridad.",
      code:
        'let nombre = "Ada"\nvar edad = 12\nedad += 1\n\nlet altura: Double = 1.55\nlet activo: Bool = true\n\nprint("Hola, \\(nombre)")\nprint("Edad: \\(edad)")\nprint(altura, activo)',
      points: [
        "let crea una constante.",
        "var crea una variable que puede cambiar.",
        "Double es un número decimal y Bool un booleano.",
        "La interpolación usa \\(...)."
      ],
      note: [
        "Usa let por defecto",
        "Si no necesitas cambiar el valor, let es más seguro. Cambia a var solo cuando haya que modificarlo."
      ],
      challenge:
        "Crea una constante con tu nombre y una variable con tu edad. Cambia la edad y muestra ambas."
    },
    {
      title: "Condiciones y bucles",
      summary: "Controla el flujo en Swift.",
      intro:
        "Swift tiene if, else, switch, for y while. switch debe cubrir todos los casos posibles, lo que evita olvidos.",
      code:
        'let puntos = 8\n\nif puntos >= 10 {\n  print("¡Nivel superado!")\n} else if puntos >= 5 {\n  print("Vas por buen camino")\n} else {\n  print("Sigue practicando")\n}\n\nfor i in 1...5 {\n  print("Vuelta \\(i)")\n}',
      points: [
        "if puede tener else if y else.",
        "1...5 es un rango cerrado que incluye el 5.",
        "1..<5 excluye el 5.",
        "switch no necesita break en cada caso."
      ],
      note: [
        "switch exhaustivo",
        "Swift obliga a cubrir todos los casos. Es una protección: el compilador te avisa si olvidas uno."
      ],
      challenge:
        "Muestra los números del 1 al 10 y escribe un mensaje distinto para pares e impares."
    },
    {
      title: "Funciones",
      summary: "Declara funciones con etiquetas claras.",
      intro:
        "Las funciones de Swift usan etiquetas para los parámetros, lo que hace las llamadas muy legibles. Puedes devolver varios valores con tuplas.",
      code:
        'func saludar(a nombre: String) -> String {\n  return "Hola, \\(nombre)"\n}\n\nfunc sumar(_ a: Int, _ b: Int) -> Int {\n  return a + b\n}\n\nfunc dividir(_ a: Int, entre b: Int) -> (cociente: Int, resto: Int) {\n  return (a / b, a % b)\n}\n\nprint(saludar(a: "Ada"))\nprint(sumar(2, 3))\nprint(dividir(10, entre: 3))',
      points: [
        "-> indica el tipo de retorno.",
        "La etiqueta externa hace la llamada más natural.",
        "_ oculta la etiqueta externa.",
        "Una tupla puede devolver varios valores con nombre."
      ],
      note: [
        "Etiquetas útiles",
        "No pongas etiquetas raras solo por ponerlas. La llamada debe leerse como una frase."
      ],
      challenge:
        "Escribe una función que reciba tres notas y devuelva la media."
    },
    {
      title: "Arrays y diccionarios",
      summary: "Guarda colecciones de datos.",
      intro:
        "Swift tiene arrays ordenados y diccionarios con clave-valor. Ambos son tipos de valor y conocen su tamaño.",
      code:
        'var frutas = ["manzana", "pera", "plátano"]\nfrutas.append("kiwi")\n\nprint(frutas.count)\nprint(frutas[0])\n\nvar edades = ["Ada": 12, "Linus": 54]\nedades["Grace"] = 85\n\nif let edad = edades["Ada"] {\n  print(edad)\n}',
      points: [
        "append añade al final de un array.",
        "count devuelve cuántos elementos hay.",
        "Los diccionarios usan claves para acceder a valores.",
        "if let extrae un valor opcional de forma segura."
      ],
      note: [
        "Los diccionarios no tienen orden",
        "No confíes en el orden de un diccionario. Si necesitas orden, ordena las claves antes de recorrerlo."
      ],
      challenge:
        "Crea un diccionario con tres países y sus capitales y muestra una capital."
    },
    {
      title: "Structs y clases",
      summary: "Elige entre copia y referencia.",
      intro:
        "En Swift, los structs son tipos de valor y las clases son tipos de referencia. Esa diferencia cambia cómo se comportan al asignarlos.",
      code:
        'struct Punto {\n  var x: Int\n  var y: Int\n}\n\nvar a = Punto(x: 1, y: 2)\nvar b = a\nb.x = 10\n\nprint(a.x)\nprint(b.x)\n\nclass Mascota {\n  var nombre: String\n  init(nombre: String) {\n    self.nombre = nombre\n  }\n}\n\nlet luna = Mascota(nombre: "Luna")\nlet otra = luna\notra.nombre = "Sol"\nprint(luna.nombre)',
      points: [
        "Un struct se copia al asignarlo.",
        "Una clase comparte la misma referencia.",
        "init es el constructor de una clase.",
        "self se refiere al objeto actual."
      ],
      note: [
        "Struct por defecto",
        "En Swift se recomienda usar struct cuando los datos son simples. Usa class cuando necesites identidad compartida o herencia."
      ],
      challenge:
        "Crea un struct Libro y comprueba que copiar una variable no cambia el original."
    },
    {
      title: "Optionals",
      summary: "Trabaja con valores que pueden faltar.",
      intro:
        "Un optional puede contener un valor o no contener nada (nil). Swift obliga a manejarlo antes de usarlo.",
      code:
        'var nombre: String? = nil\n\nprint(nombre ?? "sin nombre")\n\nif let valor = nombre {\n  print(valor)\n} else {\n  print("No hay nombre")\n}\n\nnombre = "Ada"\nprint(nombre?.count)',
      points: [
        "String? es un optional de texto.",
        "?? da un valor por defecto.",
        "if let extrae el valor si existe.",
        "?. accede solo cuando hay valor."
      ],
      note: [
        "Evita el desempaquetado forzado",
        "El operador ! fuerza un optional y puede provocar un cierre inesperado. Úsalo solo con total seguridad."
      ],
      challenge:
        "Crea un optional con una edad y muestra un mensaje distinto si tiene valor o si es nil."
    },
    {
      title: "Closures",
      summary: "Guarda bloques de código como valores.",
      intro:
        "Un closure es un bloque de código que puede guardarse en una variable y ejecutarse después. Se usa mucho en eventos y colecciones.",
      code:
        'let saludar = { (nombre: String) -> String in\n  return "Hola, \\(nombre)"\n}\n\nprint(saludar("Ada"))\n\nlet numeros = [1, 2, 3, 4]\nlet pares = numeros.filter { $0 % 2 == 0 }\nlet dobles = numeros.map { $0 * 2 }\n\nprint(pares)\nprint(dobles)',
      points: [
        "Las llaves encierran el closure.",
        "in separa los parámetros del cuerpo.",
        "$0 es el primer parámetro abreviado.",
        "filter y map aceptan closures."
      ],
      note: [
        "Captura de valores",
        "Los closures pueden capturar variables externas. Tenlo en cuenta si el closure se ejecuta mucho después."
      ],
      challenge:
        "Usa map para convertir una lista de nombres en mayúsculas."
    },
    {
      title: "SwiftUI",
      summary: "Crea interfaces declarativas para Apple.",
      intro:
        "SwiftUI describe la interfaz como una función del estado. Cuando el estado cambia, la vista se actualiza sola.",
      code:
        'import SwiftUI\n\nstruct ContadorView: View {\n  @State private var puntos = 0\n\n  var body: some View {\n    VStack {\n      Text("Puntos: \\(puntos)")\n      Button("Sumar") {\n        puntos += 1\n      }\n    }\n  }\n}',
      points: [
        "@State guarda estado que puede cambiar.",
        "body describe la interfaz.",
        "VStack coloca las vistas en vertical.",
        "Button recibe un título y una acción."
      ],
      note: [
        "La interfaz sigue al estado",
        "No cambies los textos a mano: cambia el estado y deja que SwiftUI actualice la vista."
      ],
      challenge:
        "Añade un botón para restar puntos y otro para reiniciar el contador."
    },
    {
      title: "Proyecto: lista de tareas",
      summary: "Combina structs, opcionales y colecciones.",
      intro:
        "Una lista de tareas en Swift puede modelarse con un struct y un array. Marcar una tarea cambia su estado y la interfaz se actualiza.",
      code:
        'struct Tarea: Identifiable {\n  let id = UUID()\n  var titulo: String\n  var hecha: Bool = false\n}\n\nvar tareas = [\n  Tarea(titulo: "Aprender Swift"),\n  Tarea(titulo: "Practicar SwiftUI")\n]\n\ntareas[0].hecha = true\n\nlet pendientes = tareas.filter { !$0.hecha }\nfor tarea in pendientes {\n  print(tarea.titulo)\n}',
      points: [
        "Identifiable ayuda a las listas de SwiftUI a identificar filas.",
        "UUID genera un identificador único.",
        "El array guarda todas las tareas.",
        "filter deja solo las pendientes."
      ],
      note: [
        "Empieza por el modelo",
        "Si el struct Tarea está bien pensado, la vista de SwiftUI será mucho más sencilla."
      ],
      challenge:
        "Añade una función que cuente las tareas completadas."
    }
  ];

  EXTRA.rust = [
    {
      title: "Variables y tipos",
      summary: "Aprende let, mut y los tipos básicos.",
      intro:
        "En Rust las variables son inmutables por defecto. Para poder cambiarlas hay que declararlas con mut.",
      code:
        'fn main() {\n  let nombre = "Ada";\n  let mut edad = 12;\n  edad += 1;\n\n  let altura: f64 = 1.55;\n  let activo: bool = true;\n\n  println!("Hola, {}", nombre);\n  println!("Edad: {}", edad);\n  println!("Altura: {}", altura);\n  println!("Activo: {}", activo);\n}',
      points: [
        "let crea una variable inmutable.",
        "mut permite modificar la variable.",
        "El tipo puede deducirse o escribirse.",
        "i32 es un entero y f64 un decimal."
      ],
      note: [
        "Inmutabilidad por defecto",
        "Que una variable no cambie salvo que lo pidas explícitamente evita muchos errores en programas grandes."
      ],
      challenge:
        "Crea una variable mutable de puntos, súmale diez y muestra el resultado."
    },
    {
      title: "Funciones",
      summary: "Declara funciones con tipos claros.",
      intro:
        "Las funciones de Rust se declaran con fn. Los parámetros y el retorno llevan tipo, y el último valor de una función se devuelve sin return.",
      code:
        'fn sumar(a: i32, b: i32) -> i32 {\n  a + b\n}\n\nfn saludar(nombre: &str) -> String {\n  format!("Hola, {}", nombre)\n}\n\nfn main() {\n  println!("{}", sumar(2, 3));\n  println!("{}", saludar("Ada"));\n}',
      points: [
        "fn declara una función.",
        "-> indica el tipo de retorno.",
        "La última expresión se devuelve automáticamente.",
        "format! crea un String con texto formateado."
      ],
      note: [
        "Expresión frente a instrucción",
        "a + b sin punto y coma es una expresión que devuelve un valor. a + b; sería una instrucción y devolvería ()."
      ],
      challenge:
        "Escribe una función que reciba tres notas y devuelva la media."
    },
    {
      title: "Condiciones y bucles",
      summary: "Controla el flujo en Rust.",
      intro:
        "Rust tiene if, loop, while y for. if es una expresión, así que puede devolver un valor.",
      code:
        'fn main() {\n  let puntos = 8;\n\n  if puntos >= 10 {\n    println!("¡Nivel superado!");\n  } else if puntos >= 5 {\n    println!("Vas por buen camino");\n  } else {\n    println!("Sigue practicando");\n  }\n\n  for i in 1..=5 {\n    println!("Vuelta {}", i);\n  }\n}',
      points: [
        "if, else if y else eligen caminos.",
        "1..=5 incluye el 5; 1..5 lo excluye.",
        "for recorre rangos y colecciones.",
        "loop repite hasta que uses break."
      ],
      note: [
        "Rangos",
        "El rango 1..=5 es inclusivo. Es fácil confundirlo con 1..5, que termina en 4."
      ],
      challenge:
        "Muestra los números del 1 al 10 y marca los pares."
    },
    {
      title: "Ownership",
      summary: "Entiende la regla más importante de Rust.",
      intro:
        "Cada valor tiene un único dueño. Cuando el dueño sale de su ámbito, el valor se libera. Esto evita errores de memoria sin recolector de basura.",
      code:
        'fn main() {\n  let texto = String::from("Hola");\n  let otro = texto;\n\n  // println!("{}", texto); // Error: texto ya no es el dueño\n  println!("{}", otro);\n\n  let copia = otro.clone();\n  println!("{} {}", otro, copia);\n}',
      points: [
        "Asignar un String mueve la propiedad.",
        "Después de mover, el original no se puede usar.",
        "clone crea una copia profunda.",
        "Los tipos simples como i32 se copian automáticamente."
      ],
      note: [
        "Préstamos",
        "Si no quieres mover el valor, pasa una referencia con &. Así el dueño conserva el valor."
      ],
      challenge:
        "Crea un String, pásalo a una función con & y comprueba que puedes seguir usándolo después."
    },
    {
      title: "Structs",
      summary: "Agrupa datos con nombres.",
      intro:
        "Un struct de Rust agrupa campos con nombre. Los métodos se definen en un bloque impl.",
      code:
        'struct Mascota {\n  nombre: String,\n  energia: u32,\n}\n\nimpl Mascota {\n  fn jugar(&mut self) {\n    self.energia -= 10;\n  }\n}\n\nfn main() {\n  let mut luna = Mascota {\n    nombre: String::from("Luna"),\n    energia: 100,\n  };\n\n  luna.jugar();\n  println!("{}: {}", luna.nombre, luna.energia);\n}',
      points: [
        "struct define los campos.",
        "impl contiene los métodos del tipo.",
        "&mut self permite modificar el struct.",
        "Los campos se leen con punto."
      ],
      note: [
        "Métodos y funciones asociadas",
        "Un método lleva self como primer parámetro. Una función asociada no lo lleva y se llama con Tipo::funcion()."
      ],
      challenge:
        "Crea un struct Libro con título y autor y un método que muestre su información."
    },
    {
      title: "Enums y match",
      summary: "Modela varias opciones posibles.",
      intro:
        "Un enum puede tener varias variantes y cada una puede guardar datos. match obliga a cubrir todas las variantes.",
      code:
        'enum Estado {\n  Pendiente,\n  Hecha,\n  Cancelada,\n}\n\nfn describir(estado: Estado) -> &\'static str {\n  match estado {\n    Estado::Pendiente => "Pendiente",\n    Estado::Hecha => "Hecha",\n    Estado::Cancelada => "Cancelada",\n  }\n}\n\nfn main() {\n  println!("{}", describir(Estado::Hecha));\n}',
      points: [
        "enum agrupa variantes.",
        "Cada variante puede tener datos propios.",
        "match compara con cada variante.",
        "El compilador exige cubrir todos los casos."
      ],
      note: [
        "Enums con datos",
        "Un enum puede guardar valores dentro de cada variante. Así puedes representar resultados correctos o errores con un solo tipo."
      ],
      challenge:
        "Crea un enum Direccion con cuatro variantes y una función que devuelva el nombre de cada una."
    },
    {
      title: "Vectores y HashMap",
      summary: "Usa colecciones dinámicas.",
      intro:
        "Vec guarda una lista ordenada que puede crecer. HashMap asocia claves con valores. Son dos de las colecciones más usadas.",
      code:
        'use std::collections::HashMap;\n\nfn main() {\n  let mut numeros = vec![1, 2, 3];\n  numeros.push(4);\n\n  for numero in &numeros {\n    println!("{}", numero);\n  }\n\n  let mut edades = HashMap::new();\n  edades.insert("Ada", 12);\n  edades.insert("Linus", 54);\n\n  println!("{:?}", edades.get("Ada"));\n}',
      points: [
        "vec! crea un vector con valores iniciales.",
        "push añade al final.",
        "&numeros recorre por referencia.",
        "HashMap::new crea un mapa vacío."
      ],
      note: [
        "get devuelve Option",
        "HashMap::get devuelve Option<&V>. Si la clave no existe, obtienes None en lugar de un error."
      ],
      challenge:
        "Crea un HashMap con tres países y sus capitales y muestra una capital."
    },
    {
      title: "Traits y genéricos",
      summary: "Comparte comportamiento entre tipos.",
      intro:
        "Un trait define métodos que un tipo puede implementar. Los genéricos permiten escribir código para muchos tipos que cumplen un trait.",
      code:
        'trait Hablar {\n  fn hablar(&self) -> String;\n}\n\nstruct Perro;\n\nimpl Hablar for Perro {\n  fn hablar(&self) -> String {\n    String::from("Guau")\n  }\n}\n\nfn presentar<T: Hablar>(animal: T) {\n  println!("{}", animal.hablar());\n}\n\nfn main() {\n  presentar(Perro);\n}',
      points: [
        "trait declara métodos sin implementación.",
        "impl Trait for Tipo implementa el trait.",
        "T: Hablar exige que el tipo cumpla el trait.",
        "Los genéricos evitan duplicar funciones."
      ],
      note: [
        "Traits como contratos",
        "Un trait dice qué puede hacer un tipo, no cómo lo hace. Así puedes cambiar la implementación sin cambiar el código que la usa."
      ],
      challenge:
        "Crea un trait Volador con un método volar e impleméntalo en una struct Pajaro."
    },
    {
      title: "Proyecto: lista de tareas",
      summary: "Combina structs, enums y vectores.",
      intro:
        "Una lista de tareas en Rust puede usar un enum para el estado y un vector para guardar las tareas. El compilador ayuda a no olvidar casos.",
      code:
        'enum Estado {\n  Pendiente,\n  Hecha,\n}\n\nstruct Tarea {\n  titulo: String,\n  estado: Estado,\n}\n\nfn main() {\n  let mut tareas = vec![\n    Tarea {\n      titulo: String::from("Aprender Rust"),\n      estado: Estado::Pendiente,\n    },\n  ];\n\n  tareas[0].estado = Estado::Hecha;\n\n  for tarea in &tareas {\n    match tarea.estado {\n      Estado::Pendiente => println!("[ ] {}", tarea.titulo),\n      Estado::Hecha => println!("[x] {}", tarea.titulo),\n    }\n  }\n}',
      points: [
        "El enum Estado representa las opciones.",
        "El struct Tarea guarda título y estado.",
        "Vec almacena todas las tareas.",
        "match decide cómo mostrar cada estado."
      ],
      note: [
        "Diseña con tipos",
        "Usar un enum para el estado evita valores imposibles, como una tarea marcada como hecha y pendiente a la vez."
      ],
      challenge:
        "Añade una función que reciba las tareas y devuelva cuántas están pendientes."
    }
  ];

  EXTRA.terminal = [
    {
      title: "¿Qué es la terminal?",
      summary: "Conoce la línea de comandos y para qué sirve.",
      intro:
        "La terminal es una ventana donde escribes órdenes en texto. En lugar de hacer clic en iconos, escribes el nombre de un programa y le das a Enter.",
      code:
        'echo "Hola, terminal"\nwhoami\npwd',
      points: [
        "La línea de comandos espera una orden y la ejecuta al pulsar Enter.",
        "whoami dice el nombre del usuario actual.",
        "pwd muestra en qué carpeta estás.",
        "Al principio parece difícil, pero casi todo se aprende con unos pocos comandos."
      ],
      note: [
        "La terminal no es magia",
        "Cada comando es un programa. La terminal solo se encarga de leer lo que escribes, ejecutarlo y mostrarte el resultado."
      ],
      challenge:
        "Abre una terminal y ejecuta whoami, pwd y echo con tu nombre."
    },
    {
      title: "Orientarte: pwd, ls y cd",
      summary: "Averigua dónde estás y muévete entre carpetas.",
      intro:
        "El sistema de archivos es un árbol de carpetas. Con pwd ves dónde estás, con ls ves qué hay y con cd cambias de carpeta.",
      code:
        'pwd\nls\nls -la\ncd Descargas\npwd\ncd ..\npwd',
      points: [
        "pwd muestra la ruta de la carpeta actual.",
        "ls lista los archivos y carpetas.",
        "ls -la muestra también los ocultos y los detalles.",
        "cd .. sube a la carpeta superior; cd solo vuelve a tu carpeta personal."
      ],
      note: [
        "Puedes usar Tab",
        "Escribe las primeras letras de una carpeta y pulsa Tab. La terminal completará el nombre por ti."
      ],
      challenge:
        "Muévete a tu carpeta personal, lista su contenido y entra en una carpeta. Después vuelve con cd .."
    },
    {
      title: "Crear y organizar archivos",
      summary: "Crea carpetas y mueve archivos.",
      intro:
        "mkdir crea carpetas, touch crea archivos vacíos, cp copia y mv mueve o renombra. Son los comandos básicos para ordenar tu espacio.",
      code:
        'mkdir proyectos\ncd proyectos\ntouch notas.txt\ncp notas.txt copia.txt\nmv copia.txt respaldo.txt\nmv respaldo.txt ../respaldo.txt',
      points: [
        "mkdir crea una carpeta.",
        "touch crea un archivo vacío si no existe.",
        "cp copia un archivo o una carpeta con -r.",
        "mv mueve o cambia el nombre."
      ],
      note: [
        "mv puede sobrescribir",
        "Si el destino ya existe, mv puede reemplazarlo. Comprueba antes con ls para no perder datos."
      ],
      challenge:
        "Crea una carpeta llamada practica con un archivo dentro, cópialo y renómbralo."
    },
    {
      title: "Leer archivos",
      summary: "Muestra el contenido sin abrir un editor.",
      intro:
        "cat muestra todo un archivo, less permite recorrerlo y head o tail enseñan solo el principio o el final.",
      code:
        'cat notas.txt\nhead -n 5 notas.txt\ntail -n 5 notas.txt\nless notas.txt',
      points: [
        "cat es rápido para archivos cortos.",
        "head -n 5 muestra las primeras cinco líneas.",
        "tail -n 5 muestra las últimas cinco.",
        "Dentro de less, usa q para salir y las flechas para moverte."
      ],
      note: [
        "Archivos enormes",
        "No uses cat con archivos gigantes: llenará la pantalla. less está pensado justo para eso."
      ],
      challenge:
        "Crea un archivo con diez líneas y muestra solo las tres primeras y las tres últimas."
    },
    {
      title: "Borrar de verdad",
      summary: "Elimina archivos y carpetas con cuidado.",
      intro:
        "A diferencia de la papelera, rm borra de verdad. No hay botón de deshacer, así que revisa siempre la ruta antes de pulsar Enter.",
      code:
        'rm archivo.txt\nrm -r carpeta\nrmdir carpeta_vacia',
      points: [
        "rm borra archivos.",
        "rm -r borra una carpeta y todo su contenido.",
        "rmdir solo borra carpetas vacías.",
        "Nunca ejecutes rm -rf / ni comandos parecidos."
      ],
      note: [
        "No hay deshacer",
        "Antes de borrar, usa ls o echo para comprobar exactamente qué archivos coinciden con el patrón."
      ],
      challenge:
        "Crea una carpeta de prueba, añade archivos y bórrala con rm -r. Comprueba antes con ls."
    },
    {
      title: "Rutas absolutas y relativas",
      summary: "Entiende cómo se localiza cada archivo.",
      intro:
        "Una ruta absoluta empieza en la raíz / y no depende de dónde estés. Una ruta relativa depende de tu carpeta actual.",
      code:
        'pwd\nls /etc\ncd ~/proyectos\ncat ./notas.txt\ncd ../../\npwd',
      points: [
        "/ es la raíz del sistema.",
        "~ representa tu carpeta personal.",
        ". es la carpeta actual y .. la carpeta superior.",
        "Una ruta que no empieza por / es relativa."
      ],
      note: [
        "Usa pwd para no perderte",
        "Si un comando dice que no encuentra un archivo, ejecuta pwd y comprueba desde dónde estás intentando acceder."
      ],
      challenge:
        "Entra en una carpeta, muestra un archivo con ruta relativa y luego ábrelo con ruta absoluta."
    },
    {
      title: "Comodines",
      summary: "Selecciona varios archivos a la vez.",
      intro:
        "Los comodines permiten escribir un patrón en lugar de muchos nombres. * significa cualquier cantidad de caracteres y ? un solo carácter.",
      code:
        'ls *.txt\nls foto?.jpg\nls [abc]*\nrm *.tmp',
      points: [
        "* coincide con cero o más caracteres.",
        "? coincide con exactamente un carácter.",
        "[abc] coincide con uno de esos caracteres.",
        "Prueba siempre el patrón con ls antes de usarlo con rm."
      ],
      note: [
        "El comodín lo expande la shell",
        "El programa recibe la lista de archivos ya expandida. Si no coincide ningún archivo, algunos shells dejan el patrón tal cual."
      ],
      challenge:
        "Crea varios archivos .txt y .md y lista solo los .txt con un comodín."
    },
    {
      title: "Redirección y pipes",
      summary: "Conecta la salida de un programa con otro.",
      intro:
        "Puedes guardar la salida de un comando en un archivo con >, añadirla con >> y pasarla a otro comando con |.",
      code:
        'ls > lista.txt\nls >> lista.txt\ncat lista.txt | grep ".txt"\nls -la | less\nhistory | tail -n 10',
      points: [
        "> escribe y reemplaza el contenido del archivo.",
        ">> añade al final.",
        "| conecta la salida de un comando con la entrada de otro.",
        "less es útil para revisar salidas largas."
      ],
      note: [
        "> borra el archivo",
        "Si usas > sobre un archivo existente, lo vacías antes de escribir. Usa >> si quieres conservar lo anterior."
      ],
      challenge:
        "Guarda la lista de archivos en un archivo y después muestra solo las líneas que contengan .js."
    },
    {
      title: "Buscar con grep y find",
      summary: "Encuentra texto y archivos por todo el sistema.",
      intro:
        "grep busca dentro del contenido de los archivos. find busca archivos por nombre, tipo o fecha.",
      code:
        'grep -r "function" src/\ngrep -n "error" registro.txt\nfind . -name "*.js"\nfind . -type d',
      points: [
        "-r busca dentro de carpetas de forma recursiva.",
        "-n muestra el número de línea.",
        "-name filtra por nombre.",
        "-type d busca solo carpetas; -type f, solo archivos."
      ],
      note: [
        "Empieza por una carpeta concreta",
        "Buscar desde / puede tardar mucho y mostrar errores de permisos. Empieza por tu proyecto."
      ],
      challenge:
        "Busca todas las apariciones de tu nombre en los archivos de una carpeta y muestra la línea."
    },
    {
      title: "Permisos",
      summary: "Controla quién puede leer, escribir y ejecutar.",
      intro:
        "Cada archivo tiene permisos para el dueño, el grupo y el resto del sistema. ls -l los muestra y chmod los cambia.",
      code:
        'ls -l script.sh\nchmod +x script.sh\n./script.sh\nchmod 644 notas.txt',
      points: [
        "r significa lectura, w escritura y x ejecución.",
        "chmod +x añade permiso de ejecución.",
        "644 permite leer a todos y escribir solo al dueño.",
        "chown cambia el dueño de un archivo."
      ],
      note: [
        "No des permisos de más",
        "Evita chmod 777 por costumbre. Da solo los permisos que el archivo necesita."
      ],
      challenge:
        "Crea un script, dale permiso de ejecución y ejecútalo con ./."
    },
    {
      title: "Procesos",
      summary: "Mira qué se está ejecutando y detenlo si hace falta.",
      intro:
        "ps lista procesos, top muestra el uso en tiempo real y kill termina un proceso por su identificador.",
      code:
        'ps aux\nps aux | grep firefox\ntop\nkill 1234\nkill -9 1234',
      points: [
        "ps aux muestra los procesos en marcha.",
        "grep filtra la lista por nombre.",
        "top se actualiza en tiempo real; sal con q.",
        "kill envía una señal; -9 fuerza la terminación."
      ],
      note: [
        "Primero intenta cerrar bien",
        "kill -9 no deja que el programa guarde datos. Úsalo solo cuando el proceso no responde."
      ],
      challenge:
        "Abre un proceso largo en una terminal, encuéntralo con ps y ciérralo con kill."
    },
    {
      title: "Scripts y siguientes pasos",
      summary: "Automatiza tareas con un archivo de comandos.",
      intro:
        "Un script es un archivo de texto con comandos que se ejecutan en orden. Puedes usar variables, argumentos y condiciones para automatizar tareas.",
      code:
        '#!/bin/sh\n\nnombre=$1\nif [ -z "$nombre" ]; then\n  echo "Uso: ./saludo.sh NOMBRE"\n  exit 1\nfi\n\necho "Hola, $nombre"\n',
      points: [
        "La primera línea indica qué intérprete ejecuta el script.",
        "$1 es el primer argumento.",
        "[ -z \"$nombre\" ] comprueba si está vacío.",
        "Con chmod +x puedes ejecutarlo como ./saludo.sh."
      ],
      note: [
        "Siguientes pasos",
        "Cuando domines estos comandos, aprende ssh, cron, rsync y los permisos avanzados. La terminal se vuelve más útil cada día."
      ],
      challenge:
        "Crea un script que reciba un nombre y muestre un saludo, con un mensaje de error si falta el argumento."
    }
  ];

  EXTRA.assembly = [
    {
      title: "¿Qué es Assembly?",
      summary: "El lenguaje que está justo encima de la máquina.",
      intro:
        "Assembly es una representación legible de las instrucciones que entiende el procesador. Cada instrucción hace una operación muy pequeña y muy rápida.",
      code:
        'section .data\n  mensaje db "Hola", 10\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, mensaje\n  mov rdx, 5\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall',
      points: [
        "Las instrucciones se escriben una por línea.",
        "section .data guarda datos y section .text el código.",
        "_start es el punto de entrada en Linux.",
        "syscall pide al sistema operativo que haga algo."
      ],
      note: [
        "Assembly depende de la arquitectura",
        "El mismo programa no funciona igual en x86-64, ARM o RISC-V. Estos ejemplos usan x86-64 con Linux."
      ],
      challenge:
        "Cambia el texto del mensaje por tu nombre y ajusta la longitud para que se imprima entero."
    },
    {
      title: "Arquitectura y registros",
      summary: "Conoce los cajones rápidos del procesador.",
      intro:
        "Los registros son espacios diminutos y rapidísimos dentro del procesador. En x86-64, rax, rbx, rcx y rdx son algunos de los principales.",
      code:
        'section .text\n  global _start\n\n_start:\n  mov rax, 10\n  mov rbx, 20\n  add rax, rbx\n  mov rdi, rax\n  mov rax, 60\n  syscall',
      points: [
        "rax suele guardar resultados y números de syscall.",
        "rbx, rcx y rdx son registros de propósito general.",
        "rsp apunta a la pila y rbp marca el marco de pila.",
        "rdi, rsi y rdx se usan para argumentos en Linux."
      ],
      note: [
        "Los nombres cambian de tamaño",
        "rax es de 64 bits, eax de 32, ax de 16 y al de 8. Escribir en eax modifica la parte baja de rax."
      ],
      challenge:
        "Suma dos números en rax y rbx y deja el resultado en rdi para usarlo como código de salida."
    },
    {
      title: "Mover datos con mov",
      summary: "Copia valores entre registros y memoria.",
      intro:
        "mov copia un valor de un sitio a otro. No suma ni resta: solo mueve. El destino y el origen deben tener tamaños compatibles.",
      code:
        'section .data\n  numero dq 42\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 7\n  mov rbx, rax\n  mov rcx, [numero]\n  mov [numero], rbx\n\n  mov rdi, rcx\n  mov rax, 60\n  syscall',
      points: [
        "mov destino, origen copia el origen en el destino.",
        "Los corchetes acceden a la memoria.",
        "dq reserva 8 bytes (64 bits).",
        "No se puede mover memoria a memoria directamente: usa un registro intermedio."
      ],
      note: [
        "El orden importa",
        "En sintaxis Intel, el destino va primero: mov rax, 5 guarda 5 en rax. En sintaxis AT&T es al revés."
      ],
      challenge:
        "Guarda un número en memoria, cárgalo en un registro y vuelve a guardarlo multiplicado por dos."
    },
    {
      title: "Sumar y restar",
      summary: "Haz operaciones aritméticas básicas.",
      intro:
        "add suma y sub resta. El resultado se guarda en el primer operando. inc y dec suman o restan uno.",
      code:
        'section .text\n  global _start\n\n_start:\n  mov rax, 10\n  add rax, 5\n  sub rax, 3\n  inc rax\n  dec rax\n\n  mov rdi, rax\n  mov rax, 60\n  syscall',
      points: [
        "add rax, 5 equivale a rax = rax + 5.",
        "sub rax, 3 resta tres.",
        "inc suma uno y dec resta uno.",
        "El resultado queda en el primer operando."
      ],
      note: [
        "Código de salida",
        "El código de salida de un programa solo usa 8 bits. Si el resultado es mayor de 255, verás el valor truncado."
      ],
      challenge:
        "Calcula 20 - 5 + 2 y usa el resultado como código de salida del programa."
    },
    {
      title: "Secciones y datos",
      summary: "Organiza el código y los datos del programa.",
      intro:
        "Un programa en Assembly suele tener una sección de datos y una sección de código. Los datos pueden ser bytes, palabras, dobles palabras o cadenas.",
      code:
        'section .data\n  letra db \'A\'\n  numero dd 1234\n  grande dq 123456789\n  texto db "Hola", 0\n\nsection .bss\n  buffer resb 64\n\nsection .text\n  global _start\n\n_start:\n  mov al, [letra]\n  mov rdi, 0\n  mov rax, 60\n  syscall',
      points: [
        "db reserva un byte; dw, dos; dd, cuatro; dq, ocho.",
        "resb reserva espacio sin valor inicial en .bss.",
        "El cero final marca el final de una cadena estilo C.",
        "Las etiquetas dan nombre a posiciones de memoria."
      ],
      note: [
        "Elige el tamaño correcto",
        "Si reservas un byte y lees ocho, estarás leyendo memoria que no te pertenece. El tamaño debe coincidir con la instrucción."
      ],
      challenge:
        "Reserva un byte, una palabra y una cadena de texto en .data. Comprueba que el programa compila."
    },
    {
      title: "Hola mundo con syscall",
      summary: "Escribe en pantalla usando el sistema operativo.",
      intro:
        "En Linux, un programa pide servicios al sistema con syscall. Para escribir texto se usa sys_write, que necesita el descriptor, la dirección y la longitud.",
      code:
        'section .data\n  mensaje db "Hola, mundo", 10\n  longitud equ $ - mensaje\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, mensaje\n  mov rdx, longitud\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall',
      points: [
        "rax = 1 selecciona sys_write.",
        "rdi = 1 significa salida estándar.",
        "rsi apunta al texto y rdx indica cuántos bytes.",
        "rax = 60 es sys_exit; rdi guarda el código de salida."
      ],
      note: [
        "La longitud importa",
        "El sistema no sabe dónde termina el texto. Debes indicar exactamente cuántos bytes quieres escribir."
      ],
      challenge:
        "Escribe un saludo de dos líneas usando dos llamadas a sys_write o un texto con dos saltos de línea."
    },
    {
      title: "Comparaciones y saltos",
      summary: "Toma decisiones en Assembly.",
      intro:
        "cmp compara dos valores y deja el resultado en las banderas. Después, je, jne, jg o jl saltan a otra etiqueta según el resultado.",
      code:
        'section .text\n  global _start\n\n_start:\n  mov rax, 8\n  mov rbx, 10\n  cmp rax, rbx\n  jl menor\n  jmp fin\n\nmenor:\n  mov rdi, 1\n  jmp salir\n\nfin:\n  mov rdi, 0\n\nsalir:\n  mov rax, 60\n  syscall',
      points: [
        "cmp resta sin guardar el resultado, solo actualiza banderas.",
        "je salta si son iguales; jne, si son distintas.",
        "jl salta si el primero es menor; jg, si es mayor.",
        "Las etiquetas marcan destinos de salto."
      ],
      note: [
        "Las banderas son globales",
        "Casi cualquier instrucción puede cambiar las banderas. Haz el salto justo después de cmp para no confundirte."
      ],
      challenge:
        "Compara dos números y termina con código 0 si son iguales y 1 si son distintos."
    },
    {
      title: "Bucles",
      summary: "Repite instrucciones con saltos y contadores.",
      intro:
        "Un bucle en Assembly se construye con una etiqueta, un contador y un salto condicional. dec actualiza las banderas y jnz salta mientras no sea cero.",
      code:
        'section .text\n  global _start\n\n_start:\n  mov rcx, 5\n  mov rax, 0\n\nbucle:\n  add rax, rcx\n  dec rcx\n  jnz bucle\n\n  mov rdi, rax\n  mov rax, 60\n  syscall',
      points: [
        "rcx es un contador habitual.",
        "dec resta uno y actualiza las banderas.",
        "jnz salta si el resultado no es cero.",
        "Cuando rcx llega a cero, el bucle termina."
      ],
      note: [
        "Bucles infinitos",
        "Si olvidas decrementar el contador o usas la instrucción equivocada, el programa no termina. Ten claro qué condición cambia."
      ],
      challenge:
        "Suma los números del 1 al 10 con un bucle y deja el resultado en el código de salida."
    },
    {
      title: "La pila y las funciones",
      summary: "Guarda direcciones y crea llamadas reutilizables.",
      intro:
        "La pila crece hacia abajo y guarda direcciones de retorno y datos temporales. call guarda la dirección de vuelta y ret la recupera.",
      code:
        'section .text\n  global _start\n\n_start:\n  mov rdi, 5\n  call duplicar\n  mov rdi, rax\n  mov rax, 60\n  syscall\n\nduplicar:\n  push rbp\n  mov rbp, rsp\n  mov rax, rdi\n  add rax, rax\n  pop rbp\n  ret',
      points: [
        "call salta a una función y guarda la dirección de vuelta.",
        "ret vuelve a la instrucción siguiente al call.",
        "push guarda un valor en la pila y pop lo recupera.",
        "rbp ayuda a mantener un marco de pila estable."
      ],
      note: [
        "Equilibra push y pop",
        "Cada push debe tener su pop. Si la pila queda desequilibrada, ret puede volver a una dirección incorrecta."
      ],
      challenge:
        "Escribe una función que reciba un número en rdi y devuelva su triple en rax."
    },
    {
      title: "Operaciones bit a bit",
      summary: "Trabaja directamente con los bits.",
      intro:
        "and, or, xor, not, shl y shr modifican bits individuales. Son muy usadas para máscaras, colores y optimizaciones.",
      code:
        'section .text\n  global _start\n\n_start:\n  mov rax, 5\n  and rax, 3\n  or rax, 8\n  xor rax, 1\n  shl rax, 2\n  shr rax, 1\n\n  mov rdi, rax\n  mov rax, 60\n  syscall',
      points: [
        "and conserva solo los bits que están en ambos valores.",
        "or enciende bits; xor los invierte cuando son distintos.",
        "shl desplaza a la izquierda y multiplica por potencias de dos.",
        "shr desplaza a la derecha."
      ],
      note: [
        "Piénsalo en binario",
        "Escribe los números en binario en papel cuando practiques. Ver los bits hace que las operaciones tengan sentido."
      ],
      challenge:
        "Usa and para comprobar si un número es par (el bit menos significativo debe ser 0)."
    },
    {
      title: "Depurar Assembly",
      summary: "Aprende a compilar y encontrar errores.",
      intro:
        "Para x86-64 en Linux se suele usar NASM para ensamblar y ld para enlazar. gdb permite ejecutar paso a paso y ver registros.",
      code:
        'nasm -f elf64 programa.asm -o programa.o\nld programa.o -o programa\n./programa\n\ngdb ./programa\n# dentro de gdb:\n# break _start\n# run\n# info registers\n# stepi',
      points: [
        "nasm convierte el texto en un archivo objeto.",
        "ld enlaza el objeto y crea el ejecutable.",
        "gdb permite parar y examinar registros.",
        "stepi ejecuta una instrucción cada vez."
      ],
      note: [
        "Empieza con programas pequeños",
        "Un error en Assembly puede ser difícil de localizar. Prueba una instrucción nueva en un programa mínimo antes de integrarla."
      ],
      challenge:
        "Ensambla un programa que termine con código de salida 7 y compruébalo con echo $?."
    },
    {
      title: "Proyecto: sumar del 1 al 10",
      summary: "Junta registros, bucles y salida.",
      intro:
        "Este proyecto suma los números del 1 al 10 usando un bucle y deja el resultado como código de salida. Es pequeño, pero usa todas las piezas básicas.",
      code:
        'section .text\n  global _start\n\n_start:\n  mov rcx, 10\n  xor rax, rax\n\nsumar:\n  add rax, rcx\n  dec rcx\n  jnz sumar\n\n  mov rdi, rax\n  mov rax, 60\n  syscall',
      points: [
        "rax empieza en cero y acumula la suma.",
        "rcx es el contador que baja de 10 a 1.",
        "jnz repite hasta que rcx sea cero.",
        "El resultado final se mueve a rdi para salir."
      ],
      note: [
        "Comprueba el resultado",
        "La suma de 1 a 10 es 55. Ejecuta el programa y usa echo $? para ver el código de salida."
      ],
      challenge:
        "Modifica el programa para sumar del 1 al 100. Comprueba por qué el código de salida no muestra el resultado completo."
    }
  ];

  var PLAYGROUND_CSS =
    "body {\n  font-family: sans-serif;\n  padding: 24px;\n  line-height: 1.6;\n  color: #16181f;\n}\n\n.boton {\n  padding: 8px 14px;\n  border: 1px solid #c9cee0;\n  border-radius: 8px;\n  background: #ece9ff;\n  cursor: pointer;\n}\n\n.caja {\n  border: 2px solid #4f37e0;\n  border-radius: 10px;\n  background: #fff;\n}\n";

  var CSS_SCAFFOLD =
    '<header>\n  <h1>Mi página</h1>\n  <p>Un ejemplo para practicar CSS.</p>\n</header>\n\n<main class="contenido">\n  <section class="fila">\n    <span>HTML</span>\n    <span>CSS</span>\n    <span>JavaScript</span>\n  </section>\n\n  <div class="galeria">\n    <div class="tarjeta destacado">Tarjeta 1</div>\n    <div class="tarjeta">Tarjeta 2</div>\n    <div class="tarjeta">Tarjeta 3</div>\n    <div class="tarjeta">Tarjeta 4</div>\n    <div class="tarjeta">Tarjeta 5</div>\n    <div class="tarjeta">Tarjeta 6</div>\n  </div>\n\n  <div class="caja">Una caja de ejemplo</div>\n  <button class="boton" type="button">Púlsame</button>\n</main>';

  var JS_SCAFFOLD =
    '<h1>Mi página</h1>\n<main>\n  <p>Este texto lo puedes cambiar con JavaScript.</p>\n  <button id="saludar" type="button">Saludar</button>\n  <p id="salida"></p>\n\n  <form>\n    <label for="nombre">Nombre:</label>\n    <input id="nombre" name="nombre" type="text">\n    <button type="submit">Enviar</button>\n  </form>\n</main>';

  function makeLesson(lang, def, number) {
    var body = [];

    if (def.intro) {
      body.push({ t: "p", text: def.intro });
    }
    if (def.code) {
      body.push({
        t: "code",
        label: def.label || lang.name,
        text: def.code
      });
    }
    if (def.points && def.points.length) {
      body.push({ t: "ul", items: def.points });
    }
    if (def.note) {
      body.push({ t: "note", title: def.note[0], text: def.note[1] });
    }

    var lesson = {
      id: lang.key + "-" + number,
      lang: lang.key,
      title: def.title,
      level: def.level || "Principiante",
      minutes: def.minutes || 10,
      summary: def.summary,
      body: body,
      challenge: def.challenge
    };

    if (def.practice) {
      lesson.practice = def.practice;
    } else if (def.code && lang.key === "html") {
      lesson.practice = { html: def.code, css: PLAYGROUND_CSS, js: "" };
    } else if (def.code && lang.key === "css") {
      lesson.practice = { html: CSS_SCAFFOLD, css: def.code, js: "" };
    } else if (def.code && lang.key === "js") {
      lesson.practice = { html: JS_SCAFFOLD, css: PLAYGROUND_CSS, js: def.code };
    }

    return lesson;
  }

  function boot() {
    var languageOrder = {};
    data.LANGUAGES.forEach(function (lang, index) {
      languageOrder[lang.key] = index;
    });

    var sequence = 0;
    data.LESSONS.forEach(function (lesson) {
      lesson.__sequence = sequence++;
    });

    data.LANGUAGES.forEach(function (lang) {
      var definitions = EXTRA[lang.key];
      if (!definitions || !definitions.length) return;

      var start = data.lessonsByLang(lang.key).length;

      definitions.forEach(function (def, index) {
        var lesson = makeLesson(lang, def, start + index + 1);
        lesson.__sequence = sequence++;
        data.LESSONS.push(lesson);
      });
    });

    data.LESSONS.sort(function (a, b) {
      var byLang = languageOrder[a.lang] - languageOrder[b.lang];
      return byLang !== 0 ? byLang : a.__sequence - b.__sequence;
    });

    data.LESSONS.forEach(function (lesson) {
      delete lesson.__sequence;
    });

    data.total = data.LESSONS.length;
  }

  boot();
})();

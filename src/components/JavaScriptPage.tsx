export function JavaScriptPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-950 text-white rounded-lg p-8 mb-8 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">JavaScript</h1>
            <p className="text-teal-200">El lenguaje de la web</p>
          </div>
          <div className="text-right">
            <div className="text-5xl opacity-80">1995</div>
          </div>
        </div>
      </div>

      {/* Historia */}
      <section className="bg-white rounded-lg p-8 shadow-md mb-8">
        <h2 className="text-gray-800 mb-4">Historia</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Creador:</strong> Brendan Eich en Netscape Communications
          </p>
          <p>
            JavaScript fue creado en solo 10 días en mayo de 1995 por Brendan Eich mientras trabajaba 
            en Netscape Communications. Originalmente se llamó "Mocha", luego "LiveScript", y finalmente 
            "JavaScript" como una estrategia de marketing para aprovechar la popularidad de Java en ese 
            momento (aunque los dos lenguajes no están relacionados).
          </p>
          <p>
            El objetivo era crear un lenguaje de scripting ligero que permitiera a los desarrolladores 
            web agregar interactividad a las páginas HTML. En una época donde las páginas web eran 
            completamente estáticas, JavaScript revolucionó la web al permitir contenido dinámico.
          </p>
          <p>
            A pesar de su creación apresurada, JavaScript ha evolucionado hasta convertirse en uno de 
            los lenguajes de programación más importantes y versátiles del mundo. Con la llegada de 
            Node.js en 2009, JavaScript salió del navegador y se convirtió en un lenguaje de propósito 
            general que puede usarse en servidores, aplicaciones móviles, de escritorio y más.
          </p>
          <p>
            Hoy en día, JavaScript es el único lenguaje que se ejecuta nativamente en todos los 
            navegadores web, haciéndolo esencial para el desarrollo web moderno.
          </p>
        </div>
      </section>

      {/* Características */}
      <section className="bg-white rounded-lg p-8 shadow-md mb-8">
        <h2 className="text-gray-800 mb-4">Características Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-700">
            <h3 className="text-gray-800 mb-2">Lenguaje de la Web</h3>
            <p className="text-gray-600">
              Se ejecuta en todos los navegadores web sin necesidad de plugins
            </p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-700">
            <h3 className="text-gray-800 mb-2">Tipado Dinámico</h3>
            <p className="text-gray-600">
              Las variables pueden cambiar de tipo durante la ejecución
            </p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-700">
            <h3 className="text-gray-800 mb-2">Basado en Prototipos</h3>
            <p className="text-gray-600">
              Usa herencia prototípica en lugar de clases tradicionales (aunque ES6 añadió clases)
            </p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-700">
            <h3 className="text-gray-800 mb-2">Funciones de Primera Clase</h3>
            <p className="text-gray-600">
              Las funciones son objetos que pueden ser pasados como argumentos
            </p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-700">
            <h3 className="text-gray-800 mb-2">Asíncrono</h3>
            <p className="text-gray-600">
              Callbacks, Promises y async/await para operaciones no bloqueantes
            </p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-700">
            <h3 className="text-gray-800 mb-2">Ecosistema Gigante</h3>
            <p className="text-gray-600">
              npm es el mayor repositorio de paquetes de software del mundo
            </p>
          </div>
        </div>
      </section>

      {/* Uso Actual */}
      <section className="bg-white rounded-lg p-8 shadow-md mb-8">
        <h2 className="text-gray-800 mb-4">¿Para qué se usa?</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-teal-700 mt-1">•</span>
            <span><strong>Desarrollo web frontend:</strong> React, Vue, Angular para aplicaciones web interactivas</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-700 mt-1">•</span>
            <span><strong>Desarrollo web backend:</strong> Node.js, Express para servidores y APIs</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-700 mt-1">•</span>
            <span><strong>Aplicaciones móviles:</strong> React Native, Ionic para apps iOS y Android</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-700 mt-1">•</span>
            <span><strong>Aplicaciones de escritorio:</strong> Electron (VS Code, Slack, Discord están hechos con esto)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-700 mt-1">•</span>
            <span><strong>Videojuegos:</strong> Phaser, Three.js para juegos 2D y 3D en el navegador</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-700 mt-1">•</span>
            <span><strong>IoT:</strong> Johnny-Five para programar dispositivos electrónicos</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-700 mt-1">•</span>
            <span><strong>Machine Learning:</strong> TensorFlow.js para IA en el navegador</span>
          </li>
        </ul>
      </section>

      {/* Código de ejemplo */}
      <section className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-gray-800 mb-4">Ejemplo de Código</h2>
        <p className="text-gray-600 mb-4">
          Ejemplos que muestran características modernas de JavaScript:
        </p>
        <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
          <pre className="font-mono text-sm">
{`// Función tradicional vs Arrow function
function suma(a, b) {
    return a + b;
}

const sumaFlecha = (a, b) => a + b;

// Destructuring y template literals
const usuario = {
    nombre: "Ana",
    edad: 25,
    profesion: "Desarrolladora"
};

const { nombre, edad } = usuario;
console.log(\`\${nombre} tiene \${edad} años\`);

// Programación asíncrona con async/await
async function obtenerDatos() {
    try {
        const respuesta = await fetch('https://api.example.com/datos');
        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Manipulación del DOM
document.querySelector('#boton').addEventListener('click', () => {
    document.querySelector('#mensaje').textContent = '¡Hola, Mundo!';
});`}
          </pre>
        </div>
        <div className="mt-4 p-4 bg-teal-50 border-l-4 border-teal-500 rounded">
          <p className="text-gray-700">
            <strong>Nota:</strong> JavaScript moderno (ES6+) incluye características como arrow functions, 
            destructuring, template literals, y async/await que hacen el código más limpio y expresivo. 
            La capacidad de manipular el DOM (Document Object Model) es lo que permite la interactividad 
            en las páginas web.
          </p>
        </div>
      </section>
    </div>
  );
}

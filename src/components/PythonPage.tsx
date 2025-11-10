export function PythonPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-lg p-8 mb-8 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">Python</h1>
            <p className="text-slate-200">Simplicidad y legibilidad</p>
          </div>
          <div className="text-right">
            <div className="text-5xl opacity-80">1991</div>
          </div>
        </div>
      </div>

      {/* Historia */}
      <section className="bg-white rounded-lg p-8 shadow-md mb-8">
        <h2 className="text-gray-800 mb-4">Historia</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Creador:</strong> Guido van Rossum
          </p>
          <p>
            Python fue concebido a finales de los años 80 y su implementación comenzó en diciembre 
            de 1989 por Guido van Rossum en los Países Bajos. Van Rossum quería crear un lenguaje 
            que fuera fácil de leer y escribir, con una sintaxis limpia que priorizara la legibilidad 
            del código.
          </p>
          <p>
            El nombre "Python" viene del grupo de comedia británico Monty Python, del cual van Rossum 
            era fan. Desde su inicio, Python enfatizó la filosofía de que el código se lee más veces 
            de las que se escribe, por lo que debe ser claro y expresivo.
          </p>
          <p>
            Con los años, Python ha crecido hasta convertirse en uno de los lenguajes más populares 
            del mundo, especialmente en áreas como ciencia de datos, inteligencia artificial, 
            automatización y desarrollo web.
          </p>
        </div>
      </section>

      {/* Características */}
      <section className="bg-white rounded-lg p-8 shadow-md mb-8">
        <h2 className="text-gray-800 mb-4">Características Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-700">
            <h3 className="text-gray-800 mb-2">Sintaxis Simple</h3>
            <p className="text-gray-600">
              Código limpio y fácil de leer, usa indentación en lugar de llaves
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-700">
            <h3 className="text-gray-800 mb-2">Tipado Dinámico</h3>
            <p className="text-gray-600">
              No necesitas declarar tipos de variables explícitamente
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-700">
            <h3 className="text-gray-800 mb-2">Multiparadigma</h3>
            <p className="text-gray-600">
              Soporta programación orientada a objetos, funcional y procedural
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-700">
            <h3 className="text-gray-800 mb-2">Bibliotecas Extensas</h3>
            <p className="text-gray-600">
              Enorme ecosistema de paquetes para casi cualquier tarea
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-700">
            <h3 className="text-gray-800 mb-2">Interpretado</h3>
            <p className="text-gray-600">
              Ejecuta código línea por línea, facilitando la depuración
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-700">
            <h3 className="text-gray-800 mb-2">Multiplataforma</h3>
            <p className="text-gray-600">
              Funciona en Windows, Mac, Linux y muchos otros sistemas
            </p>
          </div>
        </div>
      </section>

      {/* Uso Actual */}
      <section className="bg-white rounded-lg p-8 shadow-md mb-8">
        <h2 className="text-gray-800 mb-4">¿Para qué se usa?</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-slate-600 mt-1">•</span>
            <span><strong>Ciencia de datos y análisis:</strong> Pandas, NumPy, Matplotlib para análisis de datos</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-slate-600 mt-1">•</span>
            <span><strong>Inteligencia artificial y machine learning:</strong> TensorFlow, PyTorch, scikit-learn</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-slate-600 mt-1">•</span>
            <span><strong>Desarrollo web:</strong> Django, Flask para crear aplicaciones web</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-slate-600 mt-1">•</span>
            <span><strong>Automatización y scripting:</strong> Automatizar tareas repetitivas</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-slate-600 mt-1">•</span>
            <span><strong>Desarrollo de videojuegos:</strong> Pygame para juegos 2D</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-slate-600 mt-1">•</span>
            <span><strong>Testing y DevOps:</strong> Automatización de pruebas y despliegues</span>
          </li>
        </ul>
      </section>

      {/* Código de ejemplo */}
      <section className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-gray-800 mb-4">Ejemplo de Código</h2>
        <p className="text-gray-600 mb-4">
          Un ejemplo que muestra la simplicidad de Python con listas y funciones:
        </p>
        <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
          <pre className="font-mono text-sm">
{`# Función para calcular números de Fibonacci
def fibonacci(n):
    """Retorna los primeros n números de Fibonacci"""
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib[:n]

# Uso de la función
numeros = fibonacci(10)
print(f"Los primeros 10 números de Fibonacci:")
print(numeros)

# List comprehension (característica única de Python)
cuadrados = [x**2 for x in range(1, 6)]
print(f"Cuadrados: {cuadrados}")`}
          </pre>
        </div>
        <div className="mt-4 p-4 bg-slate-50 border-l-4 border-slate-500 rounded">
          <p className="text-gray-700">
            <strong>Nota:</strong> Observe cómo Python usa indentación en lugar de llaves para 
            definir bloques de código, lo que hace que el código sea más limpio y legible. Las 
            comprehensions de listas son una característica única que permite crear listas de 
            forma concisa y expresiva.
          </p>
        </div>
      </section>
    </div>
  );
}

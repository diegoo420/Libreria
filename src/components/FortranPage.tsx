export function FortranPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg p-8 mb-8 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">FORTRAN</h1>
            <p className="text-gray-200">FORmula TRANslation</p>
          </div>
          <div className="text-right">
            <div className="text-5xl opacity-80">1957</div>
          </div>
        </div>
      </div>

      {/* Historia */}
      <section className="bg-white rounded-lg p-8 shadow-md mb-8">
        <h2 className="text-gray-800 mb-4">Historia</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Creador:</strong> John Backus y su equipo en IBM
          </p>
          <p>
            FORTRAN fue el primer lenguaje de programación de alto nivel ampliamente utilizado. 
            Desarrollado en IBM durante la década de 1950, revolucionó la programación científica 
            al permitir a los programadores escribir código que se parecía más a las fórmulas 
            matemáticas que al código máquina.
          </p>
          <p>
            Antes de FORTRAN, los programadores tenían que escribir en lenguaje ensamblador, 
            un proceso tedioso y propenso a errores. FORTRAN demostró que los lenguajes de alto 
            nivel podían generar código tan eficiente como el escrito manualmente.
          </p>
        </div>
      </section>

      {/* Características */}
      <section className="bg-white rounded-lg p-8 shadow-md mb-8">
        <h2 className="text-gray-800 mb-4">Características Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600">
            <h3 className="text-gray-800 mb-2">Cálculos Científicos</h3>
            <p className="text-gray-600">
              Diseñado específicamente para cálculos matemáticos y científicos complejos
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600">
            <h3 className="text-gray-800 mb-2">Alto Rendimiento</h3>
            <p className="text-gray-600">
              Optimizado para ejecutar operaciones numéricas de manera muy eficiente
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600">
            <h3 className="text-gray-800 mb-2">Arreglos Multidimensionales</h3>
            <p className="text-gray-600">
              Soporte nativo para matrices y arreglos, esencial para cálculos científicos
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600">
            <h3 className="text-gray-800 mb-2">Compilación</h3>
            <p className="text-gray-600">
              Primer compilador que traducía código de alto nivel a código máquina eficiente
            </p>
          </div>
        </div>
      </section>

      {/* Uso Actual */}
      <section className="bg-white rounded-lg p-8 shadow-md mb-8">
        <h2 className="text-gray-800 mb-4">¿Para qué se usa?</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-gray-600 mt-1">•</span>
            <span><strong>Simulaciones científicas:</strong> Modelado climático, física de partículas, astrofísica</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-600 mt-1">•</span>
            <span><strong>Ingeniería:</strong> Análisis de elementos finitos, dinámica de fluidos computacional</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-600 mt-1">•</span>
            <span><strong>Computación de alto rendimiento:</strong> Supercomputadoras y cálculos masivamente paralelos</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-600 mt-1">•</span>
            <span><strong>Investigación académica:</strong> Todavía se usa en muchas universidades para investigación numérica</span>
          </li>
        </ul>
      </section>

      {/* Código de ejemplo */}
      <section className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-gray-800 mb-4">Ejemplo de Código</h2>
        <p className="text-gray-600 mb-4">
          Un programa simple que calcula el área de un círculo:
        </p>
        <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
          <pre className="font-mono text-sm">
{`      PROGRAM AreaCirculo
      REAL radio, area, pi
      PARAMETER (pi = 3.14159)
      
      PRINT *, 'Ingrese el radio del círculo:'
      READ *, radio
      
      area = pi * radio * radio
      
      PRINT *, 'El área es:', area
      
      END PROGRAM AreaCirculo`}
          </pre>
        </div>
        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p className="text-gray-700">
            <strong>Nota:</strong> Observe cómo las instrucciones están estructuradas en columnas fijas, 
            una característica heredada de las tarjetas perforadas de la época.
          </p>
        </div>
      </section>
    </div>
  );
}

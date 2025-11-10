export function CPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-950 text-white rounded-lg p-8 mb-8 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">C</h1>
            <p className="text-blue-200">El lenguaje de los sistemas</p>
          </div>
          <div className="text-right">
            <div className="text-5xl opacity-80">1972</div>
          </div>
        </div>
      </div>

      {/* Historia */}
      <section className="bg-white rounded-lg p-8 shadow-md mb-8">
        <h2 className="text-gray-800 mb-4">Historia</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Creador:</strong> Dennis Ritchie en Bell Labs
          </p>
          <p>
            C fue desarrollado en los Laboratorios Bell como una evolución del lenguaje B. 
            Dennis Ritchie lo creó originalmente para reimplementar el sistema operativo UNIX, 
            que anteriormente estaba escrito en lenguaje ensamblador.
          </p>
          <p>
            La portabilidad de C fue revolucionaria: permitió que UNIX se ejecutara en diferentes 
            tipos de computadoras simplemente recompilando el código. Esto fue un cambio radical 
            de paradigma en una época donde el software estaba atado a hardware específico.
          </p>
          <p>
            C se convirtió en uno de los lenguajes más influyentes de la historia, inspirando 
            directamente a C++, C#, Java, JavaScript y muchos otros lenguajes modernos.
          </p>
        </div>
      </section>

      {/* Características */}
      <section className="bg-white rounded-lg p-8 shadow-md mb-8">
        <h2 className="text-gray-800 mb-4">Características Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700">
            <h3 className="text-gray-800 mb-2">Programación de Sistemas</h3>
            <p className="text-gray-600">
              Perfecto para desarrollar sistemas operativos, compiladores y software de bajo nivel
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700">
            <h3 className="text-gray-800 mb-2">Portabilidad</h3>
            <p className="text-gray-600">
              El código C puede compilarse para ejecutarse en casi cualquier plataforma
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700">
            <h3 className="text-gray-800 mb-2">Punteros</h3>
            <p className="text-gray-600">
              Acceso directo a la memoria, proporcionando un control total sobre el hardware
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700">
            <h3 className="text-gray-800 mb-2">Eficiencia</h3>
            <p className="text-gray-600">
              Produce código muy rápido y eficiente, cercano al rendimiento del ensamblador
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700">
            <h3 className="text-gray-800 mb-2">Bibliotecas Estándar</h3>
            <p className="text-gray-600">
              Conjunto rico de funciones para entrada/salida, manejo de strings y más
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700">
            <h3 className="text-gray-800 mb-2">Sintaxis Concisa</h3>
            <p className="text-gray-600">
              Sintaxis simple pero poderosa que inspiró a muchos lenguajes modernos
            </p>
          </div>
        </div>
      </section>

      {/* Uso Actual */}
      <section className="bg-white rounded-lg p-8 shadow-md mb-8">
        <h2 className="text-gray-800 mb-4">¿Para qué se usa?</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">•</span>
            <span><strong>Sistemas operativos:</strong> Linux, Windows, macOS tienen componentes importantes escritos en C</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">•</span>
            <span><strong>Sistemas embebidos:</strong> Dispositivos IoT, microcontroladores, automóviles</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">•</span>
            <span><strong>Compiladores e intérpretes:</strong> Muchos lenguajes están implementados en C</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">•</span>
            <span><strong>Bases de datos:</strong> MySQL, PostgreSQL, Redis y otros están escritos en C</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">•</span>
            <span><strong>Drivers de hardware:</strong> La mayoría de los controladores de dispositivos</span>
          </li>
        </ul>
      </section>

      {/* Código de ejemplo */}
      <section className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-gray-800 mb-4">Ejemplo de Código</h2>
        <p className="text-gray-600 mb-4">
          El clásico programa "Hola Mundo" y un ejemplo de uso de punteros:
        </p>
        <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
          <pre className="font-mono text-sm">
{`#include <stdio.h>

int main() {
    // Hola Mundo
    printf("Hola, Mundo!\\n");
    
    // Ejemplo con punteros
    int numero = 42;
    int *puntero = &numero;
    
    printf("Valor: %d\\n", numero);
    printf("Dirección: %p\\n", (void*)puntero);
    printf("Valor a través del puntero: %d\\n", *puntero);
    
    return 0;
}`}
          </pre>
        </div>
        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p className="text-gray-700">
            <strong>Nota:</strong> C introduce conceptos como punteros que permiten un control directo 
            sobre la memoria, algo fundamental en programación de sistemas pero que requiere cuidado 
            por parte del programador.
          </p>
        </div>
      </section>
    </div>
  );
}

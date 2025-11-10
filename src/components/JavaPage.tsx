export function JavaPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-lg p-8 mb-8 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">Java</h1>
            <p className="text-blue-200">Write once, run anywhere</p>
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
            <strong>Creador:</strong> James Gosling y su equipo en Sun Microsystems
          </p>
          <p>
            Java fue desarrollado originalmente como parte del proyecto "Green" en Sun Microsystems, 
            comenzando en 1991. Inicialmente se llamaba "Oak" (roble en inglés), pero el nombre fue 
            cambiado a Java por razones de marca registrada.
          </p>
          <p>
            El objetivo original era crear un lenguaje para programar dispositivos electrónicos de 
            consumo como televisores y tostadoras. Sin embargo, cuando explotó la web a mediados de 
            los 90, Java encontró su verdadero propósito: crear aplicaciones portables para internet.
          </p>
          <p>
            La promesa de Java era revolucionaria: "Write once, run anywhere" (escribe una vez, 
            ejecuta en cualquier lugar). Esto significa que el código Java puede ejecutarse en 
            cualquier dispositivo que tenga una Máquina Virtual Java (JVM), sin necesidad de 
            recompilarlo.
          </p>
          <p>
            Java se convirtió en uno de los lenguajes más utilizados del mundo, especialmente en 
            aplicaciones empresariales, aplicaciones Android y sistemas de backend.
          </p>
        </div>
      </section>

      {/* Características */}
      <section className="bg-white rounded-lg p-8 shadow-md mb-8">
        <h2 className="text-gray-800 mb-4">Características Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800">
            <h3 className="text-gray-800 mb-2">Orientado a Objetos</h3>
            <p className="text-gray-600">
              Todo en Java es un objeto (excepto tipos primitivos), promoviendo código modular
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800">
            <h3 className="text-gray-800 mb-2">Independencia de Plataforma</h3>
            <p className="text-gray-600">
              El bytecode de Java se ejecuta en la JVM, funcionando en cualquier sistema
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800">
            <h3 className="text-gray-800 mb-2">Recolección de Basura</h3>
            <p className="text-gray-600">
              Gestión automática de memoria, eliminando errores de punteros
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800">
            <h3 className="text-gray-800 mb-2">Multihilo</h3>
            <p className="text-gray-600">
              Soporte nativo para programación concurrente y paralela
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800">
            <h3 className="text-gray-800 mb-2">Seguridad</h3>
            <p className="text-gray-600">
              Sistema de seguridad robusto, ideal para aplicaciones en red
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800">
            <h3 className="text-gray-800 mb-2">Rico Ecosistema</h3>
            <p className="text-gray-600">
              Enormes bibliotecas estándar y frameworks como Spring, Hibernate
            </p>
          </div>
        </div>
      </section>

      {/* Uso Actual */}
      <section className="bg-white rounded-lg p-8 shadow-md mb-8">
        <h2 className="text-gray-800 mb-4">¿Para qué se usa?</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-blue-800 mt-1">•</span>
            <span><strong>Aplicaciones Android:</strong> El lenguaje principal para desarrollo de apps móviles Android</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-800 mt-1">•</span>
            <span><strong>Aplicaciones empresariales:</strong> Sistemas bancarios, ERP, CRM en grandes corporaciones</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-800 mt-1">•</span>
            <span><strong>Aplicaciones web:</strong> Backends con Spring Boot, JSP, Servlets</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-800 mt-1">•</span>
            <span><strong>Big Data:</strong> Hadoop, Apache Spark y otros frameworks están escritos en Java</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-800 mt-1">•</span>
            <span><strong>Sistemas distribuidos:</strong> Microservicios, aplicaciones en la nube</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-800 mt-1">•</span>
            <span><strong>Videojuegos:</strong> Minecraft está escrito en Java</span>
          </li>
        </ul>
      </section>

      {/* Código de ejemplo */}
      <section className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-gray-800 mb-4">Ejemplo de Código</h2>
        <p className="text-gray-600 mb-4">
          Un ejemplo de programación orientada a objetos con una clase simple:
        </p>
        <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
          <pre className="font-mono text-sm">
{`public class Libro {
    // Atributos privados (encapsulación)
    private String titulo;
    private String autor;
    private int año;
    
    // Constructor
    public Libro(String titulo, String autor, int año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
    }
    
    // Métodos getter
    public String getTitulo() {
        return titulo;
    }
    
    // Método para mostrar información
    public void mostrarInfo() {
        System.out.println("Título: " + titulo);
        System.out.println("Autor: " + autor);
        System.out.println("Año: " + año);
    }
    
    // Método main para ejecutar
    public static void main(String[] args) {
        Libro miLibro = new Libro(
            "Effective Java", 
            "Joshua Bloch", 
            2018
        );
        miLibro.mostrarInfo();
    }
}`}
          </pre>
        </div>
        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p className="text-gray-700">
            <strong>Nota:</strong> Java enfatiza la programación orientada a objetos con conceptos 
            como encapsulación (atributos privados), constructores, y métodos. Todo el código debe 
            estar dentro de una clase, y el método main() es el punto de entrada de la aplicación.
          </p>
        </div>
      </section>
    </div>
  );
}

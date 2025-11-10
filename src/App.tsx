import { useState } from 'react';
import { FortranPage } from './components/FortranPage';
import { CPage } from './components/CPage';
import { PythonPage } from './components/PythonPage';
import { JavaPage } from './components/JavaPage';
import { JavaScriptPage } from './components/JavaScriptPage';
import { Home } from 'lucide-react';

type Page = 'home' | 'fortran' | 'c' | 'python' | 'java' | 'javascript';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const languages = [
    { year: '1957', name: 'FORTRAN', page: 'fortran' as Page, color: '#4A5568' },
    { year: '1972', name: 'C', page: 'c' as Page, color: '#2C5282' },
    { year: '1991', name: 'Python', page: 'python' as Page, color: '#2D3748' },
    { year: '1995', name: 'Java', page: 'java' as Page, color: '#1A365D' },
    { year: '1995', name: 'JavaScript', page: 'javascript' as Page, color: '#234E52' },
  ];

  if (currentPage !== 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Home size={20} />
            <span>Volver a la Línea del Tiempo</span>
          </button>
        </nav>
        {currentPage === 'fortran' && <FortranPage />}
        {currentPage === 'c' && <CPage />}
        {currentPage === 'python' && <PythonPage />}
        {currentPage === 'java' && <JavaPage />}
        {currentPage === 'javascript' && <JavaScriptPage />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="text-center py-12 px-6">
        <h1 className="text-slate-800 mb-4">La Línea del Tiempo</h1>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Explora la historia y evolución de los lenguajes de programación más influyentes. 
          Desde FORTRAN en 1957 hasta los lenguajes modernos de 1995, cada uno ha dejado 
          una huella significativa en el desarrollo del software y la tecnología que usamos hoy.
        </p>
      </header>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-gray-300 via-blue-400 to-teal-400 transform -translate-y-1/2 hidden md:block" />
          
          {/* Timeline items */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {languages.map((lang, index) => (
              <div key={lang.name} className="flex flex-col items-center">
                {/* Circle node */}
                <div 
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-4 cursor-pointer transform transition-all hover:scale-110 hover:shadow-xl z-10"
                  style={{ backgroundColor: lang.color }}
                  onClick={() => setCurrentPage(lang.page)}
                >
                  <span className="text-white text-center px-2">
                    {lang.year}
                  </span>
                </div>
                
                {/* Language card */}
                <div 
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-blue-400 w-full"
                  onClick={() => setCurrentPage(lang.page)}
                >
                  <h3 className="text-center text-slate-800 mb-2">{lang.name}</h3>
                  <div className="text-center">
                    <button 
                      className="text-blue-600 hover:text-blue-800 underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPage(lang.page);
                      }}
                    >
                      Ver detalles →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info section */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-md max-w-4xl mx-auto">
          <h2 className="text-slate-800 mb-4">¿Por qué estudiar la historia de los lenguajes?</h2>
          <div className="space-y-4 text-slate-600">
            <p>
              Comprender la evolución de los lenguajes de programación nos ayuda a entender las 
              decisiones de diseño actuales y las tendencias futuras en el desarrollo de software.
            </p>
            <p>
              Cada lenguaje fue creado para resolver problemas específicos de su época, y estudiar 
              estos contextos históricos nos proporciona una perspectiva valiosa sobre cómo y por 
              qué programamos de la manera en que lo hacemos hoy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="text-slate-800 mb-2">Contexto Histórico</h4>
                <p className="text-slate-600">
                  Cada lenguaje refleja las necesidades tecnológicas de su época
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="text-slate-800 mb-2">Evolución Técnica</h4>
                <p className="text-slate-600">
                  Ver cómo han evolucionado los paradigmas de programación
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="text-slate-800 mb-2">Fundamentos</h4>
                <p className="text-slate-600">
                  Comprender los conceptos que todavía usamos hoy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

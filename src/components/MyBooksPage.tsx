import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, BookOpen, Calendar, X } from 'lucide-react';

interface BorrowedBook {
  id: number;
  title: string;
  author: string;
  category: string;
  borrowedBy: string;
  date: string;
}

interface MyBooksPageProps {
  userName: string;
  borrowedBooks: BorrowedBook[];
  onBack: () => void;
  onReturn: (bookId: number) => void;
}

export function MyBooksPage({ userName, borrowedBooks, onBack, onReturn }: MyBooksPageProps) {
  const userBooks = borrowedBooks.filter(book => book.borrowedBy === userName);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-gray-800">
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              onClick={onBack}
              className="border-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
            <div>
              <h1>Mis Libros Prestados</h1>
              <p className="text-gray-600">Tienes {userBooks.length} {userBooks.length === 1 ? 'libro prestado' : 'libros prestados'}</p>
            </div>
          </div>
        </div>

        {/* Borrowed Books List */}
        {userBooks.length === 0 ? (
          <Card className="p-12 border-2 border-dashed border-gray-300 text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h2 className="mb-2">No tienes libros prestados</h2>
            <p className="text-gray-600 mb-6">Comienza a explorar nuestra colección y pide prestado algunos libros</p>
            <Button onClick={onBack}>Explorar Libros</Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userBooks.map((book) => (
              <Card key={book.id} className="p-6 border-2 border-gray-300">
                <div className="flex flex-col h-full">
                  {/* Book Icon */}
                  <div className="w-full h-32 border-2 border-gray-300 rounded-lg flex items-center justify-center mb-4 bg-gray-50">
                    <BookOpen className="w-12 h-12 text-gray-400" />
                  </div>
                  
                  {/* Book Info */}
                  <div className="flex-1 mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="flex-1">{book.title}</h3>
                      {book.category && (
                        <Badge variant="outline" className="ml-2">
                          {book.category}
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600 mb-3">de {book.author}</p>
                    
                    {/* Borrowed Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 border border-gray-200 rounded">
                      <Calendar className="w-4 h-4" />
                      <span>Prestado el {book.date}</span>
                    </div>
                  </div>
                  
                  {/* Return Button */}
                  <Button 
                    variant="outline"
                    className="w-full border-2"
                    onClick={() => onReturn(book.id)}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Devolver Libro
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Summary Card */}
        {userBooks.length > 0 && (
          <Card className="mt-8 p-6 border-2 border-gray-300 bg-blue-50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="mb-1">Resumen de Préstamos</h3>
                <p className="text-gray-600">Recuerda devolver los libros cuando termines de leerlos</p>
              </div>
              <div className="text-center px-6 py-3 bg-white border-2 border-gray-300 rounded">
                <p className="text-3xl mb-1">{userBooks.length}</p>
                <p className="text-sm text-gray-600">Libros Activos</p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

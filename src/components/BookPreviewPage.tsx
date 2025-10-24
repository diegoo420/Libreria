import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, BookOpen, User, Calendar, Check, Star } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  available: boolean;
  description?: string;
  pages?: number;
  publishedYear?: number;
  rating?: number;
}

interface BookPreviewPageProps {
  book: Book;
  onBack: () => void;
  onBorrow: (book: { id: number; title: string; author: string; category?: string }) => void;
  isBorrowed: boolean;
}

export function BookPreviewPage({ book, onBack, onBorrow, isBorrowed }: BookPreviewPageProps) {
  const handleBorrow = () => {
    onBorrow({ id: book.id, title: book.title, author: book.author, category: book.category });
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={onBack}
          className="mb-6 border-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a la lista
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Book Cover */}
          <div className="md:col-span-1">
            <Card className="p-6 border-2 border-gray-300">
              <div className="w-full aspect-[3/4] border-2 border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 mb-4">
                <BookOpen className="w-20 h-20 text-gray-400" />
              </div>
              
              <Button 
                className="w-full"
                disabled={isBorrowed}
                onClick={handleBorrow}
                variant={isBorrowed ? 'outline' : 'default'}
              >
                {isBorrowed ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Ya prestado
                  </>
                ) : (
                  'Pedir Prestado'
                )}
              </Button>

              <div className="mt-4 pt-4 border-t-2 border-gray-300 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 border-2 border-gray-300 rounded flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-gray-600">Autor</p>
                    <p>{book.author}</p>
                  </div>
                </div>

                {book.publishedYear && (
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 border-2 border-gray-300 rounded flex items-center justify-center">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-gray-600">Publicado</p>
                      <p>{book.publishedYear}</p>
                    </div>
                  </div>
                )}

                {book.pages && (
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 border-2 border-gray-300 rounded flex items-center justify-center">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-gray-600">Páginas</p>
                      <p>{book.pages}</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Book Details */}
          <div className="md:col-span-2">
            <Card className="p-8 border-2 border-gray-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="mb-2">{book.title}</h1>
                  <p className="text-gray-600 mb-4">por {book.author}</p>
                </div>
                <Badge variant="outline" className="text-sm">
                  {book.category}
                </Badge>
              </div>

              {book.rating && (
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < book.rating! ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{book.rating}/5</span>
                </div>
              )}

              <div className="mb-6">
                <h2 className="mb-3">Descripción</h2>
                <p className="text-gray-700 leading-relaxed">
                  {book.description || 'No hay descripción disponible para este libro.'}
                </p>
              </div>

              <div className="border-t-2 border-gray-300 pt-6">
                <h2 className="mb-3">Detalles del Libro</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 border-2 border-gray-300 rounded">
                    <p className="text-sm text-gray-600 mb-1">Categoría</p>
                    <p>{book.category}</p>
                  </div>
                  <div className="p-4 bg-gray-50 border-2 border-gray-300 rounded">
                    <p className="text-sm text-gray-600 mb-1">Disponibilidad</p>
                    <p>{isBorrowed ? 'Ya prestado por ti' : 'Disponible'}</p>
                  </div>
                  {book.pages && (
                    <div className="p-4 bg-gray-50 border-2 border-gray-300 rounded">
                      <p className="text-sm text-gray-600 mb-1">Páginas</p>
                      <p>{book.pages}</p>
                    </div>
                  )}
                  {book.publishedYear && (
                    <div className="p-4 bg-gray-50 border-2 border-gray-300 rounded">
                      <p className="text-sm text-gray-600 mb-1">Año de Publicación</p>
                      <p>{book.publishedYear}</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

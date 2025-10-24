import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { LogOut, BookOpen, Search, Check, Library } from 'lucide-react';
import { Badge } from './ui/badge';

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

interface UserPageProps {
  userName: string;
  onBorrow: (book: { id: number; title: string; author: string; category?: string }) => void;
  onLogout: () => void;
  borrowedBooks: Array<{ id: number; title: string; author: string; category: string; borrowedBy: string; date: string }>;
  onViewBook: (book: Book) => void;
  onViewMyBooks: () => void;
}

const MOCK_BOOKS: Book[] = [
  { 
    id: 1, 
    title: 'The Great Gatsby', 
    author: 'F. Scott Fitzgerald', 
    category: 'Clásico', 
    available: true,
    description: 'Una historia de amor, ambición y tragedia ambientada en la era del jazz de los años 20. Nick Carraway narra la historia del misterioso millonario Jay Gatsby y su pasión por la bella Daisy Buchanan.',
    pages: 180,
    publishedYear: 1925,
    rating: 5
  },
  { 
    id: 3, 
    title: '1984', 
    author: 'George Orwell', 
    category: 'Distopía', 
    available: true,
    description: 'Una novela distópica que presenta una visión aterradora de un futuro totalitario donde el gobierno controla todos los aspectos de la vida, incluido el pensamiento y la verdad.',
    pages: 328,
    publishedYear: 1949,
    rating: 5
  },
  { 
    id: 4, 
    title: 'Pride and Prejudice', 
    author: 'Jane Austen', 
    category: 'Romance', 
    available: true,
    description: 'La historia de Elizabeth Bennet y el orgulloso Sr. Darcy, explorando temas de amor, reputación y clase social en la Inglaterra del siglo XIX.',
    pages: 432,
    publishedYear: 1813,
    rating: 4
  },
  { 
    id: 6, 
    title: 'Harry Potter', 
    author: 'J.K. Rowling', 
    category: 'Fantasía', 
    available: true,
    description: 'Un joven mago descubre su verdadera identidad y asiste a una escuela de magia, donde se enfrenta a fuerzas oscuras mientras encuentra amistad y aventura.',
    pages: 309,
    publishedYear: 1997,
    rating: 5
  },
  { 
    id: 7, 
    title: 'The Hobbit', 
    author: 'J.R.R. Tolkien', 
    category: 'Fantasía', 
    available: true,
    description: 'Bilbo Bolsón, un hobbit amante de la comodidad, se embarca en una aventura épica con un grupo de enanos para recuperar su tesoro del dragón Smaug.',
    pages: 310,
    publishedYear: 1937,
    rating: 5
  },
];

export function UserPage({ userName, onBorrow, onLogout, borrowedBooks, onViewBook, onViewMyBooks }: UserPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const userBorrowedIds = borrowedBooks
    .filter(b => b.borrowedBy === userName)
    .map(b => b.id);

  const filteredBooks = MOCK_BOOKS.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBorrow = (book: Book) => {
    onBorrow({ id: book.id, title: book.title, author: book.author, category: book.category });
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border-2 border-gray-800 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1>Buscar Libros</h1>
              <p className="text-gray-600">Bienvenido, {userName}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onViewMyBooks} className="border-2">
              <Library className="w-4 h-4 mr-2" />
              Mis Libros ({borrowedBooks.filter(b => b.borrowedBy === userName).length})
            </Button>
            <Button variant="outline" onClick={onLogout} className="border-2">
              <LogOut className="w-4 h-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <Card className="p-4 mb-8 border-2 border-gray-300">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar libros por título o autor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-2 border-gray-300"
            />
          </div>
        </Card>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => {
            const isBorrowed = userBorrowedIds.includes(book.id);
            
            return (
              <Card 
                key={book.id} 
                className="p-6 border-2 border-gray-300 cursor-pointer hover:border-gray-400 transition-colors"
                onClick={() => onViewBook(book)}
              >
                <div className="flex flex-col h-full">
                  {/* Book Icon */}
                  <div className="w-full h-32 border-2 border-gray-300 rounded-lg flex items-center justify-center mb-4 bg-gray-50">
                    <BookOpen className="w-12 h-12 text-gray-400" />
                  </div>
                  
                  {/* Book Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="flex-1">{book.title}</h3>
                      <Badge variant="outline" className="ml-2">
                        {book.category}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">de {book.author}</p>
                  </div>
                  
                  {/* Borrow Button */}
                  <Button 
                    className="w-full"
                    disabled={isBorrowed}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBorrow(book);
                    }}
                    variant={isBorrowed ? 'outline' : 'default'}
                  >
                    {isBorrowed ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Prestado
                      </>
                    ) : (
                      'Pedir Prestado'
                    )}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">No se encontró ningún libro</p>
          </div>
        )}
      </div>
    </div>
  );
}

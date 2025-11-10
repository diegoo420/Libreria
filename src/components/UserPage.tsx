import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import {
  LogOut,
  BookOpen,
  Search,
  Check,
  Library,
} from "lucide-react";
import { Badge } from "./ui/badge";

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
  onBorrow: (book: {
    id: number;
    title: string;
    author: string;
    category?: string;
  }) => void;
  onLogout: () => void;
  borrowedBooks: Array<{
    id: number;
    title: string;
    author: string;
    category: string;
    borrowedBy: string;
    date: string;
  }>;
  onViewBook: (book: Book) => void;
  onViewMyBooks: () => void;
}

const MOCK_BOOKS: Book[] = [
  {
    id: 1,
    title: "xxx xxxx xxxxxx",
    author: "x. xxxxx xxxxxxxxxx",
    category: "xxxxxxxx",
    available: true,
    description:
      "xxx xxxxxxxx xx xxxx, xxxxxxxx x xxxxxxxx xxxxxxxxx xx xx xxx xxx xxxx xx xxx xxxx xx. xxxx xxxxxxxx xxxxx xx xxxxxxxx xxx xxxxxxxxxx xxxxxxxxxxx xxx xxxxxx x xx xxxxxx xxx xx xxxxx xxxxx xxxxxxxx.",
    pages: "xxx",
    publishedYear: "xxx",
    rating: "x",
  },
  {
    id: 3,
    title: "xxxx",
    author: "xxxxxx xxxxxx",
    category: "xxxxxxxx",
    available: true,
    description:
      "xxx xxxxxx xxxxxxxxx xxx xxxxxxxx xxx xxxxxx xxxxxxxxxxx xx xx xxxxxx xxxxxxxxxxx xxxxx xx xxxxxxxx xxxxxxxx xxxxx xxx xxxxxxxx xx xx xxxx, xxxxxxxx xx xxxxxxxxxxx x xx xxxxxx.",
    pages: "xxx",
    publishedYear: "xxx",
    rating: "x",
  },
  {
    id: 4,
    title: "xxxxx xxx xxxxxxxxx",
    author: "xxxx xxxxxx",
    category: "xxxxxxx",
    available: true,
    description:
      "xx xxxxxxxx xx xxxxxxxxx xxxxxx x xx xxxxxxxxx xx. xxxxx, xxxxxxxxxx xxxxx xx xxxx, xxxxxxxxxx x xxxxx xxxxxx xx xx xxxxxxxxxx xxx xxxxx xxx.",
    pages: "xxx",
    publishedYear: "xxxx",
    rating: "x",
  },
  {
    id: 6,
    title: "xxxxx xxxxxx",
    author: "x.x. xxxxxxx",
    category: "xxxxxxxx",
    available: true,
    description:
      "xx xxxxx xxxx xxxxxxxxx xx xxxxxxxxx xxxxxxxxx x xxxxxxx x xxx xxxxxxx xx xxxxx, xxxxx xx xxxxxxxx x xxxxxxx xxxxxxx xxxxxxxx xxxxxxxxx xxxxxxx x xxxxxxxxx.",
    pages: "xxx",
    publishedYear: "xxxx",
    rating: "x",
  },
  {
    id: 7,
    title: "xxx xxxxxx",
    author: "x.x.x. xxxxxxx",
    category: "xxxxxxxx",
    available: true,
    description:
      "xxxxx xxxxxx, xx xxxxxx xxxxxxx xx xx xxxxxxxxx, xx xxxxxxx xx xxx xxxxxxxxx xxxxx xxx xx xxxxx xx xxxxxx xxxx xxxxxxxxx xx xxxxxx xxx xxxxxx xxxxx.",
    pages: "xxx",
    publishedYear: "xxx",
    rating: "x",
  },
];

export function UserPage({
  userName,
  onBorrow,
  onLogout,
  borrowedBooks,
  onViewBook,
  onViewMyBooks,
}: UserPageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const userBorrowedIds = borrowedBooks
    .filter((b) => b.borrowedBy === userName)
    .map((b) => b.id);

  const filteredBooks = MOCK_BOOKS.filter(
    (book) =>
      book.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      book.author
        .toLowerCase()
        .includes(searchQuery.toLowerCase()),
  );

  const handleBorrow = (book: Book) => {
    onBorrow({
      id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    });
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
              <p className="text-gray-600">
                Bienvenido, {userName}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={onViewMyBooks}
              className="border-2"
            >
              <Library className="w-4 h-4 mr-2" />
              Mis Libros (
              {
                borrowedBooks.filter(
                  (b) => b.borrowedBy === userName,
                ).length
              }
              )
            </Button>
            <Button
              variant="outline"
              onClick={onLogout}
              className="border-2"
            >
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
              placeholder="xxxxxx xxxxxx xxx xxxxxx x xxxxx..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-2 border-gray-300"
            />
          </div>
        </Card>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => {
            const isBorrowed = userBorrowedIds.includes(
              book.id,
            );

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
                    <p className="text-gray-600 mb-4">
                      de {book.author}
                    </p>
                  </div>

                  {/* Borrow Button */}
                  <Button
                    className="w-full"
                    disabled={isBorrowed}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBorrow(book);
                    }}
                    variant={isBorrowed ? "outline" : "default"}
                  >
                    {isBorrowed ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Prestado
                      </>
                    ) : (
                      "Pedir Prestado"
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
            <p className="text-gray-600">
              No se encontró ningún libro
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
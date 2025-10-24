import { useState } from 'react';
import { AdminPage } from './components/AdminPage';
import { AuthPage } from './components/AuthPage';
import { UserPage } from './components/UserPage';
import { BookPreviewPage } from './components/BookPreviewPage';
import { MyBooksPage } from './components/MyBooksPage';

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

export default function App() {
  const [currentPage, setCurrentPage] = useState<'auth' | 'admin' | 'user' | 'bookPreview' | 'myBooks'>('auth');
  const [currentUser, setCurrentUser] = useState<{ name: string; role: 'admin' | 'user' } | null>(null);
  const [borrowedBooks, setBorrowedBooks] = useState<Array<{ id: number; title: string; author: string; category: string; borrowedBy: string; date: string }>>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleLogin = (username: string, password: string) => {
    // Mock login logic
    if (username === 'admin' && password === 'admin') {
      setCurrentUser({ name: 'Admin User', role: 'admin' });
      setCurrentPage('admin');
    } else {
      setCurrentUser({ name: username, role: 'user' });
      setCurrentPage('user');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('auth');
  };

  const handleBorrow = (book: { id: number; title: string; author: string; category?: string }) => {
    if (currentUser) {
      const newBorrowing = {
        ...book,
        category: book.category || 'General',
        borrowedBy: currentUser.name,
        date: new Date().toLocaleDateString()
      };
      setBorrowedBooks([...borrowedBooks, newBorrowing]);
    }
  };

  const handleViewBook = (book: Book) => {
    setSelectedBook(book);
    setCurrentPage('bookPreview');
  };

  const handleBackToUserPage = () => {
    setCurrentPage('user');
    setSelectedBook(null);
  };

  const handleViewMyBooks = () => {
    setCurrentPage('myBooks');
  };

  const handleReturnBook = (bookId: number) => {
    if (currentUser) {
      setBorrowedBooks(borrowedBooks.filter(
        book => !(book.id === bookId && book.borrowedBy === currentUser.name)
      ));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {currentPage === 'auth' && (
        <AuthPage onLogin={handleLogin} />
      )}
      {currentPage === 'admin' && currentUser?.role === 'admin' && (
        <AdminPage borrowedBooks={borrowedBooks} onLogout={handleLogout} />
      )}
      {currentPage === 'user' && currentUser?.role === 'user' && (
        <UserPage 
          userName={currentUser.name} 
          onBorrow={handleBorrow} 
          onLogout={handleLogout}
          borrowedBooks={borrowedBooks}
          onViewBook={handleViewBook}
          onViewMyBooks={handleViewMyBooks}
        />
      )}
      {currentPage === 'bookPreview' && currentUser?.role === 'user' && selectedBook && (
        <BookPreviewPage
          book={selectedBook}
          onBack={handleBackToUserPage}
          onBorrow={handleBorrow}
          isBorrowed={borrowedBooks.some(b => b.id === selectedBook.id && b.borrowedBy === currentUser.name)}
        />
      )}
      {currentPage === 'myBooks' && currentUser?.role === 'user' && (
        <MyBooksPage
          userName={currentUser.name}
          borrowedBooks={borrowedBooks}
          onBack={handleBackToUserPage}
          onReturn={handleReturnBook}
        />
      )}
    </div>
  );
}

import { Button } from './ui/button';
import { Card } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { LogOut, BookOpen, Users, TrendingUp } from 'lucide-react';

interface BorrowedBook {
  id: number;
  title: string;
  author: string;
  category: string;
  borrowedBy: string;
  date: string;
}

interface AdminPageProps {
  borrowedBooks: BorrowedBook[];
  onLogout: () => void;
}

export function AdminPage({ borrowedBooks, onLogout }: AdminPageProps) {
  const totalBorrowed = borrowedBooks.length;
  const uniqueUsers = new Set(borrowedBooks.map(b => b.borrowedBy)).size;

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
              <h1>Página de Administrador</h1>
              <p className="text-gray-600">Sistema de Gestion de Libreria</p>
            </div>
          </div>
          <Button variant="outline" onClick={onLogout} className="border-2">
            <LogOut className="w-4 h-4 mr-2" />
            Salir
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border-2 border-gray-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 mb-2">Total de libros prestados</p>
                <p className="text-4xl">{totalBorrowed === 0 ? 'x' : totalBorrowed}</p>
              </div>
              <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-gray-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 mb-2">Usuarios Activos</p>
                <p className="text-4xl">{uniqueUsers === 0 ? 'x' : uniqueUsers}</p>
              </div>
              <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-gray-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 mb-2">Esta Semana</p>
                <p className="text-4xl">{totalBorrowed === 0 ? 'x' : totalBorrowed}</p>
              </div>
              <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
          </Card>
        </div>

        {/* Borrowed Books Table */}
        <Card className="p-6 border-2 border-gray-300">
          <h2 className="mb-6">Prestamos Recientes</h2>
          {borrowedBooks.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Ningun prestamo aun</p>
            </div>
          ) : (
            <div className="border-2 border-gray-300 rounded">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Titulo del libro</TableHead>
                    <TableHead>Autor</TableHead>
                    <TableHead>Prestado a</TableHead>
                    <TableHead>Fecha</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {borrowedBooks.map((book, index) => (
                    <TableRow key={index}>
                      <TableCell>{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>{book.borrowedBy}</TableCell>
                      <TableCell>{book.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { BookOpen } from 'lucide-react';

interface AuthPageProps {
  onLogin: (username: string, password: string) => void;
}

export function AuthPage({ onLogin }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  
  // Login fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Register fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      if (username && password) {
        onLogin(username, password);
      }
    } else {
      if (registerUsername && registerPassword && registerPassword === confirmPassword && acceptTerms) {
        onLogin(registerUsername, registerPassword);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 border-2 border-gray-300">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 border-2 border-gray-800 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-center">Gestion de biblioteca</h1>
          <p className="text-gray-600 text-center mt-2">Pide prestado libros de tu biblioteca cercana</p>
        </div>

        <div className="flex gap-2 mb-6">
          <Button
            variant={isLogin ? 'default' : 'outline'}
            className="flex-1"
            onClick={() => setIsLogin(true)}
          >
            Inicia sesion
          </Button>
          <Button
            variant={!isLogin ? 'default' : 'outline'}
            className="flex-1"
            onClick={() => setIsLogin(false)}
          >
            Registrarse
          </Button>
        </div>

        {isLogin ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Usuario</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="xxxxxxx xx xxxxxxx"
                className="border-2 border-gray-300"
              />
            </div>
            <div>
              <label className="block mb-2">Contraseña</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="xxxxxxx xxx xxxxxxxxxx"
                className="border-2 border-gray-300"
              />
            </div>
            <Button type="submit" className="w-full">
              Inicia Sesion
            </Button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Nombre Completo</label>
              <Input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="xxxxxxx xx xxxxxx xxxxxxxx"
                className="border-2 border-gray-300"
              />
            </div>
            <div>
              <label className="block mb-2">Correo Electrónico</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="xxxxxxxxx@xxxxxxx.xxx"
                className="border-2 border-gray-300"
              />
            </div>
            <div>
              <label className="block mb-2">Usuario</label>
              <Input
                type="text"
                value={registerUsername}
                onChange={(e) => setRegisterUsername(e.target.value)}
                placeholder="xxxxx xx xxxxxx xx xxxxxxx"
                className="border-2 border-gray-300"
              />
            </div>
            <div>
              <label className="block mb-2">Contraseña</label>
              <Input
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                placeholder="xxxx xxx xxxxxxxxxx"
                className="border-2 border-gray-300"
              />
            </div>
            <div>
              <label className="block mb-2">Confirmar Contraseña</label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="xxxxxxxx xx xxxxxxxxxx"
                className="border-2 border-gray-300"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              />
              <label htmlFor="terms" className="text-sm cursor-pointer">
                Acepto los términos y condiciones
              </label>
            </div>
            <Button type="submit" className="w-full">
              Registrarse
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}

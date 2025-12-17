import Link from "next/link";
import { useAuthStore } from "../store/authStore";

export function Header() {
  const { token, logout } = useAuthStore();

  return (
    <header className="bg-blue-600 text-white flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold">Sistema de Gestão</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/products">Produtos</Link>
        <Link href="/orders">Pedidos</Link>
        {!token ? (
          <Link href="/login" className="text-yellow-300 font-semibold">
            Login
          </Link>
        ) : (
          <button onClick={logout} className="text-red-300 hover:text-red-500">
            Sair
          </button>
        )}
      </nav>
    </header>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-16">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Sistema de Gestão</h1>
      <p className="text-gray-600 mb-8">
        Utilize o menu acima ou os atalhos abaixo para gerenciar produtos e pedidos.
      </p>
      <div className="flex justify-center gap-6">
        <Link
          href="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700"
        >
          Gerenciar Produtos
        </Link>
        <Link
          href="/orders"
          className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700"
        >
          Gerenciar Pedidos
        </Link>
      </div>
    </div>
  );
}

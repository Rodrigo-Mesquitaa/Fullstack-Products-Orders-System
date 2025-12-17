import Link from "next/link";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-all">
      <h2 className="text-lg font-semibold">{product.nome}</h2>
      <p className="text-sm text-gray-600">{product.categoria}</p>
      <p className="text-green-700 font-bold mt-2">R$ {product.preco.toFixed(2)}</p>
      <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.descricao}</p>
      <div className="flex justify-between items-center mt-3">
        <Link
          href={`/products/${product.id}`}
          className="text-blue-600 text-sm hover:underline"
        >
          Ver detalhes
        </Link>
        <p className="text-xs text-gray-500">Estoque: {product.quantidade_estoque}</p>
      </div>
    </div>
  );
}

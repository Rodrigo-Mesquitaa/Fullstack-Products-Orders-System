import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Product } from "../../types";
import { ProductService } from "../../services/productService";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      ProductService.getById(Number(id))
        .then(setProduct)
        .catch(() => setProduct(null));
    }
  }, [id]);

  if (!product) return <p>Carregando...</p>;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-2">{product.nome}</h1>
      <p className="text-gray-600 mb-2">Categoria: {product.categoria}</p>
      <p className="text-green-700 font-semibold mb-2">
        Preço: R$ {product.preco.toFixed(2)}
      </p>
      <p className="text-gray-700">{product.descricao}</p>
      <p className="text-gray-500 mt-2">Estoque: {product.quantidade_estoque}</p>
    </div>
  );
}

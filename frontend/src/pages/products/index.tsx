import { useEffect } from "react";
import { useProductStore } from "../../store/productStore";
import { ProductService } from "../../services/productService";
import { ProductCard } from "../../components/ProductCard";
import Link from "next/link";

export default function ProductsPage() {
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    ProductService.getAll().then(setProducts).catch(console.error);
  }, [setProducts]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Produtos</h1>
        <Link
          href="/products/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Novo Produto
        </Link>
      </div>

      {products.length === 0 ? (
        <p className="text-gray-600">Nenhum produto cadastrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

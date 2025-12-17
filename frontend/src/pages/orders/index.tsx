import { useEffect } from "react";
import { useOrderStore } from "../../store/orderStore";
import { OrderService } from "../../services/orderService";
import { OrderCard } from "../../components/OrderCard"; 
import Link from "next/link";

export default function OrdersPage() {
  const { orders, setOrders } = useOrderStore();

  useEffect(() => {
    OrderService.getAll().then(setOrders).catch(console.error);
  }, [setOrders]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Pedidos</h1>
        <Link
          href="/orders/create"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Novo Pedido
        </Link>
      </div>

      {orders.length === 0 ? (
        <p className="text-gray-600">Nenhum pedido encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}

import { Order } from "../types";

interface OrderCardProps {
  order: Order;
}

export function OrderCard({ order }: OrderCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-all">
      <h3 className="font-semibold text-lg mb-2">Pedido #{order.id}</h3>
      <p>Status: <span className="font-medium">{order.status}</span></p>
      <p>Total: <span className="text-green-700 font-semibold">R$ {order.total_pedido.toFixed(2)}</span></p>
      <p className="text-sm text-gray-500 mt-2">
        Criado em: {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "—"}
      </p>
    </div>
  );
}

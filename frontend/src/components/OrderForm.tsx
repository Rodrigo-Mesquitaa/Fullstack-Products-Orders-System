import { useState } from "react";
import { OrderService } from "../services/orderService";
import { useOrderStore } from "../store/orderStore";
import { Order } from "../types";

export function OrderForm() {
  const [form, setForm] = useState<Partial<Order>>({
    total_pedido: 0,
    status: "Pendente",
    produtos: [],
  });

  const addOrder = useOrderStore((s) => s.addOrder);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const novoPedido = await OrderService.create(form as Order);
    addOrder(novoPedido);
    setForm({ total_pedido: 0, status: "Pendente", produtos: [] });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 mb-6">
      <h3 className="font-semibold text-lg mb-4">Novo Pedido</h3>

      <input
        type="number"
        placeholder="Total do pedido"
        value={form.total_pedido ?? 0}
        onChange={(e) => setForm({ ...form, total_pedido: parseFloat(e.target.value) })}
        className="border p-2 rounded w-full mb-4"
      />

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value as Order["status"] })}
        className="border p-2 rounded w-full mb-4"
      >
        <option value="Pendente">Pendente</option>
        <option value="Concluído">Concluído</option>
        <option value="Cancelado">Cancelado</option>
      </select>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Criar Pedido
      </button>
    </form>
  );
}

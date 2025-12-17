import { OrderForm } from "../../components/OrderForm";

export default function CreateOrderPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Novo Pedido</h1>
      <OrderForm />
    </div>
  );
}

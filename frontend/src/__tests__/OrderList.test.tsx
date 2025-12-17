import { render, screen } from "@testing-library/react";
import { OrderCard } from "../components/OrderCard";    
import { Order } from "../types";

describe("OrderCard Component", () => {
  const mockOrder: Order = {
    id: 100,
    total_pedido: 999.99,
    status: "Concluído",
    produtos: [],
    createdAt: "2025-12-16T00:00:00Z",
  };

  it("deve exibir o ID, status e total corretamente", () => {
    render(<OrderCard order={mockOrder} />);
    expect(screen.getByText(/Pedido #100/)).toBeInTheDocument();
    expect(screen.getByText(/Concluído/)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 999.99/)).toBeInTheDocument();
  });
});

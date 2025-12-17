import { render, screen } from "@testing-library/react";
import { ProductCard } from "../components/ProductCard";
import { Product } from "../types";

describe("ProductCard Component", () => {
  const mockProduct: Product = {
    id: 1,
    nome: "Teclado Mecânico",
    categoria: "Periféricos",
    preco: 350.5,
    descricao: "Teclado gamer RGB",
    quantidade_estoque: 10,
  };

  it("deve renderizar nome, categoria e preço", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Teclado Mecânico")).toBeInTheDocument();
    expect(screen.getByText("Periféricos")).toBeInTheDocument();
    expect(screen.getByText("R$ 350.50")).toBeInTheDocument();
  });
});

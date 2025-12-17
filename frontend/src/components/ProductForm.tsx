import { useState } from "react";
import { useProductStore } from "../store/productStore";
import { ProductService } from "../services/productService";
import { Product } from "../types";

export function ProductForm() {
  const [form, setForm] = useState<Product>({
    nome: "",
    categoria: "",
    preco: 0,
    descricao: "",
    quantidade_estoque: 0,
  });

  const addProduct = useProductStore((s) => s.addProduct);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nome || !form.categoria) return alert("Preencha todos os campos obrigatórios.");
    const novoProduto = await ProductService.create(form);
    addProduct(novoProduto);
    setForm({ nome: "", categoria: "", preco: 0, descricao: "", quantidade_estoque: 0 });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 mb-6">
      <h3 className="font-semibold text-lg mb-4">Cadastrar Produto</h3>

      <div className="grid grid-cols-2 gap-4">
        <input
          placeholder="Nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          placeholder="Categoria"
          value={form.categoria}
          onChange={(e) => setForm({ ...form, categoria: e.target.value })}
          className="border p-2 rounded"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <input
          type="number"
          placeholder="Preço"
          value={form.preco}
          onChange={(e) => setForm({ ...form, preco: parseFloat(e.target.value) })}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Quantidade em estoque"
          value={form.quantidade_estoque}
          onChange={(e) =>
            setForm({ ...form, quantidade_estoque: parseInt(e.target.value) })
          }
          className="border p-2 rounded"
        />
      </div>

      <textarea
        placeholder="Descrição"
        value={form.descricao}
        onChange={(e) => setForm({ ...form, descricao: e.target.value })}
        className="border p-2 rounded w-full mt-4"
      />

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Salvar Produto
      </button>
    </form>
  );
}

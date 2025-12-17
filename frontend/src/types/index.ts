export interface Product {
  id?: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  quantidade_estoque: number;
}

export interface Order {
  id?: number;
  produtos: Product[];
  total_pedido: number;
  status: 'Pendente' | 'Concluído' | 'Cancelado';
  createdAt?: string;
}

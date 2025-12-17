import { apiRequest } from "./api";
import { Product } from "../types";

export const ProductService = {
  getAll: (): Promise<Product[]> => apiRequest("/products"),
  getById: (id: number): Promise<Product> => apiRequest(`/products/${id}`),
  create: (data: Product): Promise<Product> => apiRequest("/products", "POST", data),
  update: (id: number, data: Partial<Product>): Promise<Product> => apiRequest(`/products/${id}`, "PUT", data),
  delete: (id: number): Promise<void> => apiRequest(`/products/${id}`, "DELETE"),
};

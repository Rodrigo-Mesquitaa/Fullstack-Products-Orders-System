import { create } from "zustand";
import { Product } from "../types";

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;
  addProduct: (p: Product) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  addProduct: (p) => set((state) => ({ products: [...state.products, p] })),
}));

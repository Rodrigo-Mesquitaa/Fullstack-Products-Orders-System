import { create } from "zustand";
import { Order } from "../types";

interface OrderState {
  orders: Order[];
  setOrders: (orders: Order[]) => void;
  addOrder: (o: Order) => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  orders: [],
  setOrders: (orders) => set({ orders }),
  addOrder: (o) => set((state) => ({ orders: [...state.orders, o] })),
}));

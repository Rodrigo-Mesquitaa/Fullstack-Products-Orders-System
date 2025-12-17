import { apiRequest } from "./api";
import { Order } from "../types";

export const OrderService = {
  getAll: (): Promise<Order[]> => apiRequest("/orders"),
  create: (data: Order): Promise<Order> => apiRequest("/orders", "POST", data),
};

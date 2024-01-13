// Types
import { IPizza } from './pizza';

export interface IOrderItem {
  product: IPizza;
  quantity: number;
  totalPrice: number;
}

export interface TOrderHistoryItem {
  id: string;
  title: string;
  amount: number;
  totalPrice: number;
  date: string;
}

// Types
import { IPizza } from './pizza';

export interface IOrderItem {
  product: IPizza;
  quantity: number;
  totalPrice: number;
}

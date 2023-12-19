// Packages
import { makeAutoObservable } from 'mobx';
// Types
import { IPizza } from '../types/pizza';
import { IOrderItem } from '../types/order';

class OrderStore {
  order: IOrderItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get totalCount() {
    return this.order.reduce((acc, item) => acc + item.quantity, 0);
  }

  get totalPrice() {
    return this.order.reduce((acc, item) => acc + item.totalPrice, 0);
  }

  public addProductToBasket = (product: IPizza): void => {
    const orderIdx = this.order.findIndex(item => item.product.id === product.id);

    if (orderIdx === -1) {
      this.order.push({ product, quantity: 1, totalPrice: product.currentPrice });
    } else {
      this.order[orderIdx].quantity += 1;
      this.order[orderIdx].totalPrice += this.order[orderIdx].product.currentPrice;
    }
  };

  public removeProductFromBasket = (id: number): void => {
    this.order = this.order.filter(({ product }) => product.id !== id);
  };

  public incrementProductQuantity = (id: number): void => {
    const orderItem = this.order.find(item => item.product.id === id);

    if (orderItem) {
      orderItem.quantity += 1;
      orderItem.totalPrice += orderItem.product.currentPrice;
    }
  };

  public decrementProductQuantity = (id: number): void => {
    const orderItem = this.order.find(item => item.product.id === id);

    if (orderItem) {
      orderItem.quantity -= 1;
      orderItem.totalPrice -= orderItem.product.currentPrice;
    }
  };

  public checkoutOrder = (): void => {
    this.order = [];
  };
}

export default OrderStore;

// Navigation
import { Routes } from '../navigation/routes';
// Types
import { IPizza } from './pizza';

export type TStackNavigationProps = {
  [Routes.Welcome]: undefined;
  [Routes.Main]: undefined;
  [Routes.PizzaList]: undefined;
  [Routes.Pizza]: IPizza;
  [Routes.Promotions]: undefined;
  [Routes.History]: undefined;
  [Routes.Orders]: undefined;
  [Routes.Cart]: undefined;
  [Routes.Checkout]: undefined;
};

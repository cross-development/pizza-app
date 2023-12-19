// Navigation
import { Routes } from '../navigation/routes';
// Types
import { IPizza } from './pizza';

export type TStackNavigationProps = {
  [Routes.PizzaList]: undefined;
  [Routes.Pizza]: IPizza;
  [Routes.Promotions]: undefined;
  [Routes.Profile]: undefined;
  [Routes.Cart]: undefined;
  [Routes.Checkout]: undefined;
};

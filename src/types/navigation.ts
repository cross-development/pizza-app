import { Routes } from '../navigation/routes';
import { IPizza } from './pizza';

export type TStackNavigationProps = {
  [Routes.PizzaList]: undefined;
  [Routes.Pizza]: IPizza;
  [Routes.Sale]: undefined;
  [Routes.Profile]: undefined;
};

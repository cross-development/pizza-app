// Packages
import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import HomeScreen from '../screens/HomeScreen';
import PizzaScreen from '../screens/PizzaScreen';
import PromotionsScreen from '../screens/PromotionsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import BasketScreen from '../screens/BasketScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
// Navigation
import { Routes } from './routes';
// Types
import { TStackNavigationProps } from '../types/navigation';

const Stack = createNativeStackNavigator<TStackNavigationProps>();

export const HomeStack: FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.PizzaList}
      component={HomeScreen}
      options={{ title: 'Pizza' }}
    />

    <Stack.Screen
      name={Routes.Pizza}
      component={PizzaScreen}
      options={({ route }) => ({
        headerTitle: `Pizza ${route.params.title}`,
        headerShadowVisible: false,
      })}
    />

    <Stack.Screen
      name={Routes.Promotions}
      component={PromotionsScreen}
      options={{ presentation: 'modal' }}
    />
  </Stack.Navigator>
);

export const HistoryStack: FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.Orders}
      component={HistoryScreen}
      options={{ title: 'Order History' }}
    />
  </Stack.Navigator>
);

export const BasketStack: FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.Cart}
      component={BasketScreen}
      options={{ title: 'Basket' }}
    />

    <Stack.Screen
      name={Routes.Checkout}
      component={CheckoutScreen}
      options={{ headerBackVisible: false }}
    />
  </Stack.Navigator>
);

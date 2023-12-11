// Packages
import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import HomeScreen from '../screens/HomeScreen';
import PizzaScreen from '../screens/PizzaScreen';
import SaleScreen from '../screens/SaleScreen';
import SettingsScreen from '../screens/SettingsScreen';
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
    />

    <Stack.Screen
      name={Routes.Pizza}
      component={PizzaScreen}
    />

    <Stack.Screen
      name={Routes.Sale}
      component={SaleScreen}
      options={{ presentation: 'modal' }}
    />
  </Stack.Navigator>
);

export const SettingsStack: FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.Profile}
      component={SettingsScreen}
      options={{ title: 'Settings' }}
    />
  </Stack.Navigator>
);

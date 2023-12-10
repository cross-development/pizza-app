// Packages
import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import HomeScreen from '../screens/HomeScreen';
import PizzaScreen from '../screens/PizzaScreen';
import WishListScreen from '../screens/WishListScreen';
import SettingsScreen from '../screens/SettingsScreen';
// Navigation
import { Routes } from './routes';

const Stack = createNativeStackNavigator();

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
      name={Routes.WishList}
      component={WishListScreen}
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

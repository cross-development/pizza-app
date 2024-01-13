// Packages
import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import WelcomeScreen from '../screens/WelcomeScreen';
// Navigation
import { Routes } from './routes';
import MainNavigation from './MainNavigation';
// Types
import { TStackNavigationProps } from '../types/navigation';

const Stack = createNativeStackNavigator<TStackNavigationProps>();

const MainStack: FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.Welcome}
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name={Routes.Main}
      component={MainNavigation}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default MainStack;

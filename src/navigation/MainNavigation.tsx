// Packages
import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
// Components
import CartIconWithBadge from '../components/common/CartIconWithBadge';
// Navigation
import { Routes } from './routes';
import { BasketStack, HomeStack, SettingsStack } from './StackNavigation';
// Theme
import { colors } from '../theme/palette';

const Tab = createBottomTabNavigator();

const NavigationContent: FC = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name={Routes.Home}
      component={HomeStack}
      options={{
        title: 'Menu',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            size={24}
            name="pizza-outline"
            color={focused ? colors.blue.main : colors.grey.dark}
          />
        ),
      }}
    />

    <Tab.Screen
      name={Routes.Basket}
      component={BasketStack}
      options={{
        tabBarIcon: ({ focused }) => (
          <CartIconWithBadge
            size={24}
            name="cart-outline"
            color={focused ? colors.blue.main : colors.grey.dark}
          />
        ),
      }}
    />

    <Tab.Screen
      name={Routes.Settings}
      component={SettingsStack}
      options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons
            size={24}
            name="settings-outline"
            color={focused ? colors.blue.main : colors.grey.dark}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

NavigationContent.displayName = 'NavigationContent';

export default NavigationContent;

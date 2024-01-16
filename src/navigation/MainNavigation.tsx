// Packages
import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// Components
import CartIconWithBadge from '../components/common/CartIconWithBadge';
// Navigation
import { Routes } from './routes';
import { BasketStack, HomeStack, HistoryStack } from './StackNavigation';
// Theme
import { colors } from '../theme/palette';

const Tab = createBottomTabNavigator();

const NavigationContent: FC = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name={Routes.Home}
      component={HomeStack}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => (
          <Ionicons
            size={26}
            name="pizza-outline"
            color={focused ? colors.red.main : colors.grey.dark}
          />
        ),
      }}
    />

    <Tab.Screen
      name={Routes.Basket}
      component={BasketStack}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => (
          <CartIconWithBadge
            size={26}
            name="cart-outline"
            color={focused ? colors.red.main : colors.grey.dark}
          />
        ),
      }}
    />

    <Tab.Screen
      name={Routes.History}
      component={HistoryStack}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name="history"
            size={26}
            color={focused ? colors.red.main : colors.grey.dark}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

NavigationContent.displayName = 'NavigationContent';

export default NavigationContent;

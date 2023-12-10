// Packages
import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
// Navigation
import { Routes } from './routes';
import { HomeStack, SettingsStack } from './StackNavigation';
// Theme
import { colors } from '../theme/palette';

const Tab = createBottomTabNavigator();

const NavigationContent: FC = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name={Routes.Home}
      component={HomeStack}
      options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="pizza-outline"
            size={24}
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
            name="settings-outline"
            size={24}
            color={focused ? colors.blue.main : colors.grey.dark}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

NavigationContent.displayName = 'NavigationContent';

export default NavigationContent;

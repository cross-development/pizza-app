// Packages
import { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// Navigation
import { Routes } from '../navigation/routes';
// Types
import { TStackNavigationProps } from '../types/navigation';

type Props = NativeStackScreenProps<TStackNavigationProps, Routes.Pizza>;

const PizzaScreen: FC<Props> = ({ route }) => (
  <View style={styles.container}>
    <Text>{JSON.stringify(route.params)}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

PizzaScreen.displayName = 'PizzaScreen';

export default PizzaScreen;

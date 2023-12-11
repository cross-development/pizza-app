// Packages
import { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// Navigation
import { Routes } from '../navigation/routes';
// Types
import { TStackNavigationProps } from '../types/navigation';

type Props = NativeStackScreenProps<TStackNavigationProps, Routes.Profile>;

const SettingsScreen: FC<Props> = () => (
  <View style={styles.container}>
    <Text>SettingsScreen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

SettingsScreen.displayName = 'SettingsScreen';

export default SettingsScreen;

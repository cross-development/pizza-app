// Packages
import { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// Screens
import HomeScreen from './src/screens/HomeScreen';
// Theme
import { colors } from './src/theme/palette';

const App: FC = () => (
  <SafeAreaView style={styles.container}>
    <HomeScreen />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey.light,
  },
});

export default App;

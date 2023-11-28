// Packages
import { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// Screens
import HomeScreen from './src/screens/HomeScreen';

const App: FC = () => (
  <SafeAreaView style={styles.container}>
    <HomeScreen />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default App;

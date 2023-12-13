// Packages
import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Navigation
import MainNavigation from './src/navigation/MainNavigation';

const App: FC = () => (
  <NavigationContainer>
    <MainNavigation />
  </NavigationContainer>
);

App.displayName = 'App';

export default App;

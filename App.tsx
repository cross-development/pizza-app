// Packages
import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Components
import InactiveStateBackground from './src/components/common/InactiveStateBackground';
// Navigation
import MainNavigation from './src/navigation/MainNavigation';
// Hooks
import useAppState from './src/hooks/useAppState';

const App: FC = () => {
  const { appStateStatus } = useAppState();

  return (
    <NavigationContainer>
      {appStateStatus !== 'active' && <InactiveStateBackground />}

      <MainNavigation />
    </NavigationContainer>
  );
};

App.displayName = 'App';

export default App;

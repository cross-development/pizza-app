// Packages
import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Components
import InactiveStateBackground from './src/components/common/InactiveStateBackground';
// Stores
import { StoreContext, store } from './src/stores/store';
// Navigation
import MainStack from './src/navigation/MainStackNavigation';
// Hooks
import useAppState from './src/hooks/useAppState';

const App: FC = () => {
  const { appStateStatus } = useAppState();

  return (
    <StoreContext.Provider value={store}>
      <NavigationContainer>
        {appStateStatus !== 'active' && <InactiveStateBackground />}

        <MainStack />
      </NavigationContainer>
    </StoreContext.Provider>
  );
};

App.displayName = 'App';

export default App;

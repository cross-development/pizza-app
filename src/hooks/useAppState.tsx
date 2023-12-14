// Packages
import { useRef, useState, useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';

type TUseAppState = () => { appStateStatus: AppStateStatus };

const useAppState: TUseAppState = () => {
  const appState = useRef(AppState.currentState);

  const [appStateStatus, setAppStateStatus] = useState<AppStateStatus>(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;

      setAppStateStatus(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return { appStateStatus };
};

export default useAppState;

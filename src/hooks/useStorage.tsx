// Packages
import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TUseAsyncStorageOptions<T> = {
  key: string;
  initialValue: T;
};

type TUpdater<T> = T | ((val: T) => T);

export default function useAsyncStorage<T>({ key, initialValue }: TUseAsyncStorageOptions<T>) {
  const [storageItem, setStorageItem] = useState<T>(initialValue);

  const getStorageItem = async () => {
    const data = await AsyncStorage.getItem(key);

    if (data !== null) {
      setStorageItem(JSON.parse(data));
    } else {
      setStorageItem(initialValue);
    }
  };

  const updateStorageItem = (update: TUpdater<T>) => {
    const valueToStore = update instanceof Function ? update(storageItem) : update;

    AsyncStorage.setItem(key, JSON.stringify(valueToStore));

    setStorageItem(valueToStore);
  };

  useFocusEffect(
    useCallback(() => {
      getStorageItem();
    }, []),
  );

  return [storageItem, updateStorageItem] as const;
}

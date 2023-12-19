// Packages
import { createContext, useContext } from 'react';
// Stores
import OrderStore from './orderStore';

interface Store {
  orderStore: OrderStore;
}

export const store: Store = {
  orderStore: new OrderStore(),
};

export const StoreContext = createContext(store);

// Custom hook to provide screens and components with all stores
export const useStore = (): Store => useContext(StoreContext);

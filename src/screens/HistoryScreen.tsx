// Packages
import { FC } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// Components
import DataPlaceholder from '../components/common/DataPlaceholder';
import OrderHistoryCard from '../components/common/OrderHistoryCard';
// Navigation
import { Routes } from '../navigation/routes';
// Hooks
import useAsyncStorage from '../hooks/useStorage';
// Types
import { IOrderHistoryItem } from '../types/order';
import { TStackNavigationProps } from '../types/navigation';

type Props = NativeStackScreenProps<TStackNavigationProps, Routes.Orders>;

const HistoryScreen: FC<Props> = () => {
  const [orderHistory] = useAsyncStorage<IOrderHistoryItem[]>({ key: 'orderHistory', initialValue: [] });

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={orderHistory}
          keyExtractor={item => `${item.id}`}
          ListEmptyComponent={
            <DataPlaceholder
              icon="clipboard-outline"
              title="Order history is empty"
              description=""
            />
          }
          renderItem={({ item }) => <OrderHistoryCard item={item} />}
          contentContainerStyle={styles.listContentContainer}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

HistoryScreen.displayName = 'HistoryScreen';

export default HistoryScreen;

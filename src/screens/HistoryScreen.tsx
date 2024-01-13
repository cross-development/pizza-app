// Packages
import { FC } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// Components
import DataPlaceholder from '../components/common/DataPlaceholder';
// Navigation
import { Routes } from '../navigation/routes';
// Hooks
import useAsyncStorage from '../hooks/useStorage';
// Types
import { TOrderHistoryItem } from '../types/order';
import { TStackNavigationProps } from '../types/navigation';

type Props = NativeStackScreenProps<TStackNavigationProps, Routes.Orders>;

const HistoryScreen: FC<Props> = () => {
  const [orderHistory] = useAsyncStorage<TOrderHistoryItem[]>({ key: 'orderHistory', initialValue: [] });

  console.log('orderHistory', orderHistory);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text>HistoryScreen</Text>

        <FlatList
          data={orderHistory}
          keyExtractor={item => `${item.id}`}
          ListEmptyComponent={
            <DataPlaceholder
              icon="search"
              title="Item not found"
              description="Try searching the item with a different keyword."
            />
          }
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
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
  },
});

HistoryScreen.displayName = 'HistoryScreen';

export default HistoryScreen;

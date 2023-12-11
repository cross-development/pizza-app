// Packages
import { FC, useCallback, useMemo, useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';
// Components
import Filters from '../components/common/Filters';
import PizzaCard from '../components/common/PizzaCard';
// Navigation
import { Routes } from '../navigation/routes';
// Data
import { mockNewPizzaItem, mockPizzaList } from '../data/mockPizzaData';
// Types
import { IPizza } from '../types/pizza';
import { TStackNavigationProps } from '../types/navigation';

type Props = NativeStackScreenProps<TStackNavigationProps, Routes.PizzaList>;

const HomeScreen: FC<Props> = () => {
  const [filterText, setFilterText] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [pizzaList, setPizzaList] = useState<IPizza[]>(mockPizzaList.slice(0, 10));

  const navigation = useNavigation<NavigationProp<TStackNavigationProps, Routes.Pizza>>();

  const handleToggleIsFilterVisible = useCallback(() => {
    setIsFilterVisible(prevState => !prevState);
  }, [setIsFilterVisible]);

  const handleLoadMore = useCallback(() => {
    if (pizzaList.length !== mockPizzaList.length) {
      setTimeout(() => {
        setPizzaList(prevState => [...prevState, ...mockPizzaList.slice(10)]);
      }, 3000);
    }
  }, [pizzaList.length]);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);

    setTimeout(() => {
      setPizzaList(prevState => [mockNewPizzaItem, ...prevState]);
      setIsRefreshing(false);
    }, 2000);
  }, []);

  const handleSelectItem = useCallback((item: IPizza) => {
    navigation.navigate(Routes.Pizza, item);
  }, []);

  const filteredProducts = useMemo(
    () => pizzaList.filter(({ title }) => title.toLowerCase().includes(filterText.toLowerCase())),
    [filterText, pizzaList.length],
  );

  return (
    <View style={styles.container}>
      <Filters
        filterText={filterText}
        isFilterVisible={isFilterVisible}
        onChangeFilterText={setFilterText}
        onToggleIsFilterVisible={handleToggleIsFilterVisible}
      />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={filteredProducts}
          refreshing={isRefreshing}
          onEndReachedThreshold={0.2}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => (
            <PizzaCard
              pizza={item}
              onSelectItem={() => handleSelectItem(item)}
            />
          )}
          contentContainerStyle={styles.listContentContainer}
          onRefresh={handleRefresh}
          onEndReached={handleLoadMore}
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

HomeScreen.displayName = 'HomeScreen';

export default HomeScreen;

// Packages
import { FC, useCallback, useMemo, useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
// Components
import Filters from '../components/common/Filters';
import PizzaCard from '../components/common/PizzaCard';
import SaleModal from '../components/modals/SaleModal';
// Types
import { IPizza } from '../types/pizza';
// Data
import { mockNewPizzaItem, mockPizzaList } from '../data/mockPizzaData';

const HomeScreen: FC = () => {
  const [filterText, setFilterText] = useState('');
  const [pizzaList, setPizzaList] = useState<IPizza[]>(mockPizzaList.slice(0, 10));
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleToggleIsModalVisible = useCallback(() => {
    setIsModalVisible(prevState => !prevState);
  }, [setIsModalVisible]);

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
        onToggleIsModalVisible={handleToggleIsModalVisible}
        onToggleIsFilterVisible={handleToggleIsFilterVisible}
      />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={filteredProducts}
          refreshing={isRefreshing}
          onEndReachedThreshold={0.2}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => <PizzaCard pizza={item} />}
          contentContainerStyle={styles.listContentContainer}
          onRefresh={handleRefresh}
          onEndReached={handleLoadMore}
        />
      </SafeAreaView>

      <SaleModal
        isModalVisible={isModalVisible}
        onToggleIsModalVisible={handleToggleIsModalVisible}
      />
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

// Packages
import { FC, useCallback, useMemo, useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Animated, {
  Extrapolate,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
// Components
import NoData from '../components/common/NoData';
import Filters from '../components/common/Filters';
import PizzaCard from '../components/common/PizzaCard';
// Navigation
import { Routes } from '../navigation/routes';
// Stores
import { useStore } from '../stores/store';
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

  const scrollY = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const animatedFiltersStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 65], [1, 0], Extrapolate.CLAMP),
    height: interpolate(scrollY.value, [0, 35, 65], [65, 65, 0], Extrapolate.CLAMP),
    transform: [{ translateY: interpolate(scrollY.value, [0, 65], [0, -65], Extrapolate.CLAMP) }],
  }));

  const { orderStore } = useStore();

  const handleToggleIsFilterVisible = useCallback((): void => {
    setIsFilterVisible(prevState => !prevState);
  }, [setIsFilterVisible]);

  const handleLoadMore = useCallback((): void => {
    if (pizzaList.length !== mockPizzaList.length) {
      setTimeout(() => {
        setPizzaList(prevState => [...prevState, ...mockPizzaList.slice(10)]);
      }, 3000);
    }
  }, [pizzaList.length]);

  const handleRefresh = useCallback((): void => {
    setIsRefreshing(true);

    setTimeout(() => {
      setPizzaList(prevState => [mockNewPizzaItem, ...prevState]);
      setIsRefreshing(false);
    }, 2000);
  }, []);

  const handleSelectItem = (item: IPizza): void => {
    navigation.navigate(Routes.Pizza, item);
  };

  const handleAddToBasket = (item: IPizza): void => {
    orderStore.addProductToBasket(item);
  };

  const filteredProducts = useMemo(
    (): IPizza[] => pizzaList.filter(({ title }) => title.toLowerCase().includes(filterText.toLowerCase())),
    [filterText, pizzaList.length],
  );

  return (
    <View style={styles.container}>
      <Filters
        filterText={filterText}
        isFilterVisible={isFilterVisible}
        animatedContainerStyle={animatedFiltersStyle}
        onChangeFilterText={setFilterText}
        onToggleIsFilterVisible={handleToggleIsFilterVisible}
      />

      <SafeAreaView style={styles.container}>
        <Animated.FlatList
          data={filteredProducts}
          refreshing={isRefreshing}
          onEndReachedThreshold={0.2}
          keyExtractor={item => `${item.id}`}
          ListEmptyComponent={
            <NoData
              icon="search"
              title="Item not found"
              description="Try searching the item with a different keyword."
            />
          }
          renderItem={({ item }) => (
            <PizzaCard
              pizza={item}
              onSelectItem={() => handleSelectItem(item)}
              onAddToBasket={() => handleAddToBasket(item)}
            />
          )}
          contentContainerStyle={styles.listContentContainer}
          onScroll={handleScroll}
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

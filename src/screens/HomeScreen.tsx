// Packages
import { FC, useCallback, useMemo, useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
// Components
import Filters from '../components/common/Filters';
import PizzaCard from '../components/common/PizzaCard';
import BottomModal from '../components/ui/BottomModal';
// Data
import mockPizzaData from '../data/mockPizzaData';

const HomeScreen: FC = () => {
  const [filterText, setFilterText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleToggleIsModalVisible = useCallback(() => {
    setIsModalVisible(prevState => !prevState);
  }, [setIsModalVisible]);

  const handleToggleIsFilterVisible = useCallback(() => {
    setIsFilterVisible(prevState => !prevState);
  }, [setIsFilterVisible]);

  const filteredProducts = useMemo(
    () => mockPizzaData.filter(({ title }) => title.toLowerCase().includes(filterText.toLowerCase())),
    [filterText],
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
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => <PizzaCard pizza={item} />}
          contentContainerStyle={styles.listContentContainer}
        />
      </SafeAreaView>

      <BottomModal
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

export default HomeScreen;

// Packages
import { FC } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
// Components
import PizzaCard from '../components/PizzaCard';
// Data
import mockPizzaData from '../data/mockPizzaData';

const HomeScreen: FC = () => (
  <View style={styles.container}>
    <FlatList
      data={mockPizzaData}
      keyExtractor={item => `${item.id}`}
      renderItem={({ item }) => <PizzaCard pizza={item} />}
      contentContainerStyle={{ padding: 20 }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;

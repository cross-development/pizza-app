// Packages
import { FC, memo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
// Theme
import { colors } from '../../theme/palette';

const NoData: FC = memo(() => (
  <View style={styles.container}>
    <Ionicons
      size={120}
      name="search"
      style={styles.icon}
    />

    <Text style={styles.title}>Item not found</Text>

    <Text style={styles.description}>Try searching the item with a different keyword.</Text>
  </View>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '35%',
  },
  icon: {
    color: colors.grey.main,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.common.black,
    marginBottom: 18,
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.grey.main,
    textAlign: 'center',
  },
});

NoData.displayName = 'NoData';

export default NoData;

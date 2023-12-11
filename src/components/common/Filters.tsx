// Packages
import { Dispatch, FC, SetStateAction, memo, useCallback } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// Components
import CustomTouchable from '../ui/CustomTouchable';
// Navigation
import { Routes } from '../../navigation/routes';
// Theme
import { colors } from '../../theme/palette';
// Types
import { TStackNavigationProps } from '../../types/navigation';

type Props = {
  filterText: string;
  isFilterVisible: boolean;
  onChangeFilterText: Dispatch<SetStateAction<string>>;
  onToggleIsFilterVisible: () => void;
};

const Filters: FC<Props> = memo(props => {
  const { filterText, isFilterVisible, onChangeFilterText, onToggleIsFilterVisible } = props;

  const navigation = useNavigation<NavigationProp<TStackNavigationProps, Routes.Sale>>();

  const handleNavigateToSaleScreen = useCallback(() => {
    navigation.navigate(Routes.Sale);
  }, []);

  return (
    <View style={styles.container}>
      {isFilterVisible && (
        <TextInput
          autoFocus
          value={filterText}
          placeholder="Search"
          clearButtonMode="while-editing"
          style={styles.searchInput}
          onChangeText={onChangeFilterText}
        />
      )}

      <View style={styles.controlContainer}>
        <CustomTouchable onPress={handleNavigateToSaleScreen}>
          <MaterialCommunityIcons
            size={42}
            name="cards-heart"
            style={styles.favoriteBtn}
          />
        </CustomTouchable>

        <CustomTouchable onPress={onToggleIsFilterVisible}>
          <Ionicons
            name="search"
            size={42}
            style={styles.searchBtn}
          />
        </CustomTouchable>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 6,
    paddingBottom: 14,
  },
  controlContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 18,
    borderColor: colors.grey.dark,
    flexGrow: 1,
  },
  favoriteBtn: {
    color: colors.red.main,
    marginRight: 4,
  },
  searchBtn: {
    color: colors.grey.dark,
  },
});

Filters.displayName = 'Filters';

export default Filters;

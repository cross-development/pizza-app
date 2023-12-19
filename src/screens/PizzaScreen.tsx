// Packages
import { FC, useCallback } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import FontAwesome5Icons from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// Components
import CustomTouchable from '../components/ui/CustomTouchable';
// Navigation
import { Routes } from '../navigation/routes';
// Stores
import { useStore } from '../stores/store';
// Theme
import { colors } from '../theme/palette';
// Types
import { TStackNavigationProps } from '../types/navigation';

type Props = NativeStackScreenProps<TStackNavigationProps, Routes.Pizza>;

const PizzaScreen: FC<Props> = ({ route }) => {
  const { title, description, currentPrice, imageUrl, isFavorite, isNew, oldPrice } = route.params;

  const { orderStore } = useStore();

  const handleAddProductToBasket = useCallback((): void => {
    orderStore.addProductToBasket(route.params);
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: imageUrl }}
          style={styles.image}
        />

        {isNew && (
          <View style={styles.promoLabel}>
            <Text style={styles.promoText}>New</Text>
          </View>
        )}
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.currentPrice}>${currentPrice}</Text>

            {!!oldPrice && <Text style={styles.oldPrice}>${oldPrice}</Text>}
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text
            numberOfLines={6}
            ellipsizeMode="tail"
            style={styles.description}
          >
            {description}
          </Text>
        </View>

        <View style={styles.controlsContainer}>
          <CustomTouchable
            style={styles.button}
            onPress={handleAddProductToBasket}
          >
            <FontAwesome5Icons
              size={30}
              name="shopping-bag"
              style={styles.cart}
            />
          </CustomTouchable>

          <CustomTouchable style={styles.button}>
            {isFavorite ? (
              <MaterialCommunityIcons
                size={30}
                name="cards-heart"
                style={styles.favorite}
              />
            ) : (
              <MaterialCommunityIcons
                size={30}
                name="cards-heart-outline"
                style={styles.favorite}
              />
            )}
          </CustomTouchable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: '54%',
    position: 'relative',
    backgroundColor: colors.common.white,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
  promoLabel: {
    position: 'absolute',
    top: 10,
    right: 20,
    padding: 5,
    borderRadius: 50,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green.light,
  },
  promoText: {
    fontWeight: 'bold',
    color: colors.common.white,
    fontSize: 16,
  },
  contentContainer: {
    marginTop: 40,
    paddingHorizontal: 14,
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
    color: colors.common.black,
  },
  favorite: {
    color: colors.red.main,
  },
  descriptionContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  description: {
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 22,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  currentPrice: {
    fontWeight: '700',
    fontSize: 26,
    color: colors.green.main,
    marginRight: 10,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontWeight: '500',
    fontSize: 26,
    color: colors.red.main,
  },
  cart: {
    color: colors.orange.dark,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.grey.light,
    paddingVertical: 8,
    paddingHorizontal: 50,
    borderRadius: 50,
  },
});

PizzaScreen.displayName = 'PizzaScreen';

export default PizzaScreen;

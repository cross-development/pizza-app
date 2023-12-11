// Packages
import { FC, memo } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import FontAwesome5Icons from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// Components
import CustomTouchable from '../ui/CustomTouchable';
// Theme
import { colors } from '../../theme/palette';
// Types
import { IPizza } from '../../types/pizza';

type Props = {
  pizza: IPizza;
  onSelectItem: () => void;
};

const PizzaCard: FC<Props> = memo(({ pizza, onSelectItem }) => {
  const { title, description, imageUrl, currentPrice, oldPrice, isFavorite, isNew } = pizza;

  return (
    <CustomTouchable
      style={styles.container}
      onPress={onSelectItem}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
        />

        {isNew && (
          <View style={styles.promoLabel}>
            <Text style={styles.promoText}>New</Text>
          </View>
        )}
      </View>

      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{title}</Text>

          <CustomTouchable>
            {isFavorite ? (
              <MaterialCommunityIcons
                size={20}
                name="cards-heart"
                style={styles.favorite}
              />
            ) : (
              <MaterialCommunityIcons
                size={20}
                name="cards-heart-outline"
                style={styles.favorite}
              />
            )}
          </CustomTouchable>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>${currentPrice}</Text>

          {!!oldPrice && <Text style={styles.oldPrice}>${oldPrice}</Text>}
        </View>

        <View style={styles.footerContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.description}
          >
            {description}
          </Text>

          <CustomTouchable>
            <FontAwesome5Icons
              size={20}
              name="shopping-bag"
              style={styles.cart}
            />
          </CustomTouchable>
        </View>
      </View>
    </CustomTouchable>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.common.white,
    padding: 10,
    shadowColor: colors.common.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
    marginBottom: 20,
    borderRadius: 18,
  },
  imageContainer: {
    width: 80,
    height: 80,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  promoLabel: {
    position: 'absolute',
    top: -6,
    right: -8,
    padding: 5,
    borderRadius: 50,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green.light,
  },
  promoText: {
    fontWeight: 'bold',
    color: colors.common.white,
    fontSize: 12,
  },
  content: {
    flex: 1,
    marginLeft: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.common.black,
  },
  favorite: {
    color: colors.red.main,
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 6,
    marginBottom: 10,
  },
  currentPrice: {
    fontWeight: '700',
    fontSize: 18,
    color: colors.green.main,
    marginRight: 10,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontWeight: '500',
    fontSize: 18,
    color: colors.red.main,
  },
  footerContainer: {
    flexDirection: 'row',
  },
  description: {
    flexShrink: 1,
  },
  cart: {
    marginLeft: 12,
    color: colors.orange.dark,
  },
});

PizzaCard.displayName = 'PizzaCard';

export default PizzaCard;

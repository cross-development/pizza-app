// Packages
import { FC, memo } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
// Components
import CustomTouchable from '../ui/CustomTouchable';
// Theme
import { colors } from '../../theme/palette';
// Types
import { IOrderItem } from '../../types/order';

type Props = {
  item: IOrderItem;
  onRemoveFromBasket: () => void;
  onIncrementQuantity: () => void;
  onDecrementQuantity: () => void;
};

const BasketCard: FC<Props> = memo(props => {
  const { item, onRemoveFromBasket, onIncrementQuantity, onDecrementQuantity } = props;

  const { product, quantity, totalPrice } = item;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.imageUrl }}
          style={styles.image}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{product.title}</Text>

          <CustomTouchable
            style={styles.removeFromBasketBtn}
            onPress={onRemoveFromBasket}
          >
            <Ionicons
              size={18}
              name="close-outline"
              color={colors.red.main}
            />
          </CustomTouchable>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>

          <View style={styles.controls}>
            <CustomTouchable
              style={styles.button}
              onPress={quantity > 1 ? onDecrementQuantity : onRemoveFromBasket}
            >
              {quantity > 1 ? (
                <Ionicons
                  size={16}
                  name="md-remove"
                  color={colors.common.black}
                />
              ) : (
                <Ionicons
                  size={16}
                  name="ios-trash-outline"
                  color={colors.common.black}
                />
              )}
            </CustomTouchable>

            <Text style={styles.quantity}>{quantity}</Text>

            <CustomTouchable
              style={styles.button}
              onPress={onIncrementQuantity}
            >
              <Ionicons
                size={16}
                name="add"
                color={colors.common.black}
              />
            </CustomTouchable>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
    width: 60,
    height: 60,
  },
  image: {
    width: '100%',
    height: '100%',
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
  removeFromBasketBtn: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: colors.grey.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  totalPrice: {
    fontWeight: '700',
    fontSize: 18,
    color: colors.green.main,
    marginRight: 10,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: colors.grey.light,
    borderRadius: 50,
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  quantity: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: '600',
  },
});

BasketCard.displayName = 'BasketCard';

export default BasketCard;

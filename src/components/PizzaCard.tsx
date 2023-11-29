// Packages
import { FC, memo } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
// Types
import { IPizza } from '../types/pizza';
// Assets
import cart from '../../assets/cart.png';
import heartFilled from '../../assets/cards-heart-filled.png';
import heartOutlined from '../../assets/cards-heart-outlined.png';

interface Props {
  pizza: IPizza;
}

const PizzaCard: FC<Props> = memo(({ pizza }) => {
  const { title, description, imageUrl, currentPrice, oldPrice, isFavorite, isNew } = pizza;

  return (
    <View style={styles.container}>
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

          <View style={styles.favoriteBtn}>
            <Image
              source={isFavorite ? heartFilled : heartOutlined}
              style={styles.image}
            />
          </View>
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

          <View style={styles.cart}>
            <Image
              source={cart}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    shadowColor: '#000',
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
    backgroundColor: '#5CC874',
  },
  promoText: {
    fontWeight: 'bold',
    color: '#fff',
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
    color: '#121212',
  },
  favoriteBtn: {
    height: 20,
    width: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 6,
    marginBottom: 10,
  },
  currentPrice: {
    fontWeight: '700',
    fontSize: 18,
    color: '#00AD3B',
    marginRight: 10,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontWeight: '500',
    fontSize: 18,
    color: '#C9333A',
  },
  footerContainer: {
    flexDirection: 'row',
  },
  description: {
    flexShrink: 1,
  },
  cart: {
    marginLeft: 12,
    width: 16,
    height: 16,
  },
});

PizzaCard.displayName = 'PizzaCard';

export default PizzaCard;

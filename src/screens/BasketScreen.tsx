// Packages
import { FC } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
// Components
import NoData from '../components/common/NoData';
import BasketCard from '../components/common/BasketCard';
import CustomTouchable from '../components/ui/CustomTouchable';
// Navigation
import { Routes } from '../navigation/routes';
// Stores
import { useStore } from '../stores/store';
// Theme
import { colors } from '../theme/palette';
// Types
import { TStackNavigationProps } from '../types/navigation';

type Props = NativeStackScreenProps<TStackNavigationProps, Routes.Cart>;

const BasketScreen: FC<Props> = observer(() => {
  const { orderStore } = useStore();

  const navigation = useNavigation<NavigationProp<TStackNavigationProps, Routes.Pizza>>();

  const handleIncrementProductQuantity = (id: number): void => {
    orderStore.incrementProductQuantity(id);
  };

  const handleDecrementProductQuantity = (id: number): void => {
    orderStore.decrementProductQuantity(id);
  };

  const handleRemoveProductFromBasket = (id: number): void => {
    orderStore.removeProductFromBasket(id);
  };

  const handleCheckoutOrder = (): void => {
    orderStore.checkoutOrder();

    navigation.navigate(Routes.Checkout);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cart</Text>
      </View>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={orderStore.order}
          onEndReachedThreshold={0.2}
          keyExtractor={({ product }) => `${product.id}`}
          ListEmptyComponent={
            <NoData
              icon="cart-outline"
              title="Your cart is empty"
              description="Let's try to add some products you need."
            />
          }
          renderItem={({ item }) => (
            <BasketCard
              item={item}
              onRemoveFromBasket={() => handleRemoveProductFromBasket(item.product.id)}
              onIncrementQuantity={() => handleIncrementProductQuantity(item.product.id)}
              onDecrementQuantity={() => handleDecrementProductQuantity(item.product.id)}
            />
          )}
          contentContainerStyle={styles.listContentContainer}
        />
      </SafeAreaView>

      <View style={styles.summaryContainer}>
        <View>
          <Text style={styles.totalPriceText}>Total:</Text>
          <Text style={styles.totalPrice}>${orderStore.totalPrice.toFixed(2)}</Text>
        </View>

        <CustomTouchable
          disabled={!orderStore.order.length}
          style={[styles.checkoutButton, !orderStore.order.length && styles.disabled]}
          onPress={handleCheckoutOrder}
        >
          <Text style={styles.checkoutText}>Checkout</Text>
        </CustomTouchable>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  listContentContainer: {
    paddingHorizontal: 20,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  totalPriceText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: colors.grey.dark,
  },
  totalPrice: {
    fontSize: 22,
  },
  checkoutButton: {
    backgroundColor: colors.common.black,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 46,
  },
  disabled: {
    backgroundColor: colors.grey.dark,
  },
  checkoutText: {
    color: colors.common.white,
    fontWeight: '500',
  },
});

BasketScreen.displayName = 'BasketScreen';

export default BasketScreen;

// Packages
import { FC, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Theme
import { colors } from '../../theme/palette';
// Types
import { IOrderHistoryItem } from '../../types/order';

type Props = {
  item: IOrderHistoryItem;
};

const OrderHistoryCard: FC<Props> = memo(({ item }) => {
  const { id, amount, date, totalPrice } = item;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <View style={styles.row}>
            <Text style={styles.secondaryText}>Order #: </Text>

            <Text style={styles.primaryText}>{id}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.secondaryText}>Order date: </Text>

            <Text style={styles.primaryText}>{date}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.secondaryText}>Amount: </Text>

            <Text style={styles.primaryText}>{amount}</Text>
          </View>
        </View>

        <View>
          <Text style={[styles.priceTitle, styles.secondaryText]}>Total price</Text>

          <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
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
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  primaryText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.common.black,
    marginBottom: 4,
  },
  secondaryText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.grey.dark,
  },
  priceTitle: {
    marginBottom: 4,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'right',
  },
});

OrderHistoryCard.displayName = 'OrderHistoryCard';

export default OrderHistoryCard;

// Packages
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { OpaqueColorValue, View, StyleSheet, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
// Stores
import { useStore } from '../../stores/store';
// Theme
import { colors } from '../../theme/palette';

type Props = {
  size: number;
  name: keyof typeof Ionicons.glyphMap;
  color?: string | OpaqueColorValue | undefined;
};

const CartIconWithBadge: FC<Props> = observer(({ size, name, color }) => {
  const { orderStore } = useStore();

  return (
    <View style={{ ...styles.container, width: size, height: size }}>
      {!!orderStore.totalCount && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{orderStore.totalCount}</Text>
        </View>
      )}

      <Ionicons
        size={size}
        name={name}
        color={color}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -8,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red.main,
    borderRadius: 50,
    zIndex: 1,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.common.white,
  },
});

CartIconWithBadge.displayName = 'CartIconWithBadge';

export default CartIconWithBadge;

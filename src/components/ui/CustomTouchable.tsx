// Packages
import { FC, ReactNode, memo } from 'react';
import {
  Pressable,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// Theme
import { colors } from '../../theme/palette';

type Props = {
  withoutFeedback?: boolean;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

const CustomTouchable: FC<Props> = memo(({ withoutFeedback, children, style, disabled, onPress }) =>
  withoutFeedback ? (
    <TouchableOpacity
      activeOpacity={1}
      disabled={disabled}
      onPress={onPress}
      style={[styles.common, style]}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <Pressable
      android_ripple={{ color: colors.grey.light, radius: -5, borderless: false, foreground: false }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [Platform.OS === 'ios' && { opacity: pressed ? 0.8 : 1 }, styles.common, style]}
    >
      {children}
    </Pressable>
  ),
);

const styles = StyleSheet.create({
  common: {
    overflow: 'hidden',
  },
});

CustomTouchable.displayName = 'CustomTouchable';

export default CustomTouchable;

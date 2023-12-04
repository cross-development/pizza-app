// Packages
import { FC, ReactNode, memo } from 'react';
import {
  TouchableWithoutFeedback,
  Pressable,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  Platform,
  StyleSheet,
} from 'react-native';
// Theme
import { colors } from '../../theme/palette';

interface Props {
  withoutFeedback?: boolean;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}

const CustomTouchable: FC<Props> = memo(({ withoutFeedback, children, style, onPress }) =>
  withoutFeedback ? (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={[styles.common, style]}
    >
      {children}
    </TouchableWithoutFeedback>
  ) : (
    <Pressable
      android_ripple={{ color: colors.grey.light, radius: -5, borderless: false, foreground: false }}
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

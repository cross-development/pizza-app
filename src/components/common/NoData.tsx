// Packages
import { FC, memo } from 'react';
import { Text, View, StyleSheet, StyleProp, TextStyle } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
// Theme
import { colors } from '../../theme/palette';

type Props = {
  title: string;
  description: string;
  type?: 'info' | 'success' | 'danger' | 'warning';
  icon?: keyof typeof Ionicons.glyphMap;
  containerStyle?: StyleProp<TextStyle>;
};

const NoData: FC<Props> = memo(({ title, description, icon, containerStyle, type = 'info' }) => (
  <View style={[styles.container, containerStyle]}>
    {icon && (
      <Ionicons
        size={120}
        name={icon}
        style={[styles.icon, styles[type]]}
      />
    )}

    <Text style={styles.title}>{title}</Text>

    <Text style={styles.description}>{description}</Text>
  </View>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '35%',
  },
  icon: {
    color: colors.grey.main,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.common.black,
    marginBottom: 18,
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  info: {
    color: colors.grey.main,
  },
  success: {
    color: colors.green.main,
  },
  danger: {
    color: colors.red.main,
  },
  warning: {
    color: colors.orange.main,
  },
});

NoData.displayName = 'NoData';

export default NoData;

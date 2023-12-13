// Packages
import { FC, memo } from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
// Assets
import inactiveStateBackground from '../../../assets/inactive-state-background.png';

const { width, height } = Dimensions.get('screen');

const InactiveStateBackground: FC = memo(() => (
  <View style={styles.container}>
    <Image
      source={inactiveStateBackground}
      style={styles.image}
    />
  </View>
));

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width,
    height,
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

InactiveStateBackground.displayName = 'InactiveStateBackground';

export default InactiveStateBackground;

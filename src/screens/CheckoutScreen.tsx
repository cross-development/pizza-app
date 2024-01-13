// Packages
import { FC, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation, ParamListBase, useFocusEffect } from '@react-navigation/native';
// Components
import DataPlaceholder from '../components/common/DataPlaceholder';
// Routes
import { Routes } from '../navigation/routes';
// Types
import { TStackNavigationProps } from '../types/navigation';

type Props = NativeStackScreenProps<TStackNavigationProps, Routes.Checkout>;

const CheckoutScreen: FC<Props> = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  useFocusEffect(useCallback(() => () => navigation.reset({ routes: [{ name: Routes.Cart }] }), []));

  return (
    <View style={styles.container}>
      <DataPlaceholder
        type="success"
        icon="ios-shield-checkmark"
        title="Thank you for your order!"
        description="We will contact you as soon as possible"
        containerStyle={styles.noDataContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataContainerStyle: {
    marginTop: 0,
  },
});

CheckoutScreen.displayName = 'CheckoutScreen';

export default CheckoutScreen;

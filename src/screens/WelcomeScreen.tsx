// Packages
import { FC, useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';
// Components
import CustomTouchable from '../components/ui/CustomTouchable';
// Navigation
import { Routes } from '../navigation/routes';
// Hooks
import useAsyncStorage from '../hooks/useStorage';
// Theme
import { colors } from '../theme/palette';
// Types
import { TStackNavigationProps } from '../types/navigation';
// Assets
import logoImg from '../../assets/logo.png';
import welcomePeopleImg from '../../assets/welcome-people.png';

type Props = NativeStackScreenProps<TStackNavigationProps, Routes.Welcome>;

const WelcomeScreen: FC<Props> = () => {
  const [isGotStarted, setIsGotStarted] = useAsyncStorage({ key: 'isGotStarted', initialValue: false });

  const navigation = useNavigation<NavigationProp<TStackNavigationProps, Routes.Main>>();

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isGotStarted) {
      timerId = setTimeout(() => navigation.navigate(Routes.Main), 1000);
    }

    return () => clearTimeout(timerId);
  }, [isGotStarted]);

  const handleGetStarted = (): void => {
    setIsGotStarted(true);

    navigation.navigate(Routes.Main);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={welcomePeopleImg}
        style={{ position: 'absolute', left: 0, bottom: -30, right: 0 }}
      />

      <View style={styles.contentContainer}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Text
          numberOfLines={2}
          style={styles.title}
        >
          Pizza for Everyone
        </Text>

        {!isGotStarted && (
          <CustomTouchable
            onPress={handleGetStarted}
            style={styles.getStartedBtn}
          >
            <Text style={styles.getStartedText}>Get started</Text>
          </CustomTouchable>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red.light,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 46,
  },
  logo: {
    marginTop: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 60,
    fontWeight: '800',
    color: colors.common.white,
    marginBottom: 74,
  },
  getStartedBtn: {
    backgroundColor: colors.common.white,
    paddingVertical: 25,
    paddingHorizontal: 100,
    marginTop: 'auto',
    borderRadius: 30,
    marginBottom: 20,
  },
  getStartedText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.red.light,
  },
});

WelcomeScreen.displayName = 'WelcomeScreen';

export default WelcomeScreen;

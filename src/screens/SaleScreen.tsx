// Packages
import { FC, useState } from 'react';
import {
  Alert,
  NativeScrollEvent,
  StyleSheet,
  Share,
  Image,
  View,
  SafeAreaView,
  FlatList,
  NativeSyntheticEvent,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// Components
import CustomTouchable from '../components/ui/CustomTouchable';
// Navigation
import { Routes } from '../navigation/routes';
// Theme
import { colors } from '../theme/palette';
// Data
import mockAdvertisementData from '../data/mockSaleData';
// Types
import { TStackNavigationProps } from '../types/navigation';

const { width } = Dimensions.get('screen');

type Props = NativeStackScreenProps<TStackNavigationProps, Routes.Sale>;

const SaleScreen: FC<Props> = () => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const handleScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentIdx = Math.round(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

    setCurrentSlideIdx(currentIdx);
  };

  const handleShare = async (message: string): Promise<void> => {
    try {
      const result = await Share.share({ message });

      if (result.action === Share.sharedAction) {
        Alert.alert('Shared successfully!');
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={mockAdvertisementData}
          keyExtractor={item => `${item.id}`}
          onScroll={handleScroll}
          contentContainerStyle={styles.slider}
          renderItem={({ item }) => (
            <CustomTouchable
              withoutFeedback
              onPress={() => handleShare(item.imageUrl)}
              style={{ width, ...styles.slide }}
            >
              <Image
                resizeMode="stretch"
                source={{ uri: item.imageUrl }}
                style={styles.slideImage}
              />
            </CustomTouchable>
          )}
        />

        <View style={styles.dotsPagination}>
          {Array.from(Array(mockAdvertisementData.length).keys()).map(idx => (
            <View
              key={idx}
              style={[styles.dot, currentSlideIdx == idx && styles.activeDot]}
            />
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    marginBottom: 10,
  },
  dotsPagination: {
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: colors.grey.main,
  },
  activeDot: {
    backgroundColor: colors.grey.dark,
  },
  slider: {
    paddingVertical: 20,
  },
  slide: {
    paddingHorizontal: 20,
  },
  slideImage: {
    height: '100%',
    borderRadius: 18,
  },
});

SaleScreen.displayName = 'SaleScreen';

export default SaleScreen;

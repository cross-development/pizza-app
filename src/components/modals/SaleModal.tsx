// Packages
import { FC, memo, useState } from 'react';
import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Share,
  Alert,
} from 'react-native';
// Components
import CustomTouchable from '../ui/CustomTouchable';
// Theme
import { colors } from '../../theme/palette';
// Data
import mockAdvertisementData from '../../data/mockSaleData';

interface Props {
  isModalVisible: boolean;
  onToggleIsModalVisible: () => void;
}

const { width } = Dimensions.get('screen');

const SaleModal: FC<Props> = memo(({ isModalVisible, onToggleIsModalVisible }) => {
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
    <Modal
      transparent
      animationType="slide"
      visible={isModalVisible}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={styles.backdrop}
        onPress={onToggleIsModalVisible}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalView}
        >
          <SafeAreaView style={styles.modalContent}>
            <FlatList
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={mockAdvertisementData}
              keyExtractor={item => `${item.id}`}
              onScroll={handleScroll}
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
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
});

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    marginTop: 'auto',
    backgroundColor: colors.common.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    shadowColor: colors.common.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: colors.blue.main,
  },
  buttonText: {
    color: colors.common.white,
    fontWeight: 'bold',
    textAlign: 'center',
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
  slide: {
    paddingTop: 30,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  slideImage: {
    height: '100%',
    borderRadius: 18,
  },
});

SaleModal.displayName = 'SaleModal';

export default SaleModal;

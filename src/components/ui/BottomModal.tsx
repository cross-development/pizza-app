// Packages
import { FC, memo } from 'react';
import { Modal, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// Components
import CustomTouchable from './CustomTouchable';
// Theme
import { colors } from '../../theme/palette';

interface Props {
  isModalVisible: boolean;
  onToggleIsModalVisible: () => void;
}

const BottomModal: FC<Props> = memo(({ isModalVisible, onToggleIsModalVisible }) => (
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
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Hello World!</Text>

          <CustomTouchable
            style={styles.button}
            onPress={onToggleIsModalVisible}
          >
            <Text style={styles.buttonText}>Hide Modal</Text>
          </CustomTouchable>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  </Modal>
));

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
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
});

BottomModal.displayName = 'CustomModal';

export default BottomModal;

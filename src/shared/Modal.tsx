import React from 'react';
import { Modal, View, StyleSheet, TouchableWithoutFeedback, Keyboard, Pressable, ViewStyle, Platform, KeyboardAvoidingView} from 'react-native';
import { hp } from '@/utils/responsiveHelper';
import { Colors } from '@/constants/Colors';

interface Props {
  visible?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  modalStyle?: ViewStyle;
  position?: 'bottom' | 'center'; // 💡 New prop for dynamic positioning
}

const BottomSheetModal = ({
  visible = false,
  onClose = () => { },
  children,
  modalStyle = {},
  position = 'bottom',
}: Props) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.overlay}>
          <Pressable style={styles.backdrop} onPress={onClose} />

          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[
              styles.modalBase,
              position === 'center' ? styles.centeredModal : styles.bottomModal,
              modalStyle,
            ]}
          >
            {children}
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default BottomSheetModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  modalBase: {
    backgroundColor: Colors.lightGray,
    padding: hp(2),
    borderRadius: hp(2),
    maxHeight: '90%',
  },
  bottomModal: {
    marginTop: 'auto',
    borderTopLeftRadius: hp(2),
    borderTopRightRadius: hp(2),
  },
  centeredModal: {
    marginTop: 'auto',
    marginBottom: 'auto',
    alignSelf: 'center',
    borderRadius: hp(2),
    width: '87%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 8,
  },
});

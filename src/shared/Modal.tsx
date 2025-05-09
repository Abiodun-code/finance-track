import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  ViewStyle,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { hp } from '@/utils/responsiveHelper';
import { Colors } from '@/constants/Colors';

interface Props {
  visible?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  bg?: any | string;
  modalStyle?: ViewStyle;
}

const BottomSheetModal = ({ visible, onClose, children, modalStyle }: Props) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.overlay}>
          <Pressable style={styles.backdrop} onPress={onClose} />
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.modal, modalStyle]}
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
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  backdrop: {
    flex: 1,
  },
  modal: {
    backgroundColor: Colors.lightGray,
    padding: hp(2),
    borderTopLeftRadius: hp(2),
    borderTopRightRadius: hp(2),
    // minHeight: hp(50),
    maxHeight: '90%',
  },
});

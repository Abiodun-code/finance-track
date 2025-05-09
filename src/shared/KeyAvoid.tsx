import React, { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface KeyboardAvoidProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  offset?: number;
}

const KeyboardAvoid = ({ children, style, offset }: KeyboardAvoidProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={offset}
      style={[{ flex: 1 }, style]}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoid;

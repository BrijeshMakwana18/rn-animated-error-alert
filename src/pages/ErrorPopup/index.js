import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import {perfectSize} from '../../theme';
import styles from './styles';
export default function ErrorPopup() {
  const errorModalTop = useRef(new Animated.Value(perfectSize(-500))).current;
  const showError = () => {};
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" />
      <TouchableOpacity
        onPress={() => showError()}
        style={styles.buttonContainer}>
        <Text style={styles.buttonTitle}>{'Alert'}</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.errorContainer, {top: errorModalTop}]}>
        <Text style={styles.errorText}>
          {'Invalid credentials. Please enter email and password'}
        </Text>
      </Animated.View>
    </View>
  );
}

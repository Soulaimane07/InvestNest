import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Signup() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Signup Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
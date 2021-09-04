import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function HomeScreen() {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (err) {
      console.log('Error @clearOnboarding: ', err);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={clearOnboarding} style={styles.button}>
        <Text style={styles.text}>Limpar Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 60,
    backgroundColor: '#F4338F',
    justifyContent: 'center',
    borderRadius: 128,
    position: 'absolute',
    bottom: 50,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  }
})
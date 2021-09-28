import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  UserInput from './components/UserInput';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
          <UserInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#702963',

  },
});

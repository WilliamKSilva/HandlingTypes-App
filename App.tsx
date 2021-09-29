import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './Pages/Register';
import { InputContextProvider } from './Context/InputText';

export default function App() {
  return (
        <InputContextProvider>
            <View style={styles.container}>
                <View>
                    <Register />
                </View>
            </View>
          </InputContextProvider>
    );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#702963',

  },
});

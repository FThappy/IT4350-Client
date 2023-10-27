/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/components/StackNavigation';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
   container: {
    flex: 1,
  },
});

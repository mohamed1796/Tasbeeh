/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TasbeehList from './components/TasbehList';
import PrayersCounter from './components/PrayersCounter';
import OneTimePray from './components/OneTimePray';

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View style={styles.appContainer}>
        <TasbeehList navigation={props.navigation} />
      </View>

    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{ title: 'قائمة التسبيحات' }}
        />

        <Stack.Screen name="PrayersCounter" component={PrayersCounter}

        />
        <Stack.Screen name="OneTimePray" component={OneTimePray} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

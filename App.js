import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './Screen/Home';
import Dishes from './Screen/Dishes';
import ContinentalCuisine from './Screen/ContinentalCuisine';
import IndianCuisine from './Screen/IndianCuisine';
import ChineseCuisine from './Screen/ChineseCuisine';

export default class App extends React.Component {
  /* componentWillUnmount(){
    var x = db.ref('teams/' + buttonColor + '/').update({
      isButtonPressed: false,
      timestamp: 0,
    });
  }*/

  render() {
    return (
      <View>
        <SafeAreaProvider>
          <AppContainer />
        </SafeAreaProvider>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Home: Home,
  Dishes: Dishes,
  ContinentalCuisine: ContinentalCuisine,
  IndianCuisine: IndianCuisine,
  ChineseCuisine: ChineseCuisine,

});

const AppContainer = createAppContainer(AppNavigator);

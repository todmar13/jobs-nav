import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MapScreen from './screens/MapScreen'
import DeckScreen from './screens/DeckScreen'
import ReviewScreen from './screens/ReviewScreen'
import SettingsScreen from './screens/SettingsScreen'

export default class App extends React.Component {
  render() {

    const reviewNav = {
         screen : createStackNavigator(
         {
           review: ReviewScreen ,
           settings: SettingsScreen
         },
         {
            initialRouteName:"Review",
            /* The header config from HomeScreen is now here */
            navigationOptions: {
              title:'Review Jobs',
              header: () => {return {right:<Text />} }
            }
        })
    };

    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: {screen: AuthScreen },
      main: {
        screen: createBottomTabNavigator({
          map: {screen: MapScreen},
          deck:{screen: DeckScreen},
          review: createStackNavigator(
          {
            review: ReviewScreen ,
            settings: SettingsScreen
          },
          {
            initialRouteName:"review",
            /* The header config from HomeScreen is now here */
            navigationOptions: {
              headerStyle: {
                backgroundColor: '#f4511e',
                /* marginTop is already in header, this is not necessary...marginTop: Platform.OS === 'android' ? 24 : 0 */
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
          },
        }),

        })
      }
    });

      return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <View style={styles.container}>
            <MainNavigator> </MainNavigator>
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});

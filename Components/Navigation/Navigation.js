import React from 'react';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';

// import de mon élément de navigation StackNavigator
import {createStackNavigator, createAppContainer} from 'react-navigation';

// Imports de mes screens components dans ma navigation
import LogInScreen from '../Screens/LogInScreen';
import SignInScreen from '../Screens/SignInScreen';
import HomeScreen from '../Screens/HomeScreen';
import ProductScreen from '../Screens/ProductScreen';
import ScanScreen from '../Screens/ScanScreen';
import LogoScreen from '../Screens/LogoScreen';



// Création de ma navigation StackNavigation
var StackNavigator = createStackNavigator({

// pages de ma navigation sans Bottom   
 LogIn: { 
     screen:LogInScreen, 
     navigationOptions: {
         header: null
        }
    },

 SignIn: {
        screen: SignInScreen,
        headerMode: 'modal',
         header: 'null',

        navigationOptions: {
        headerStyle: {
            backgroundColor: '#711A1A'
          },
        headerTintColor: '#fff',

        headerTitle: <LogoScreen />,
        headerRight: <Image 
                        source={require('../../assets/pictoAccount.png')}
                        style={{height: 40, width: 40, marginRight: 10}}/>
    }
},

 Home: {
     screen: HomeScreen,
     headerMode: 'modal',
     header: 'null',
     
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#711A1A'
              },
            headerTintColor: '#fff',

            headerTitle: <LogoScreen />,
            headerRight: <Image 
                            source={require('../../assets/pictoAccount.png')}
                            style={{height: 40, width: 40, marginRight: 10}}/>
        }
    },

 Scan: {
     screen: ScanScreen,
     headerMode: 'modal',
     header: 'null',
     navigationOptions:{
        headerStyle: {
            backgroundColor: '#711A1A'
          },
        headerTintColor: '#fff',

         headerTitle: <LogoScreen />,
         headerRight: <Image 
                         source={require('../../assets/pictoAccount.png')}
                         style={{height: 40, width: 40, marginRight: 10}}/>
        }
    },  

 Product: {
     screen: ProductScreen,
     headerMode: 'modal',
     header: 'null',
     navigationOptions: {
        headerStyle: {
            backgroundColor: '#711A1A'
          },
        headerTintColor: '#fff',
        headerTitle: <LogoScreen />,
         headerRight: <Image 
                         source={require('../../assets/pictoAccount.png')}
                         style={{height: 40, width: 40, marginRight: 10}}/>
        }
    }
});

export default Navigation = createAppContainer(StackNavigator);

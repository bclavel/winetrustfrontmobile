import React from 'react';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';

// import de mon élément de navigation StackNavigator
import {createStackNavigator, createAppContainer} from 'react-navigation';

// Imports de mes screens components dans ma navigation
import LogInScreen from '../Screens/LogInScreen';
import SignInScreen from '../Screens/SignInScreen';
import HomeScreen from '../Screens/HomeScreen';
import ScanScreen from '../Screens/ScanScreen';
import LogoScreen from '../Screens/LogoScreen';

// import ProductScreen from '../Screens/ProductScreen';


// Création de ma navigation StackNavigation 
var StackNavigator = createStackNavigator({
// pages de ma navigation sans Bottom   
 LogIn: { 
     screen:LogInScreen, 
     navigationOptions: {
         header: null
        }
    },

 SignIn: SignInScreen,

 Home: {
     screen:HomeScreen,
     headerMode: 'modal',
     header: 'null',
        navigationOptions: {
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
         headerTitle: <LogoScreen />,
         headerRight: <Image 
                         source={require('../../assets/pictoAccount.png')}
                         style={{height: 40, width: 40, marginRight: 10}}/>
        }
        
//  Product: ProductScreen
}
});

export default Navigation = createAppContainer(StackNavigator);
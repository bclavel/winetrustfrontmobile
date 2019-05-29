import React from 'react';
import {Image, View, Text} from 'react-native';

export default class LogoScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   
    return (
      <View style={{alignItems: 'center', width:'100%'}}>
      <Image
       source={require('../../assets/Logogrand.png')}
       style={{width:'100%', height:40, resizeMode:'contain'}}
      />
      </View>
    );
  }
}
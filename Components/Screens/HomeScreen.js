import React from 'react'; 
import { View, StyleSheet, Image, Text } from 'react-native';
import {  Button,  } from 'react-native-elements';



export default class HomeScreen extends React.Component {

    render(){
    return (
    <View 
    style={{flex:1, justifyContent:"center", alignItems:"center",backgroundColor: 'white' }}>
    <Image
      style= {styles.image}
      source={require('../../assets/tirebouchon.jpg')}
      />
    <Button
    buttonStyle={{ paddingRight: 100, paddingLeft: 100, marginTop: 40, marginBottom: 75}}
    title ="Scanner la bouteille"
    backgroundColor= "#22323F"
    onPress={ () => this.props.navigation.navigate('Scan')}
    />

    </View>
    )
   }
}

const styles = StyleSheet.create({
      image: {
              position: 'relative',
              width: 300, 
              height: 380,
              marginTop: 50,
              paddingTop: 30
            },
      formBorder: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        width: 200,
    
      }
    });

import React from 'react'; 
import { View, StyleSheet, Image, Text } from 'react-native';
import {  Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
    headerStyle: {
      Title: 'WineTrust',
      backgroundColor: '#711A1A',
    }, headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: <Text>Coucou</Text>,
    headerTitle: <Text>WineTrust</Text>,
    headerBackTitle: <Text>Back</Text>
  };

    render(){
    return (
    <View 
    style={{flex:1, justifyContent:"center", alignItems:"center",backgroundColor: 'white' }}>
    <Image
            style= {styles.image}
            source={require('../../assets/tirebouchon.png')}
            />
    <Button
    buttonStyle={{ paddingRight: 130, paddingLeft: 130, marginTop: 40, marginBottom: 75}}
    title ="Scanner la bouteille"
    backgroundColor= "#22323F"
    // onPress={this.handleSumbit} Correspond à la nav vers le scann
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

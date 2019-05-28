import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Divider, Button} from 'react-native-elements';

export default class LogInScreen extends React.Component {
    constructor(){
        super()
        this.state = {
          email: '',
          password: '',
          errorMessage: ''
        }
      }

      render() {
        return (
          <View style={{flex:1, justifyContent: "center", alignItems: "center", backgroundColor: '#711A1A'}}>
            <Image
            style= {styles.image}
            source={require('../../assets/Logo.png')}
            />
    
           <FormLabel labelStyle={{color:"white"}}>Email</FormLabel>
           <FormInput containerStyle={styles.formBorder}
             onChangeText={(e) => this.setState({email: e})}/>
           
           <Divider style={{ height:1, backgroundColor: "white"}} />
          
            <FormLabel labelStyle={{color:"white", marginTop: 30}}>Mot de passe</FormLabel>
            <FormInput inputStyle={{textDecorationColor: "white"}}
              containerStyle={styles.formBorder}
              secureTextEntry={true}
              onChangeText={(e) => this.setState({password: e})}/>
           
            <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
          
            <Button
              buttonStyle={{ paddingRight: 130, paddingLeft: 130, marginTop: 75}}
              title= "ENTRER"
              color= "white"
              backgroundColor= "#22323F"
              onPress={ () => this.props.navigation.navigate('Home')}
            />
            <TouchableHighlight onPress={ () => this.props.navigation.navigate('Home')}>
              <Text p style={{color: "white", marginTop: 10,}}> 
                Pas de compte ? C’est par ici!
              </Text>
            </TouchableHighlight>
            
    
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      image: {
              position: 'relative',
              width: 236, 
              height: 148,
              marginBottom: 80
            },
      formBorder: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        width: 200,
    
      }
    });


      
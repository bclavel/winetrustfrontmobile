import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Divider, Button} from 'react-native-elements';

export default class LogInScreen extends React.Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
          Email: '',
          Password: '',
          errorMessage: ''
        }
      }

      handleSubmit(){

        console.log('vérification du user enclenchée..');
      
        // We can store our sent data (available in our state) in a variable called signupData
        var checkUpData = JSON.stringify({
          email: this.state.Email,
          password: this.state.Password,
        });
      
        // Since we are going to fetch with the ES5 syntax, we need to store this (an EST5 function has got its own this)
        const ctx = this;
      
        fetch(`${ipAdress}/signin`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: checkUpData
        }
        ).then(function(res, err){
          return res.json()
        }).then(data => {
          console.log(data)
            data.isUserExist
              ? this.props.navigation.navigate('Home')
              : this.setState({errorMessage: 'Identifiants erronés, veuillez essayer à nouveau'})
        }).catch(function(err){
          console.log(err)
        })
      }

      render() {
        return (
          <View style={{flex:1, justifyContent: "center", alignItems: "center", backgroundColor: '#711A1A'}}>
            <Image
            style= {styles.image}
            source={require('../../assets/Logo.png')}
            />
    
           {/* <FormLabel labelStyle={{color:"white"}}>Email</FormLabel> */}
           <FormInput 
            containerStyle={styles.formBorder}
            inputStyle={{color: 'white'}}
             onChangeText={(e) => this.setState({Email: e})}
             placeholder='Email...'
             placeholderTextColor= 'white'/>
           
           <Divider style={{ height:1, backgroundColor: "white"}} />
          
            {/* <FormLabel labelStyle={{color:"white", marginTop: 30}}>Mot de passe</FormLabel> */}
            <FormInput 
              placeholder= 'Mot de passe...'
              placeholderTextColor= 'white'
              inputStyle={{color: 'white'}}
              containerStyle={styles.formBorder}
              secureTextEntry={true}
              onChangeText={(e) => this.setState({Password: e})}/>
           
            <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
          
            <Button
              buttonStyle={{ paddingRight: 130, paddingLeft: 130, marginTop: 75}}
              fontFamily = 'Roboto'
              title= "ENTRER"
              color= "white"
              backgroundColor= "#22323F"
              onPress={this.handleSubmit}
            />
            <TouchableHighlight onPress={ () => this.props.navigation.navigate('SignUp')}>
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
        width: 300,
    
      }
    });


      
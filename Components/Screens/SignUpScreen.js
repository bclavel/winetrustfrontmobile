import React from 'react'; 
import { View, StyleSheet} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Divider, Button} from 'react-native-elements';

import ipAdress from '../../config';


export default class SignInScreen extends React.Component {

    constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
        Nom: '',
        Prenom: '',
        Email: '',
        Password: ''
      }
    }

    handleSubmit(){

      console.log('enregistrement pris en charge...');
    
      // We can store our sent data (available in our state) in a variable called signupData
      var consumerData = JSON.stringify({
        lastName: this.state.Nom,
        firstName: this.state.Prenom,
        email: this.state.Email,
        password: this.state.password,
      });
    
      // Since we are going to fetch with the ES5 syntax, we need to store this (an EST5 function has got its own this)
      const ctx = this;
    
      fetch(`${ipAdress}/createuser`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: consumerData
      }
      ).then(function(res, err){
        return res.json()
      }).then(data => {
        console.log('ici mon data', data)
          data.result
            ? this.props.navigation.navigate('Home')
            : this.setState({errorMessage: 'Identifiants de connexion déja connus'})
      }).catch(function(err){
        console.log(err)
      })
    }

    render(){
      return(
      <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: 'white' }}>

        {/* <FormLabel>Nom</FormLabel> */}
        <FormInput style={{marginTop: 30}}
          inputStyle={{color: 'black'}}
          containerStyle={styles.formBorder}
          onChangeText={(e) => this.setState({Nom: e})}
          placeholder='Nom'
          placeholderTextColor= 'black'/>


        {/* <FormLabel>Prénom</FormLabel> */}
        <FormInput containerStyle={styles.formBorder}
          inputStyle={{color: 'black'}}
          onChangeText={(e) => this.setState({Prenom: e})}
          placeholder='Prénom'
          placeholderTextColor= 'black'/>

        {/* <FormLabel>Email</FormLabel> */}
        <FormInput containerStyle={styles.formBorder}
          inputStyle={{color: 'black'}}
          onChangeText={(e) => this.setState({Email: e})}
          placeholder='Email'
          placeholderTextColor= 'black'/>

        {/* <FormLabel>Password</FormLabel> */}
        <FormInput containerStyle={styles.formBorder}
          inputStyle={{color: 'black'}}
          secureTextEntry={true}
          onChangeText={(e) => this.setState({password: e})}
          placeholder='Mot de passe'
          placeholderTextColor= 'black'/>


        <Divider style={{height:20}}/>
        <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>

        <Button
          buttonStyle={{ paddingRight: 130, paddingLeft: 130, marginTop: 75, marginBottom: 75}}
          title ="S'ENREGISTRER"
          backgroundColor= "#22323F"
          onPress={this.handleSubmit}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
formBorder: {
  borderBottomColor: 'grey',
  borderBottomWidth: 1,
  width: 330,
  marginBottom: 20
}
});

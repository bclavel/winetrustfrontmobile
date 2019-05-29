import React from 'react'; 
import { View, StyleSheet} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Divider, Button} from 'react-native-elements';


export default class SignInScreen extends React.Component {

    constructor(){
    super()
    this.state = {
        Nom: '',
        Prenom: '',
        Email: '',
        Password: '',
        ConfirmationMdp: ''
      }
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
          onChangeText={(e) => this.setState({email: e})}
          placeholder='Email'
          placeholderTextColor= 'black'/>

        {/* <FormLabel>Password</FormLabel> */}
        <FormInput containerStyle={styles.formBorder}
          inputStyle={{color: 'black'}}
          secureTextEntry={true}
          onChangeText={(e) => this.setState({password: e})}
          placeholder='Mot de passe'
          placeholderTextColor= 'black'/>

        {/* <FormLabel>Confirmez le mot de passe</FormLabel> */}
        <FormInput containerStyle={styles.formBorder}
          inputStyle={{color: 'black'}}
          secureTextEntry={true}
          onChangeText={(e) => this.setState({ConfirmationMdp: e})}
          placeholder='Confirmez votre mot de passe'
          placeholderTextColor= 'black'/>

        <Divider style={{height:20}}/>
        <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>

        <Button
          buttonStyle={{ paddingRight: 130, paddingLeft: 130, marginTop: 75, marginBottom: 75}}
          title ="S'ENREGISTRER"
          backgroundColor= "#22323F"
          onPress={ () => this.props.navigation.navigate('Home')}
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

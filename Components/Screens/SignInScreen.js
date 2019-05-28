import React from 'react'; 
import { View, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Divider, Button} from 'react-native-elements';

export default class SignInScreen extends React.Component {

  static navigationOptions = {
    title: 'Enregistrement',
    headerStyle: {
      backgroundColor: '#711A1A'
    },
    headerTintColor: '#fff'
  };

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
      <View style={{flex:1, justifyContent:"center", alignItems:"center",backgroundColor: 'white' }}>

        <FormLabel>Nom</FormLabel>
        <FormInput containerStyle={styles.formBorder}
          onChangeText={(e) => this.setState({Nom: e})}/>

        <FormLabel>Prénom</FormLabel>
        <FormInput containerStyle={styles.formBorder}
          onChangeText={(e) => this.setState({Prenom: e})}/>

        <FormLabel>Email</FormLabel>
        <FormInput containerStyle={styles.formBorder}
          onChangeText={(e) => this.setState({email: e})}/>

        <FormLabel>Password</FormLabel>
        <FormInput containerStyle={styles.formBorder}
          secureTextEntry={true}
          onChangeText={(e) => this.setState({password: e})}/>

        <FormLabel>Confirmez le mot de passe</FormLabel>
        <FormInput containerStyle={styles.formBorder}
          secureTextEntry={true}
          onChangeText={(e) => this.setState({ConfirmationMdp: e})}/>

        <Divider style={{height:20}}/>
        <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>

        <Button
          buttonStyle={{ paddingRight: 130, paddingLeft: 130, marginTop: 75, marginBottom: 75}}
          title ="S'enregistrer"
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
  width: 200,
}
});

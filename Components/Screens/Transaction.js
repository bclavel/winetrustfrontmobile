import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Divider, Button} from 'react-native-elements';

export default class Transaction extends React.Component {
    constructor(){
        super()
        this.state = {

        }
      }

      render() {
        return (
          <View style={{flex:1, backgroundColor : '#C4C4C4', paddingTop : 5, paddingBottom : 5 }}>
            <Text style={styles.standardTxt}><Text style={{fontWeight: 'bold'}}>Identifiant transaction :</Text> 0x4apfe34fae55bfgt56</Text>
            <Text style={styles.standardTxt}><Text style={{fontWeight: 'bold'}}>Nom du vendeur :</Text> Domaine Beauregard</Text>
            <Text style={styles.standardTxt}><Text style={{fontWeight: 'bold'}}>Date :</Text> 08/05/2019</Text>
            <Text style={styles.standardTxt}><Text style={{fontWeight: 'bold'}}>Nom de l'acheteur:</Text> Intermarché Dinard</Text>
            <Text style={styles.standardTxt}><Text style={{fontWeight: 'bold'}}>Lieu :</Text> Dinard, France</Text>
            <Text style={styles.standardTxt}><Text style={{fontWeight: 'bold'}}>Statut de la transaction :</Text> Validée</Text>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      standardTxt : {
        fontFamily : 'Roboto',
        fontSize : 14,
        marginLeft : 5,
        marginRight : 5,
      },
    });

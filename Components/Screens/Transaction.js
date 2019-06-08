import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Divider, Button} from 'react-native-elements';
import { connect } from 'react-redux';

export default class Transaction extends React.Component {
    constructor(){
        super()
        this.state = {

        }
      }

      render() {
        console.log("this.props",this.props);
        
        return (
          <View style={{flex:1, backgroundColor : '#E2DAD4', paddingTop : 7 }}>
            <Text style={styles.standardTxt}><Text style={{fontWeight: 'bold'}}>Nom du vendeur : </Text>{this.props.sellerName} </Text>
            <Text style={styles.standardTxt}><Text style={{fontWeight: 'bold'}}>Date : </Text>{this.props.transactValidationDate}</Text>
            <Text style={styles.standardTxt}><Text style={{fontWeight: 'bold'}}>Nom de l'acheteur: </Text>{this.props.buyerName}</Text>
            <Text style={styles.standardTxt}><Text style={{fontWeight: 'bold'}}>Lieu : </Text>{this.props.buyerPostalAddress}</Text>
            <Text style={styles.standardTxt}><Text style={{fontWeight: 'bold'}}>Statut de la transaction : </Text>{this.props.transactStatus}</Text>
            <Divider style={{ backgroundColor: 'black', marginTop : 15, marginRight: 30, marginLeft: 30}} />
          </View>
        );
      }
    }

// function mapStateToProps(state) {
//       return {product: state.product}
// }

// export default connect(
//     mapStateToProps,
//     null
//  ) (Transaction);

    const styles = StyleSheet.create({
      standardTxt : {
        fontFamily : 'Roboto',
        fontSize : 14,
        marginLeft : 5,
        marginRight : 5,
      },
    });

import React from 'react';
import { Platform, StyleSheet, Text, View, Image, WebView, ScrollView, Linking } from 'react-native';
import { Divider, Button } from 'react-native-elements';
import Transaction from './Transaction';

import { connect } from 'react-redux'; 

class ProductScreen extends React.Component {
    constructor(){
        super()
        this.state = {

        }
      }

      render() {
        return (
          <ScrollView style={{flex : 1 }}>
            <Image style= {styles.image} source= {{uri: this.props.product.productMobImg}}/>
            <Text style={styles.h1}>{this.props.product.productCuvee + ' ' + this.props.product.productMillesime}</Text>
            <Text style={styles.h4}>{this.props.product.productDomaine}</Text>
            <Text style={styles.h4}>{this.props.product.productAppellation}</Text>
            <Text style={styles.h4}>{this.props.product.productRegion + ', ' + this.props.product.productCountry}</Text>
            <Button title='Acheter 49,90€' buttonStyle={{ marginTop: 20 }} color= "white" backgroundColor= "#22323F"/>
            <Text style={styles.smallTxt}>Vendu par Ovinia.com</Text>
            <Divider style={{ backgroundColor: 'black', marginTop : 15, marginBottom : 15 }} />
            <Text style={styles.h2}>{'Découvrez le ' + this.props.product.productDomaine }</Text>
            <Text style={styles.standardTxt} onPress={()=> {Linking.openURL("http://"+this.props.product.productdomainUrl)}}>{this.props.product.domainUrl}</Text>
            <View style={{flex: 1, flexDirection:'row', alignItems : 'center'}}>
              <Image style={styles.imagePicto} source={require('../../assets/picto_email.png')}/>
              <Text style={styles.standardTxt}>{this.props.product.domainEmail}</Text>
            </View>
            <View style={{flex: 1, flexDirection:'row', alignItems : 'center'}}>
              <Image style={styles.imagePicto} source={require('../../assets/picto_facebook.png')}/>
              <Text style={styles.standardTxt}>{this.props.product.domainFacebook}</Text>
            </View>
            <Divider style={{ backgroundColor: 'black', marginTop : 15, marginBottom : 15 }} />
            <Text style={styles.h2}>Caractéristiques</Text>
            <Text style={styles.standardTxt}><Text style={{fontWeight: 'bold'}}>Cépages : </Text>{this.props.product.productCepages}</Text>
            <Text style={styles.standardTxt}><Text style={{fontWeight: 'bold'}}>Accord mets & vin : </Text>{this.props.product.productAccords}</Text>
            <Divider style={{ backgroundColor: 'black', marginTop : 15, marginBottom : 15 }} />
            <Text style={styles.h2}>Histoire du domaine</Text>
            <View style={{ height: 300 }}>
              <WebView
                     style={ styles.WebViewContainer }
                     javaScriptEnabled={true}
                     domStorageEnabled={true}
                     source= {{uri: this.props.product.productYoutube.replace('watch?v=', 'embed/') }}
             />
            </View>
            <Text style={styles.standardTxt}></Text><Text style={{fontStyle : 'italic'}}>{this.props.product.domainHistory}</Text>
            <Divider style={{ backgroundColor: 'black', marginTop : 15, marginBottom : 15 }} />
            <Text style={styles.h2}>Historique des transactions</Text>
            <Transaction />
          </ScrollView>
        );
      }
    };


    function mapStateToProps(state) {
      return {product: state.product}
    }

    export default connect(
      mapStateToProps,
      null
    ) (ProductScreen);

    const styles = StyleSheet.create({
      h1 :{
        fontFamily : 'Roboto',
        fontSize : 24,
        marginLeft : 5,
        marginRight : 5,
        marginBottom : 10
      },
      h2 :{
        fontFamily : 'Roboto',
        fontSize : 20,
        marginLeft : 5,
        marginRight : 5,
        marginBottom : 5
      },
      h4 :{
        fontFamily : 'Roboto',
        fontSize : 16,
        marginLeft : 5,
        marginRight : 5,
      },
      smallTxt: {
        fontFamily : 'Roboto',
        fontSize : 13,
        marginLeft : 5,
        marginRight : 5,
        textAlign : 'center'
      },
      standardTxt : {
        fontFamily : 'Roboto',
        fontSize : 14,
        marginLeft : 5,
        marginRight : 5,
      },
      WebViewContainer : {
        marginTop: (Platform.OS == 'ios') ? 20 : 10,
        marginBottom : 10
      },
      imagePicto : {
        marginLeft : 5,
      },
      image: {
        width: '100%',
        height: 160
      }
    });

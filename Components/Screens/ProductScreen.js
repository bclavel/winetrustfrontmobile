import React from 'react';
import { Platform, StyleSheet, Text, View, Image, WebView, ScrollView } from 'react-native';
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
            <Image style= {styles.image} source={require('../../assets/beauregard4.jpg')}/>
            <Text style={styles.h1}>{this.props.product.productDomaine}</Text>
            <Text style={styles.h4}>Domaine Beauregard</Text>
            <Text style={styles.h4}>Pomerol AOC</Text>
            <Text style={styles.h4}>Région de Bordeaux, France</Text>
            <Button title='Acheter 49,90€' buttonStyle={{ marginTop: 20 }} color= "white" backgroundColor= "#22323F"/>
            <Text style={styles.smallTxt}>Vendu par Ovinia.com</Text>
            <Divider style={{ backgroundColor: 'black', marginTop : 15, marginBottom : 15 }} />
            <Text style={styles.h2}>Découvrez le domaine Beauregard</Text>
            <Text style={styles.standardTxt}>www.chateau-beauregard.com</Text>
            <View style={{flex: 1, flexDirection:'row', alignItems : 'center'}}>
              <Image style={styles.imagePicto} source={require('../../assets/picto_email.png')}/>
              <Text style={styles.standardTxt}>Par email</Text>
            </View>
            <View style={{flex: 1, flexDirection:'row', alignItems : 'center'}}>
              <Image style={styles.imagePicto} source={require('../../assets/picto_facebook.png')}/>
              <Text style={styles.standardTxt}>Page Facebook</Text>
            </View>
            <Divider style={{ backgroundColor: 'black', marginTop : 15, marginBottom : 15 }} />
            <Text style={styles.h2}>Caractéristiques</Text>
            <Text style={styles.standardTxt}><Text style={{fontWeight: 'bold'}}>Cépages</Text> : 95% Pinot noir, 5% Merlot</Text>
            <Text style={styles.standardTxt}><Text style={{fontWeight: 'bold'}}>Accord mets & vin</Text> : Viande rouge, Gibier</Text>
            <Divider style={{ backgroundColor: 'black', marginTop : 15, marginBottom : 15 }} />
            <Text style={styles.h2}>Histoire du domaine</Text>
            <View style={{ height: 300 }}>
              <WebView
                     style={ styles.WebViewContainer }
                     javaScriptEnabled={true}
                     domStorageEnabled={true}
                     source={{uri: 'https://www.youtube.com/embed/jGPVRxth6Dk' }}
             />
            </View>
            <Text style={styles.standardTxt}><Text style={{fontStyle : 'italic'}}>Propriété des familles Moulin et Cathiard depuis 2014, le Château Beauregard renaît autour de sa fonction première : produire un grand vin de Pomerol au cœur d’un lieu historiquement dédié à la résidence de ses hôtes.</Text>
            L’histoire de Beauregard remonte au XIIe siècle et aux Chevaliers Hospitaliers de Saint Jean de Jérusalem, à qui l’on doit la célèbre Croix des Templiers, emblème de Beauregard. Actifs dans la région de Pomerol et propriétaires d’un petit manoir ils cultivaient déjà ces terres. Sur ce site, la famille Beausoleil fait construire cinq siècles plus tard un premier édifice, qui fut remplacé à l’époque napoléonienne par le Château actuel : une magnifique chartreuse girondine, qui s’ouvre sur une terrasse avec deux pigeonniers surplombant des douves et un très beau parc, œuvre d’un élève de Victor Louis, architecte du Grand Théâtre de Bordeaux.</Text>
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
        width: '100%'
      }
    });

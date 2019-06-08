import React from 'react';
import { Platform, StyleSheet, Text, View, Image, WebView, ScrollView, Linking, TouchableOpacity, BreadcrumbItem } from 'react-native';
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
    var openDomainUrl = this.props.product.domainUrl;
    var openFacebook = this.props.product.domainFacebook;
    var openMail = "mailto:" + this.props.product.domainEmail;

    console.log('ceci est mon produit', this.props.product)

    var transactionList = this.props.product.historiqueTransactions.map((transaction, i)=>{

      if (transaction.transactStatus === "validée") {
        return(
          <Transaction
          toto="toto"
          key={i}
          transactStatus = {transaction.transactStatus}
          transactAddressEth = {transaction.transactAddressEth}
          sellerAddressEth = {transaction.sellerAddressEth}
          sellerName = {transaction.sellerName}
          sellerPostalAddress= {transaction.sellerPostalAddress}
          buyerAddressEth = {transaction.buyerAddressEth}
          buyerName = {transaction.buyerName}
          buyerPostalAddress= {transaction.buyerPostalAddress}
          transactValidationDate = {transaction.transactValidationDate} />
        )
      }
      console.log("transaction", transaction);
    })

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
        <TouchableOpacity>
          <Text style={styles.standardTxt} onPress={()=> {Linking.openURL(openDomainUrl)}}>{this.props.product.domainUrl}</Text>
        </TouchableOpacity>
        <View style={{flex: 1, flexDirection:'row', alignItems : 'center'}}>
          <Image style={styles.imagePicto} source={require('../../assets/picto_email.png')}/>
          <TouchableOpacity>
            <Text style={styles.standardTxt} onPress={()=> {Linking.openURL(openMail)}}>{this.props.product.domainEmail}</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection:'row', alignItems : 'center'}}>
          <Image style={styles.imagePicto} source={require('../../assets/picto_facebook.png')}/>
          <TouchableOpacity>
            <Text style={styles.standardTxt} onPress={()=> {Linking.openURL(openFacebook)}}>{this.props.product.domainFacebook}</Text>
          </TouchableOpacity>
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
        <Text style={styles.standardTxt}></Text><Text style={{fontStyle : 'italic', marginRight:7, marginLeft: 7}}>{this.props.product.domainHistory}</Text>
        <Divider style={{ backgroundColor: 'black', marginTop : 15, marginBottom : 15 }} />
        <Text style={styles.h2}>Historique des transactions </Text>
          {transactionList}
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
        marginLeft : 10,
        marginRight : 10,
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

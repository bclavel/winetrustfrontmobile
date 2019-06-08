import React from 'react';
import { Button, Text, StyleSheet,View, Image } from 'react-native';
import { Constants, Permissions, BarCodeScanner } from 'expo';

import { connect } from 'react-redux'; 

import ipAdress from '../../config';

class ScanScreen extends React.Component {
  
  
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#711A1A'
    },
    headerTintColor: '#fff'
    };

    state = {
        hasCameraPermission: null,
        scanned: false,
      };
    
      async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }

    
      render() {
        const { hasCameraPermission, scanned } = this.state;
    
        if (hasCameraPermission === null) {
          return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        }
        
        return (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
              style={[StyleSheet.absoluteFillObject, styles.camera]}
            />
   
            {/* {scanned && (
              <Button style={[styles.button]}
                title={'Get your scan'}
                style= {{backgroundColor: '#711A1A'}}
                onPress={ () => this.props.navigation.navigate('Product')}
              />
            )} */}
          
            <Image
            style= {styles.carre}
            source={require('../../assets/scanqr.png')}
            />
          </View>
        );
      }
    
      handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true });
        // alert(`Votre bouteille a bien été scannée! ${type}  ${data}`);
        console.log(data);

        console.log('signin from front handled...');

        fetch(`${ipAdress}/getproductmobile?producerHash=${data}`)
        .then((res, err)  => res.json() // only one element to return so no need to add {} and no need to use the key word return
        ).then(product => {
         console.log('ScanScreen : voici ma data', product)
          if (product){
            this.props.handleProduct(
              product.ownerAddressEth,
              product.productStatus,
              product.producerHash,
              product.productHash,
              product.productCreationDate,
              product.productAddressEth,
              product.producerAddressEth,
              product.productDomaine,
              product.productCuvee,
              product.productYoutube, 
              product.productDeskImg,
              product.productMobImg,
              product.productMillesime,
              product.productCepages,
              product.productAppellation,
              product.productRegion,
              product.productCountry,
              product.productQuality,
              product.domainHistory,
              product.productAccords,
              product.domainPostalAddress,
              product.domainUrl,
              product.domainFacebook,
              product.domainEmail,
              product.historiqueTransactions)
              this.props.navigation.navigate('Product')

          } else {
            this.setState({errorMessage: 'Wrong credentials, try again...'})
          }
          }).catch(err => {
        console.log(err)
        })
        }
        // fecth vers la route back qui va chercher le produit
        // route get product, en paramètre on passe le hash 
        // dans le back je fais un find(dans la base) pour un produit correspondant à ce hash,
        // si jamais il existe, renvoie du back vers le front en res.json
        // dans le .then, exploitation des données recues et balance dans le reducer

      };

const styles = StyleSheet.create({
  camera:{
    zIndex: 1
  },
  button:{
    zIndex: 1
  },
  carre: {
    zIndex:3000,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode:'cover'
  }
});

// Création du composant container 
function mapDispatchToProps (dispatch){
  return {
    handleProduct : function(
      ownerAddressEth,
      productStatus,
      producerHash,
      productHash,
      productCreationDate,
      productAddressEth,
      producerAddressEth,
      productDomaine,
      productCuvee,
      productYoutube, 
      productDeskImg,
      productMobImg,
      productMillesime,
      productCepages,
      productAppellation,
      productRegion,
      productCountry,
      productQuality,
      domainHistory,
      productAccords,
      domainPostalAddress,
      domainUrl,
      domainFacebook,
      domainEmail,
      historiqueTransactions) 
      {
      dispatch({
        type: 'scanproduct',
        ownerAddressEth: ownerAddressEth,
        productStatus : productStatus,
        producerHash: producerHash,
        productHash: productHash,
        productCreationDate: productCreationDate,
        productAddressEth: productAddressEth,
        producerAddressEth: producerAddressEth,
        productDomaine: productDomaine,
        productCuvee : productCuvee,
        productYoutube: productYoutube,
        productDeskImg : productDeskImg,
        productMobImg :  productMobImg,
        productMillesime : productMillesime,
        productCepages : productCepages,
        productAppellation : productAppellation,
        productRegion : productRegion,
        productCountry :  productCountry,
        productQuality : productQuality,
        domainHistory : domainHistory,
        productAccords : productAccords, 
        domainPostalAddress : domainPostalAddress,
        domainUrl : domainUrl,
        domainFacebook :  domainFacebook,
        domainEmail : domainEmail,
        historiqueTransactions : historiqueTransactions
      })
    }
  }
}

export default connect (
  null, 
  mapDispatchToProps
)(ScanScreen); 


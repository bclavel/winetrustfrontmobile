import React from 'react';
import { Button, Text, StyleSheet,View, Image } from 'react-native';
import { Constants, Permissions, BarCodeScanner } from 'expo';

export default class ScanScreen extends React.Component {
  
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
              justifyContent: 'flex-end',
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
        alert(`Votre bouteille a bien été scannée! ${type}  ${data}`);
        console.log(data);
        this.props.navigation.navigate('Product');
      };
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
    position: 'absolute',
    top: 170,
    left: 60,
    bottom: 30,
    right: 50,
    resizeMode:'cover'
  }
});


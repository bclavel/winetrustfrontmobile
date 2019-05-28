import React from 'react';
import { style, StyleSheet, Text, View, Image } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Divider, Button} from 'react-native-elements';

import Navigation from './Components/Navigation/Navigation';

export default class App extends React.Component {

  render() {
    return (
        <Navigation/>
    );
  }
}

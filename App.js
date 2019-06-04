import React from 'react';
import { style, StyleSheet, Text, View, Image } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Divider, Button} from 'react-native-elements';

import Navigation from './Components/Navigation/Navigation';

import product from './Reducers/product.reducer';

import Provider from 'react-redux';

import { createStore, combineReducers } from 'redux';

const store = createStore(combineReducers({product}));

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  }
}

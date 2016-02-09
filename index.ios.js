/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} from 'react-native';


import Navigation from './Components/Navigation';

class AwesomeProject extends Component {
  
  render() {
    return (
      <Navigation />
    );
  }
}



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);


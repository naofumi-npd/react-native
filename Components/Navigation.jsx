 'use strict';
import React, {
 NavigatorIOS,
 Navigator,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'; 


import LoginView from './LoginView';

 
class Navigation extends Component {
    render() {
    return (
      <NavigatorIOS
          style={styles.wrapper} 
            initialRoute={{
              component: LoginView,
              title: 'Login',
      }}/>
    );
  }
}


const styles = StyleSheet.create({
  wrapper:{
    flex:1
  }
});

module.exports = Navigation;
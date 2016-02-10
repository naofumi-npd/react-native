'use strict';
import React, {
 NavigatorIOS,
  Component,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  TextInput,
  ListView,
  Image,

} from 'react-native'; 


import Dashboard from './Dashboard';

var alldata = [{name: 'chris'}, {name: 'jennifer'}, {name: 'james' }];

class Confirm extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2,});

    this.state = {
      dataSource : ds.cloneWithRows(this.props.orderItems)
    };
  }


  render() {
    return (

      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMenu}
        style={styles.listView}/>
    );
  }

  renderMenu(menu) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: menu.image}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.description}>{menu.name}</Text>
        </View>
      </View>
    );
  }
}

 
var styles = StyleSheet.create({
  wrapper:{
    
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    paddingLeft:5,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});



module.exports = Confirm;
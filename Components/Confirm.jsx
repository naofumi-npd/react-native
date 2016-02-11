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


class Confirm extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2,});
    
    this.state = {
      dataSource : ds.cloneWithRows(this.props.orderItems)
    };
  }

  componentDidMount() {
    var route = this.props.navigator.navigationContext.currentRoute;
    // update onRightButtonPress func
    route.rightButtonTitle ='Order';
    var orderDetail = {};
    orderDetail.tableNo = Math.floor((Math.random() * 10) + 1);
    orderDetail.order = this.props.orderItems;


    route.onRightButtonPress =  () => {
      fetch('http://localhost:4200/order', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order : orderDetail
        })
      })
      .then((response) => response.text())
        .then((responseText) => {
          this.props.navigator.push({
              component: Dashboard,
          })
        })
        .catch((error) => {
          alert("Error");
        });


      alert("order sent");
        this.props.navigator.pop({
          component: Confirm,
        });
    };
    // component will not rerender
    this.props.navigator.replace(route);
  
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
          <Text style={styles.description}>{menu.name} x {menu.quantity}</Text>
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
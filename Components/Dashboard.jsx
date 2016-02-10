/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';



REQUEST_URL = 'http://127.0.0.1:8000/api/menu/';



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      order:[]
    };
  }

  collectData(){
   alert(10);
  }

  componentDidMount() {
    this.fetchData();
  }

  calculateOrder(){
    alert(1);
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          order:responseData,
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.wrapper}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMenu}
        style={styles.listView}/>
        </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading menu...
        </Text>
      </View>
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
          <TextInput style={styles.searchbox}
          keyboardType="numeric"
          onChangeText={}
          />
      </View>
    );
  }
}
 
var styles = StyleSheet.create({
  wrapper:{
    paddingTop:35
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
  searchbox: {
    marginTop: 34,
    padding: 3,
    fontSize: 20,
    borderColor: 'red',
    borderWidth: 1,
    height: 30,
    paddingRight: 8,
    marginRight: 8,
    flexDirection: 'row',
    width:50
  },
});
 
module.exports = Dashboard;
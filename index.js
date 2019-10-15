
import React, { Component } from 'react';
import { AppRegistry, Text, View ,StyleSheet} from 'react-native';


export default class myapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    );
  }

}
const styles=StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'grey',
      alignItems:'center',
      justifyContent:'center',

  },

});
AppRegistry.registerComponent('myapp', () => myapp);

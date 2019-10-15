
import React, { Component } from 'react';
import { AppRegistry, Text, View,StyleSheet } from 'react-native';



export default class Component4 extends Component {
    render() {

        return (
            <View ><Text>hello world</Text></View>
        );
    }

}


AppRegistry.registerComponent('Component4', () => Component4);

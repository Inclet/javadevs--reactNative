import React, { Component } from 'react';
import { View, Text, AsyncStorage, Linking, Platform } from "react-native";
import commonStyle from '../Styles/common.style';
class Home extends Component {
  state = {};

  render() {
    return (
      <View style={commonStyle.normalPageLayout}>
        <Text style={{ marginTop: 40, fontSize: 25 }}>Welcome</Text>
      </View>
    );
  }
}

export default Home;

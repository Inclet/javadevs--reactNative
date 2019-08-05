import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import common from "../Styles/common.style";
import loginImage from "../Assets/Images/waiting.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import theme from "../Styles/theme.style";

class Login extends Component {
  state = {};
  render() {
    return (
      <View style={common.normalPageLayout}>
        <Text style={styles.brandLogo}>JavaDevs</Text>
        <Image source={loginImage} style={styles.loginImageStyle} />
        <View style={styles.innerContainerStyle}>
          <Text style={styles.placeHolderLabelStyle}>Username/Email</Text>
          <TextInput />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  brandLogo: {
    ...common.brandStyle,
    marginTop: 35
  },
  loginImageStyle: {
    width: wp("100%"),
    height: hp("30%")
  },
  innerContainerStyle: {
    width: wp("85%")
  },
  placeHolderLabelStyle: {
    fontSize: 23,
    color: theme.SECONDARY_COLOR,
    marginTop: 10
  }
});

export default Login;

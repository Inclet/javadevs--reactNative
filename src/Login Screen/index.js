import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import common from "../Styles/common.style";
import loginImage from "../Assets/Images/waiting.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import theme from "../Styles/theme.style";
import CommonButton from "../Common/Button";

class Login extends Component {
  state = {};
  render() {
      const { navigation } = this.props;
    return (
      <View style={common.normalPageLayout}>
        <Text style={styles.brandLogo}>JavaDevs</Text>
        <Image source={loginImage} style={styles.loginImageStyle} />
        <View style={styles.innerContainerStyle}>
          <Text style={styles.placeHolderLabelStyle}>Username/Email</Text>
          <TextInput
          style={styles.placeHolderStyle}
          placeholder="Your username or email"
          autoCapitalize="none"
          autoFocus={true}
          />
        </View>
        <View style={styles.innerContainerStyle}>
          <Text style={styles.placeHolderLabelStyle}>Password</Text>
          <TextInput
          style={styles.placeHolderStyle}
          secureTextEntry={true}
          placeholder="Password"
          />
        </View>
        <CommonButton
          label="Login"
          target={navigation}
          newMarginTop={0}
          page="APP"
          />
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
    width: wp("85%"),
    borderColor: theme.NORMAL_COLOR,
    borderBottomColor: theme.PRIMARY_COLOR,
    borderWidth: 2,
    marginBottom: 30,
    paddingBottom: 5
  },
  placeHolderLabelStyle: {
    fontSize: 23,
    color: theme.SECONDARY_COLOR,
    marginTop: 10
  },
  placeHolderStyle: {
      padding: 10
  }
});

export default Login;

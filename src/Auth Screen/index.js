import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import common from "../Styles/common.style";
import Layout from "../Common/Layout/index";
import authImage from "../Assets/Images/Login.png";
import CommonButton from "../Common/Button";

const AuthScreen = ({ navigation }) => {
  return (
    <Layout target={navigation} currentPage={3}>
      <View style={common.innerPageLayout}>
        <Image source={authImage} style={styles.authImageStyle} />
        <Text style={common.brandStyle}>JavaDevs</Text>
        <CommonButton
          target={navigation}
          label="Login"
          newMarginTop={60}
          page="Login"
        />
        <CommonButton
          target={navigation}
          label="Sign Up"
          newMarginTop={70}
          page="SignUp"
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  authImageStyle: {
    width: wp("100%"),
    height: hp("40%"),
    marginTop: 30
  }
});

export default AuthScreen;

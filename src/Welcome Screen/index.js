import React from "react";
import welcomeImage from "../Assets/Images/developersd.png";
import Icon from "react-native-vector-icons/Ionicons";
import common from "../Styles/common.style";
import theme from "../Styles/theme.style";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { View, Text, StyleSheet, Image } from "react-native";
import Layout from "../Common/Layout/index";

const Welcome = ({ navigation }) => {
  return (
    <Layout target={navigation} currentPage={1}>
      <View style={common.innerPageLayout}>
        <Image source={welcomeImage} style={styles.welcomeImageStyle} />
        <Text style={styles.textStyle}>Welcome</Text>
        <Text style={styles.welcomeMsg}>We are so glad you're here</Text>
        <Icon
          data-testID="nextNavigator"
          name="ios-arrow-round-forward"
          size={70}
          style={styles.iconStyle}
          onPress={() => {
            navigation.navigate("AboutUs");
          }}
        />
      </View>
    </Layout>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.PRIMARY_COLOR,
    marginTop: -50
  },
  welcomeImageStyle: {
    marginTop: -20,
    width: wp("100%"),
    height: hp("70%")
  },
  welcomeMsg: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.SECONDARY_COLOR,
    marginTop: 30
  },
  iconStyle: {
    marginTop: 20,
    color: theme.PRIMARY_COLOR
  }
});

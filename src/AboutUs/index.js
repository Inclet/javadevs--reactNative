import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import theme from "../Styles/theme.style";
import common from "../Styles/common.style";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import AboutImage from "../Assets/Images/webdesign.png";
import Layout from "../Common/Layout/index";
import CommonButton from "../Common/Button/index";
const AboutUs = ({ navigation }) => {
  return (
    <Layout target={navigation} currentPage={2}>
      <View style={common.innerPageLayout}>
        <Image source={AboutImage} style={styles.aboutImageStyle} />
        <Text style={common.brandStyle}>JavaDevs</Text>
        <Text style={styles.sloganStyle}>We are in this together</Text>
        <Text style={styles.descriptionStyle}>
          Choose a java developer from a large pool of world-class developers.
        </Text>
        <CommonButton
          target={navigation}
          label="Let's Go"
          newMarginTop={80}
          page="AuthScreen"
        />
      </View>
    </Layout>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  aboutImageStyle: {
    width: wp("100%"),
    height: hp("30%"),
    marginTop: 50
  },
  sloganStyle: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.SECONDARY_COLOR,
    marginTop: 15
  },
  descriptionStyle: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.MEDIUM_COLOR,
    width: wp("80%"),
    textAlign: "center",
    marginTop: 30
  }
});

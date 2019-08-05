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
const AboutUs = ({ navigation }) => {
  return (
    <Layout target={navigation} currentPage={2}>
      <View style={common.innerPageLayout}>
        <Image source={AboutImage} style={styles.aboutImageStyle} />
        <Text style={styles.brandStyle}>JavaDevs</Text>
        <Text style={styles.sloganStyle}>We are in this together</Text>
        <Text style={styles.descriptionStyle}>
          Choose a java developer from a large pool of world-class developers.
        </Text>
        <TouchableOpacity
          data-testID="authScreenNavigator"
          onPress={() => {
            navigation.navigate("AuthScreen");
          }}
        >
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonLabelStyle}>Let's Go</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  aboutImageStyle: {
    width: wp("100%"),
    height: hp("30%"),
    marginTop: 50
  },
  brandStyle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.PRIMARY_COLOR,
    marginTop: 20
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
  },
  buttonStyle: {
    width: wp("70%"),
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 15,
    marginTop: 80
  },
  buttonLabelStyle: {
    color: theme.NORMAL_COLOR,
    fontSize: theme.FONT_SIZE_REGULAR,
    textAlign: "center"
  }
});

export default AboutUs;

import React from "react";
import welcomeImage from '../Assets/Images/developersd.png';
import Icon from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { View, Text, StyleSheet, Image } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.welcomeContainer}>
      <Image source={welcomeImage} style={styles.welcomeImageStyle} />
      <Text style={styles.textStyle}>Welcome</Text>
      <Text style={styles.welcomeMsg}>We are so glad you're here</Text>
      <Icon
        data-testID="nextNavigator"
        name="ios-arrow-round-forward"
        size={70}
        style={styles.iconStyle}
        onPress={() => navigation.navigate("AboutUs")}
      />
      <View style={styles.bottomPaginator}>
        <Icon
          style={[styles.paginatorStyle, { color: "#3735AB" }]}
          name="ios-radio-button-on"
          size={10}
        />
        <Icon
          data-testID="bottomNavigator"
          style={styles.paginatorStyle}
          name="ios-radio-button-on"
          size={10}
          onPress={() => navigation.navigate("AboutUs")}
        />
        <Icon
          style={styles.paginatorStyle}
          name="ios-radio-button-on"
          size={10}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 40,
    color: "#3735AB",
    marginTop: -50,
  },
  welcomeImageStyle: {
    marginTop: -20,
    width: wp("100%"),
    height: hp("70%")
  },
  welcomeMsg: {
    fontSize: 23,
    color: "#8686A9",
    marginTop: 30
  },
  iconStyle: {
    marginTop: 20,
    color: "#3735AB"
  },
  bottomPaginator: {
    marginTop: -20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginatorStyle: {
    padding: 5,
    color: "#C4C4C4"
  }
});

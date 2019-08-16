import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import commonStyle from "../Styles/common.style";
import themeStyle from "../Styles/theme.style";
import anImage from "../Assets/Images/webdesign.png";
class Home extends Component {
  state = {};

  render() {
    return (
      <View style={commonStyle.LeftAlignLayout}>
        <Text style={styles.pageTitleStyle}>Top Java Developers</Text>
        <View style={styles.developerCardStyle}>
          <Text>01</Text>
          <Image source={anImage} style={styles.profileImageStyle} />
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  pageTitleStyle: {
    fontSize: 20,
    marginLeft: 10,
    color: themeStyle.PRIMARY_COLOR,
  },
  profileImageStyle: {
    width: 61,
    height: 66
  },
  developerCardStyle: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
});

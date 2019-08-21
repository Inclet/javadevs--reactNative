import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Share } from 'react-native';
import commonStyle from "../Styles/common.style";
import themeStyle from "../Styles/theme.style";
import ButtonWithIcon from "../Common/ButtonsWithIcons";
import githubIcon from '../Assets/Images/GitHub-Mark-Light-32px.png';
import shareIcon from "../Assets/Images/share-but.png";
class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
    headerTitleStyle: {
      color: themeStyle.PRIMARY_COLOR,
      fontSize: 20,
    },
    headerStyle: {
      borderBottomWidth: 0,
      marginBottom: 10,
    },
    headerTintColor: themeStyle.PRIMARY_COLOR
  };
  state = {};
  render() {
    const {
      navigation: { navigate },
      navigation
    } = this.props;
    const {
      name,
      profilePic,
      number_repo,
      number_stars,
      number_projects,
      username
    } = navigation.state.params;
    return (
      <View style={commonStyle.normalPageLayout}>
        <Image
          source={{ uri: `${profilePic}` }}
          style={styles.profilePicStyle}
        />
        <Text style={styles.developerNameStyle}>{name}</Text>
        <Text style={styles.usernameStyle}>@{username}</Text>
        <View style={styles.repoSummary}>
          <View style={styles.summaryStyle}>
            <Text style={styles.statisticStyle}>{number_repo}</Text>
            <Text style={styles.statisticsLabel}>Repo</Text>
          </View>
          <View style={styles.summaryStyle}>
            <Text style={styles.statisticStyle}>{number_stars}</Text>
            <Text style={styles.statisticsLabel}>Stars</Text>
          </View>
          <View style={styles.summaryStyle}>
            <Text style={styles.statisticStyle}>{number_projects}</Text>
            <Text style={styles.statisticsLabel}>Project</Text>
          </View>
        </View>
        <ButtonWithIcon
          label="GitHub Profile"
          target={navigate}
          labelMargin="10%"
          newMarginTop="6%"
          url={`https://github.com/${username}`}
          iconUrl={githubIcon}
        />
        <ButtonWithIcon
          label="Share"
          target={navigate}
          newMarginTop="13%"
          labelMargin="25%"
          url={profilePic}
          iconUrl={shareIcon}
          username={username}
          share="allow"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profilePicStyle: {
    width: "50%",
    height: "30%",
    borderRadius: 8,
    marginTop: 10
  },
  developerNameStyle: {
    fontSize: 23,
    marginTop: 5,
    color: themeStyle.PRIMARY_COLOR
  },
  usernameStyle: {
    marginTop: 2,
    fontSize: 20,
    color: themeStyle.SECONDARY_COLOR
  },
  repoSummary: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  summaryStyle: {
    ...commonStyle.allCenteredLayout,
    width: '18%',
    margin: 20,
    height: 100,
  },
  statisticStyle: {
    fontSize: 23
  },
  statisticsLabel: {
    fontSize: 20,
    color: themeStyle.SECONDARY_COLOR
  }
});
export default Profile;

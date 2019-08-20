import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  Share
} from "react-native";
import common from "../../Styles/common.style";
import openUrlLink from "../../../utilities/openUrlLink";

class ButtonWithIcon extends Component {
  state = {};

  handleShare = async username => {
    try {
      await Share.share({
        message: `Check out this awesome developer @${username}`,
        url: `https://github.com/${username}`
      });
    } catch (error) {
      Alert(error.message);
    }
  };
  render() {
    const {
      label,
      target,
      newMarginTop,
      labelMargin,
      url,
      iconUrl,
      share = '',
      username = "N/A"
    } = this.props;
    return (
      <View>
        <TouchableOpacity
          data-navigator="buttonNavigator"
          onPress={
            share
              ? () => {
                  this.handleShare(username);
                }
              : () => {
                  openUrlLink(url, target);
                }
          }
        >
          <View
            style={[
              common.buttonStyle,
              { marginTop: newMarginTop, paddingLeft: 25 },
            ]}
          >
            <Text
              data-text="buttonLabel"
              style={[common.buttonLabelStyle, { marginLeft: labelMargin }]}
            >
              <Image source={iconUrl} style={styles.buttonIconStyle} />
              {` ${label}`}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ButtonWithIcon;

const styles = StyleSheet.create({
  buttonIconStyle: {
    width: 30,
    height: 24,
    borderRadius: 50
  },
});

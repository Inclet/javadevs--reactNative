import React from "react";
import { View, Image } from "react-native";
import themeStyle from '../../Styles/common.style';

const SocialIcon = ({ imageUrl }) => {
  return (
    <View style={themeStyle.socialLoginLabelStyle}>
      <Image source={imageUrl} style={{ width: 32, height: 32 }} />
    </View>
  );
};
export default SocialIcon;

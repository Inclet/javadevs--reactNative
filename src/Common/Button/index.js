import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import common from "../../Styles/common.style";

const CommonButton = ({ label, target, newMarginTop, page }) => {
  return (
    <View>
      <TouchableOpacity
        data-navigator="buttonNavigator"
        onPress={() => {
          target.navigate(page);
        }}
      >
        <View style={[common.buttonStyle, { marginTop: newMarginTop }]}>
          <Text data-text="buttonLabel" style={common.buttonLabelStyle}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CommonButton;
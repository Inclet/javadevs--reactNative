import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../../Styles/theme.style";
import common from "../../Styles/common.style";
import Icon from "react-native-vector-icons/Ionicons";
const Layout = ({ children, target, currentPage }) => {
  return (
    <View style={common.normalPageLayout}>
      {children}
      <View style={styles.bottomPaginator}>
        <Icon
          data-navigator="welcomeNavigator"
          style={[
            styles.paginatorStyle,
            currentPage === 1
              ? { color: theme.PRIMARY_COLOR }
              : { color: theme.LOW_CONTRAST_COLOR }
          ]}
          name="ios-radio-button-on"
          size={10}
          onPress={() => target.navigate("Welcome")}
        />
        <Icon
          data-navigator="aboutUsNavigator"
          data-testID="bottomNavigator"
          style={[
            styles.paginatorStyle,
            currentPage === 2
              ? { color: theme.PRIMARY_COLOR }
              : { color: theme.LOW_CONTRAST_COLOR }
          ]}
          name="ios-radio-button-on"
          size={10}
          onPress={() => target.navigate("AboutUs")}
        />
        <Icon
          data-navigator="authScreenNavigator"
          style={[
            styles.paginatorStyle,
            currentPage === 3
              ? { color: theme.PRIMARY_COLOR }
              : { color: theme.LOW_CONTRAST_COLOR }
          ]}
          name="ios-radio-button-on"
          size={10}
          onPress={() => target.navigate("AuthScreen")}
        />
      </View>
    </View>
  );
};

export default Layout;

export const styles = StyleSheet.create({
  bottomPaginator: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 40
  },
  paginatorStyle: {
    padding: 5
  }
});

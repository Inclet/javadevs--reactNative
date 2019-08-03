import React from "react";
import { View, Text } from "react-native";
import common from "../Styles/common.style";
import Layout from "../Common/Layout/index";

const AuthScreen = ({ navigation }) => {
  return (
    <Layout target={navigation} currentPage={3}>
      <View style={common.innerPageLayout}>
        <Text style={{ marginTop: 100, fontSize:30 }}>Auth</Text>
      </View>
    </Layout>
  );
};

export default AuthScreen;

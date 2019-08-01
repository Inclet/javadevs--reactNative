import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
const AboutUs = () => {
  return (
    <View style={styles.aboutUsContainer}>
      <Text>About Us</Text>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  aboutUsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
});

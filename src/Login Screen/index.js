import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import common from "../Styles/common.style";
import loginImage from "../Assets/Images/waiting.png";
import googleIcon from "../Assets/Images/icons8-google-48.png";
import gitHubIcon from "../Assets/Images/GitHub-Mark-32px.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import theme from "../Styles/theme.style";
import firebase from "../../firebase.config";
import SocialIcon from '../Common/SocialIcon';
import { googleLogin } from "../../Firebase Socials/googleLogin";
import openUrlLink from "../../utilities/openUrlLink";
import { CLIENT_ID } from 'react-native-dotenv';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        accountError: ""
      }
    };
  }

  // changing values in a state
  handleStateChange = key => {
    this.setState({ ...key });
  };

  // user login
  handleLogin = () => {
    const {
      navigation: { navigate }
    } = this.props;
    const { email, password } = this.state;
    if (email === "" || password === '') {
      if (password === "") {
        this.setState(state => ({
          errors: {
            email: state.errors.email,
            accountError: 'Password is required!',
          },
        }));
      }

      if (email === "") {
        this.setState(state => ({
          errors: {
            email: "Email is required!",
            accountError: state.errors.accountError
          },
        }));
      }
      return;
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async res => {
        await AsyncStorage.setItem('userToken', res.user.ra);
        navigate('Home');
      })
      .catch(async ({ message }) => {
        if (message.split(" ")[1] === "email") {
          return this.handleStateChange({ errors: { email: message } });
        }
        this.handleStateChange({ errors: { accountError: message } });
      });
  };
  render() {
    const { errors } = this.state;
    const { navigate } = this.props.navigation;
    const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;
    return (
      <View style={common.normalPageLayout}>
        <Text style={styles.brandLogo}>JavaDevs</Text>
        <Image source={loginImage} style={styles.loginImageStyle} />
        <View style={styles.innerContainerStyle}>
          <Text style={styles.placeHolderLabelStyle}>Email</Text>
          <TextInput
            data-email-input="email"
            style={styles.placeHolderStyle}
            placeholder="Your username or email"
            autoCapitalize="none"
            autoFocus={true}
            onChangeText={email =>
              this.handleStateChange({
                email,
                errors: { email: '', accountError: '' },
              })
            }
          />
        </View>
        <View style={styles.errorContainerStyle}>
          <Text style={styles.errorMessageStyle}>{errors.email}</Text>
        </View>
        <View style={styles.innerContainerStyle}>
          <Text style={styles.placeHolderLabelStyle}>Password</Text>
          <TextInput
            data-password-input="password"
            style={styles.placeHolderStyle}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={password =>
              this.handleStateChange({
                password,
                errors: { email: "", accountError: "" }
              })
            }
          />
        </View>
        <View style={styles.errorContainerStyle}>
          <Text style={styles.errorMessageStyle}>{errors.accountError}</Text>
        </View>
        <TouchableOpacity
          data-navigator="buttonNavigator"
          onPress={this.handleLogin}
        >
          <View style={common.buttonStyle}>
            <Text data-text="buttonLabel" style={common.buttonLabelStyle}>
              Login
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.labelsStyle}>Don't have an account?Create One</Text>
        <Text style={styles.labelsStyle}>Or Join With</Text>
        <View style={styles.socialsStyle}>
          <TouchableOpacity onPress={() => googleLogin(navigate, 'Home')}>
            <SocialIcon imageUrl={googleIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openUrlLink(url, navigate)}>
            <SocialIcon imageUrl={gitHubIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  brandLogo: {
    ...common.brandStyle,
    marginTop: 35
  },
  loginImageStyle: {
    width: wp("100%"),
    height: hp("30%")
  },
  innerContainerStyle: {
    width: wp("85%"),
    borderColor: theme.NORMAL_COLOR,
    borderBottomColor: theme.PRIMARY_COLOR,
    borderWidth: 2,
    marginBottom: 20,
    paddingBottom: 5
  },
  placeHolderLabelStyle: {
    fontSize: 23,
    color: theme.SECONDARY_COLOR,
    marginTop: 10
  },
  placeHolderStyle: {
    padding: 10
  },
  labelsStyle: {
    fontSize: 20,
    color: theme.SECONDARY_COLOR,
    marginTop: 15
  },
  socialsStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 40
  },
  errorContainerStyle: {
    width: wp("80%"),
    marginBottom: 10,
    marginTop: -10
  },
  errorMessageStyle: {
    color: "red",
    textAlign: 'center',
  },
});

export default Login;

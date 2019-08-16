import { GoogleSignin } from "react-native-google-signin";
import firebase from "react-native-firebase";
import { AsyncStorage } from "react-native";

// Calling this function will open Google for login.
export async function googleLogin(navigate, page) {
  try {
    // add any configuration settings here:
    await GoogleSignin.configure();

    const data = await GoogleSignin.signIn();

    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(
      data.idToken,
      data.accessToken
    );
    // login with credential
    await firebase.auth().signInWithCredential(credential);
    const currentUser = await GoogleSignin.getTokens();
    await AsyncStorage.setItem("userToken", currentUser.idToken);
    navigate(page);
  } catch (e) {
    console.error(e);
  }
}

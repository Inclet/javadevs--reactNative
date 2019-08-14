import Welcome from "../Welcome Screen";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import AboutUs from "../AboutUs";
import AuthScreen from "../Auth Screen/index";
import Login from "../Login Screen/index";
import Home from "../Home/index";
import SignUp from "../Signup Screen/index";

const FirstPages = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null
      }
    },
    AboutUs: {
      screen: AboutUs,
      navigationOptions: {
        header: null
      }
    },
    AuthScreen: {
      screen: AuthScreen,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: Home,
      path: 'home/:user_token'
    },
  },
  {
    initialRouteName: "Welcome"
  }
);

const Routes = createSwitchNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
    FirstPages: {
      screen: FirstPages,
      path: '',
    }
  },
  {
    initialRouteName: "FirstPages"
  }
);

export default createAppContainer(Routes);

import Welcome from "../Welcome Screen";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import AboutUs from "../AboutUs";
import AuthScreen from "../Auth Screen/index";
import Login from "../Login Screen/index";

const Firstpages = createStackNavigator(
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
    }
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
    Home: Firstpages
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(Routes);

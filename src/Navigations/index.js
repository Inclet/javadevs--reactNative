import Welcome from "../Welcome Screen";
import { createAppContainer, createStackNavigator } from "react-navigation";
import AboutUs from "../AboutUs";
import AuthScreen from "../Auth Screen/index";

const firstPages = createStackNavigator(
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

export default createAppContainer(firstPages);

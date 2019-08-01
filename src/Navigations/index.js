import Welcome from "../Welcome Screen";
import { createAppContainer, createStackNavigator } from "react-navigation";
import AboutUs from '../AboutUs';

const firstPages = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null
      },
    },
    AboutUs: {
      screen: AboutUs,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: "Welcome",
  }
);

export default createAppContainer(firstPages);

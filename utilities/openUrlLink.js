import { Linking } from "react-native";
import InAppBrowser from 'react-native-inappbrowser-reborn';
import themeStyle from "../src/Styles/theme.style";

export default async (url, navigate) => {
  try {
    // const element = await InAppBrowser.isAvailable();
    if (await InAppBrowser.isAvailable()) {
      const response = await InAppBrowser.openAuth(url, {
        dismissButtonStyle: 'close',
        preferredBarTintColor: themeStyle.PRIMARY_COLOR,
        preferredControlTintColor: "white",
        readerMode: false,
        animated: false,
        modalPresentationStyle: 'overFullScreen',
        modalTransitionStyle: 'partialCurl',
        modalEnabled: false,

        // android options
        showTitle: true,
        toolbarColor: '#6200EE',
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        animations: {
          startEnter: "slide_in_right",
          startExit: "slide_out_left",
          endEnter: "slide_in_left",
          endExit: 'slide_out_right',
        },
        headers: {
          'my-custom-header': 'my custom header value',
        },
      });
      if (response.type === "success" && response.url) {
        const route = response.url.replace(/.*?:\/\//g, '');
        const id = route.match(/\/([^\/]+)\/?$/)[1];
        const routeName = route.split('/')[0];

        if (routeName === "home") {
          navigate('Home', { id });
        }
      }
    } else {
      Linking.openURL(url);
    }
  } catch (error) {
    console.log("error", error);
  }
};

import { StyleSheet } from 'react-native';
import theme from './theme.style';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  normalPageLayout: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  LeftAlignLayout: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  innerPageLayout: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  brandStyle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.PRIMARY_COLOR,
    marginTop: 20,
  },
  buttonStyle: {
    width: wp('70%'),
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 15,
  },
  buttonLabelStyle: {
    color: theme.NORMAL_COLOR,
    fontSize: theme.FONT_SIZE_REGULAR,
    textAlign: 'center',
  },
  socialLoginLabelStyle: {
    borderRadius: 100,
    padding: 5,
    marginRight: 15,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  }
});

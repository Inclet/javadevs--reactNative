import Login from "./index";
import React from "react";
import { googleLogin } from "../../Firebase Socials/googleLogin";
import { shallow } from 'enzyme';
import openUrlLink from '../../utilities/openUrlLink';
import { AsyncStorage } from "react-native";
jest.mock('react-native-firebase');
jest.mock('react-native-google-signin');
jest.mock("firebase");

let props, wrapper, navigate;
describe('Rendering', () => {
  beforeEach(() => {
    navigate = jest.fn();
    props = {
      navigation: { navigate },
    };
  });
  it('Should render without crashing', () => {
    wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test User Inputs', () => {
  beforeEach(() => {
    navigate = jest.fn();
    props = {
      navigation: { navigate },
    };
  });
  it('Should change state when a user types in email input field', () => {
    wrapper = shallow(<Login {...props} />);
    wrapper
      .find(`[data-email-input="email"]`)
      .simulate('changeText', "user@javadevs.com");
    expect(wrapper.state().email).toEqual('user@javadevs.com');
  });

  it("Should change state when a user types in password input field", () => {
    wrapper = shallow(<Login {...props} />);
    wrapper
      .find(`[data-password-input="password"]`)
      .simulate('changeText', 'javadevs19');
    expect(wrapper.state().password).toEqual('javadevs19');
  });

  it('should make email field required', () => {
    wrapper = shallow(<Login {...props} />);
    wrapper.find(`[data-navigator="buttonNavigator"]`).simulate('press');
    expect(wrapper.state().errors.email).toEqual('Email is required!');
  });

  it('should make password field required', () => {
    wrapper = shallow(<Login {...props} />);
    wrapper
      .find(`[data-email-input="email"]`)
      .simulate("changeText", "user@javadevs.com");
    wrapper.find(`[data-navigator="buttonNavigator"]`).simulate('press');

    expect(wrapper.state().errors.accountError).toEqual(
      'Password is required!'
    );
  });
  it("should make user", async () => {
    // let component = wrapper.instance();
    // console.log(component);
    const res = await openUrlLink("yes.com", props.navigation.navigate);
    // expct(wrapper).tobeDefined();
  });
  it('should make signin a user', async () => {
    wrapper = shallow(<Login {...props} />);
    wrapper
      .find(`[data-email-input="email"]`)
      .simulate("changeText", "user@javadevs.com");

    wrapper
      .find(`[data-password-input="password"]`)
      .simulate("changeText", "javadevs");

    jest.spyOn(AsyncStorage, 'setItem');

    await wrapper.find(`[data-navigator="buttonNavigator"]`).simulate("press");
    await wrapper.update();
  });

  it('should make return an error when email is not valid', async () => {
    wrapper = shallow(<Login {...props} />);
    wrapper.find(`[data-email-input="email"]`).simulate('changeText', 'user');

    wrapper
      .find(`[data-password-input="password"]`)
      .simulate('changeText', 'javadevs');

    await wrapper.find(`[data-navigator="buttonNavigator"]`).simulate('press');
    // expect(AsyncStorage.setItem).toBeCalled();
    await wrapper.update();
    expect(wrapper.state().errors.email).toEqual(
      "The email address is badly formatted"
    );
  });

  it('should return an error when the account doesn\'t exist', async () => {
    wrapper = shallow(<Login {...props} />);
    wrapper
      .find(`[data-email-input="email"]`)
      .simulate("changeText", "users@javadevs.com");

    wrapper
      .find(`[data-password-input="password"]`)
      .simulate("changeText", "jurassic");

    await wrapper.find(`[data-navigator="buttonNavigator"]`).simulate("press");
    // expect(AsyncStorage.setItem).toBeCalled();
    await wrapper.update();
    expect(wrapper.state().errors.accountError).toEqual('I am not registered');
  });
});

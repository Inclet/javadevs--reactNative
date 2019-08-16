import React from 'react';
import { shallow } from "enzyme";
import openUrlLink from "../../utilities/openUrlLink";
import { AsyncStorage } from 'react-native';
import SignUp from './index';

let props, wrapper, navigate;
describe("Rendering", () => {
  beforeEach(() => {
    navigate = jest.fn();
    props = {
      navigation: { navigate }
    };
    wrapper = shallow(<SignUp {...props} />);
  });
  it("Should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Test User Inputs", () => {
  beforeEach(() => {
    navigate = jest.fn();
    props = {
      navigation: { navigate }
    };
    wrapper = shallow(<SignUp {...props} />);
  });
  it("Should change state when a user types in email input field", () => {
    wrapper
      .find(`[data-email-input="email"]`)
      .simulate("changeText", 'user@javadevs.com');
    expect(wrapper.state().email).toEqual("user@javadevs.com");
  });

  it('Should change state when a user types in password input field', () => {
    wrapper
      .find(`[data-password-input="password"]`)
      .simulate("changeText", "javadevs19");
    expect(wrapper.state().password).toEqual("javadevs19");
  });

  it("should make email field required", () => {
    wrapper.find(`[data-navigator="buttonNavigator"]`).simulate("press");
    expect(wrapper.state().errors.email).toEqual("Email is required!");
  });

  it("should make password field required", () => {
    wrapper
      .find(`[data-email-input="email"]`)
      .simulate('changeText', 'user@javadevs.com');
    wrapper.find(`[data-navigator="buttonNavigator"]`).simulate("press");

    expect(wrapper.state().errors.accountError).toEqual(
      "Password is required!"
    );
  });

  it("should make username field required", () => {
    wrapper.find(`[data-username-input="username"]`).simulate('changeText', "");
    wrapper.find(`[data-navigator="buttonNavigator"]`).simulate("press");

    expect(wrapper.state().errors.username).toEqual('Username is required!');
  });

  it('should make user', async () => {
    // let component = wrapper.instance();
    // console.log(component);
    const res = await openUrlLink('yes.com', props.navigation.navigate);
    // expct(wrapper).tobeDefined();
  });
  it("should make signin a user", async () => {
    wrapper
      .find(`[data-email-input="email"]`)
      .simulate('changeText', 'user@javadevs.com');

    wrapper
      .find(`[data-password-input="password"]`)
      .simulate('changeText', 'javadevs');

    jest.spyOn(AsyncStorage, "setItem");

    await wrapper.find(`[data-navigator="buttonNavigator"]`).simulate('press');
    await wrapper.update();
  });
});

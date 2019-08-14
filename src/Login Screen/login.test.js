import Login from "./index";
import React from "react";
import { shallow } from 'enzyme';
import openUrlLink from '../../utilities/openUrlLink';
jest.mock('react-native-firebase');
jest.mock('react-native-google-signin');

jest.mock('firebase', () => {
  return {
    initializeApp: jest.fn(() => {
      return {
        auth: jest.fn(() => {
          return {
            createUserWithEmailAndPassword: jest.fn((para1, para2) => {
              return new Promise(function(resolve, reject) {
                resolve({
                  email: 'test@test.com',
                  uid: '12345678abcdefg'
                });

                reject({ message: 'error!' });
              });
            }),
            signOut: jest.fn(() => {
              return new Promise(function(resolve, reject) {
                resolve('Success');
                reject({ message: 'error!' });
              });
            }),
            onAuthStateChanged: jest.fn(() => {
              return {
                email: 'test@test.com',
                uid: '12345678abcdefg'
              };
            }),
            signInWithEmailAndPassword: jest.fn((para1, para2) => {
              return new Promise(function(resolve, reject) {
                reject({ message: 'error!' });
              });
            }),
          };
        })
      };
    })
  };
});
describe('Rendering', () => {
  const props = {
    navigation: { navigate: jest.fn() },
  };
  it('Should render without crashing', () => {
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test User Inputs', () => {
  let props, wrapper;
  beforeEach(() => {
    props = {
      navigation: { navigate: jest.fn() },
    };
    wrapper = shallow(<Login {...props} />);
  });

  it('Should change state when a user types in email input field', () => {
    wrapper
      .find(`[data-email-input="email"]`)
      .simulate('changeText', "user@javadevs.com");
    expect(wrapper.state().email).toEqual('user@javadevs.com');
  });

  it("Should change state when a user types in password input field", () => {
    wrapper
      .find(`[data-password-input="password"]`)
      .simulate('changeText', 'javadevs19');
    expect(wrapper.state().password).toEqual('javadevs19');
  });

  it('should make email field required', () => {
    wrapper.find(`[data-navigator="buttonNavigator"]`).simulate('press');
    expect(wrapper.state().errors.email).toEqual('Email is required!');
  });

  it('should make password field required', () => {
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
  //   it("should make signin a user", () => {
  //     wrapper
  //       .find(`[data-email-input="email"]`)
  //       .simulate('changeText', 'user@javadevs.com');

  //     wrapper
  //       .find(`[data-password-input="password"]`)
  //       .simulate('changeText', 'javadevs');

  //     wrapper.find(`[data-navigator="buttonNavigator"]`).simulate("press");
  //     expect(props.navigation.navigate).toHaveBeenCalledWith('Home');
  //   });
});

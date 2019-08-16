import React from "react";
import { shallow } from "enzyme";
import AuthScreen from "./index";

describe("Auth Screen", () => {
  let wrapper, props;
  beforeEach(() => {
    props = {
      navigation: {
        navigate: jest.fn()
      }
    };
    wrapper = shallow(<AuthScreen {...props} />);
  });
  it("Should match Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

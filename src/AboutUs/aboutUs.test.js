import React from "react";
import { shallow } from "enzyme";
import AboutUs from "./index";

describe("About Us Screen", () => {
  let wrapper, props;
  beforeEach(() => {
    props = {
      navigation: {
        navigate: jest.fn()
      }
    };
    wrapper = shallow(<AboutUs {...props} />);
  });
  it("Should match Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

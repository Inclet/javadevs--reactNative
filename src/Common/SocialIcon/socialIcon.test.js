import React from "react";
import { shallow } from "enzyme";
import SocialIcon from "./index";

describe("SocialIcon", () => {
  let wrapper, props;
  props = {
    imageUrl: {
      url: "../pic/me.jpg"
    }
  };
  wrapper = shallow(<SocialIcon {...props} />);

  it("Should match Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

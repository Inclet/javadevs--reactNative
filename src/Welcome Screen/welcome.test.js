import React from "react";
import { shallow } from "enzyme";
import Welcome from "./index";

describe("Welcome Screen", () => {
  let wrapper, props;
  beforeEach(() => {
    props = {
      navigation: {
        navigate: jest.fn()
      }
    };
    wrapper = shallow(<Welcome {...props} />);
  });
  it("Should match Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Should Navigate to About us screen when clicking on an arrow", () => {
    wrapper.find('[data-testID="nextNavigator"]').simulate("press");
    expect(props.navigation.navigate).toHaveBeenCalledWith("AboutUs");
  });
});

import React from "react";
import { shallow } from "enzyme";
import Welcome from "./index";

describe("Welcome Screen", () => {
  describe("Rendering", () => {
    let wrapper, props;
    beforeEach(() => {
      props = {
        navigation: {
          navigate: jest.fn(),
        },
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

    it("Should navigate to aboutUs screen when clicking on bottom paginator", () => {
      wrapper.find('[data-testID="bottomNavigator"]').simulate("press");
      expect(props.navigation.navigate).toHaveBeenCalledWith("AboutUs");
    });
  });
});

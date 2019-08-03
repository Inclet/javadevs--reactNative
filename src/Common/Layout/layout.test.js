import React from "react";
import { shallow } from "enzyme";
import Layout from "./index";

describe("Layout Component", () => {
  describe("RENDERING", () => {
    let wrapper,
      props,
      i = 0;
    beforeEach(() => {
      props = {
        target: {
          navigate: jest.fn()
        },
        currentPage: i++
      };
      wrapper = shallow(<Layout {...props} />);
    });
    it("Should match Snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("Should Navigate to welcome screen when clicking on the first paginator button", () => {
      wrapper.find('[data-navigator="welcomeNavigator"]').simulate("press");
      expect(props.target.navigate).toHaveBeenCalledWith("Welcome");
    });

    it("Should Navigate to About us screen when clicking on the second paginator button", () => {
      wrapper.find('[data-navigator="aboutUsNavigator"]').simulate("press");
      expect(props.target.navigate).toHaveBeenCalledWith("AboutUs");
    });

    it("Should Navigate to Auth screen when clicking on the third paginator button", () => {
      wrapper.find('[data-navigator="authScreenNavigator"]').simulate("press");
      expect(props.target.navigate).toHaveBeenCalledWith("AuthScreen");
    });
  });
});

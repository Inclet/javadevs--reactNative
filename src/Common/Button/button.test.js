import React from "react";
import { shallow } from "enzyme";
import CommonButton from "./index";

describe("Button Component", () => {
  describe("RENDERING", () => {
    let wrapper, props;
    beforeEach(() => {
      props = {
        target: {
          navigate: jest.fn()
        },
        page: "AboutUs",
        label: "Login"
      };
      wrapper = shallow(<CommonButton {...props} />);
    });
    it("Should match Snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("Should navigate to a new page when you click on the button", () => {
      wrapper.find(`[data-navigator="buttonNavigator"]`).simulate("press");
      expect(props.target.navigate).toHaveBeenCalledWith(props.page);
    });

    it("Should add label to the button", () => {
      expect(
        wrapper
          .find(`[data-text="buttonLabel"]`)
          .shallow()
          .text()
      ).toEqual(props.label);
    });
  });
});

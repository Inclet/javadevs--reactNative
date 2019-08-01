import React from "react";
import { shallow } from "enzyme";
import Welcome from './index';

describe('Welcome Screen', () => {
  describe('Rendering', () => {
    it('Should match Snapshot', () => {
      const component = shallow(<Welcome />);
      expect(component).toMatchSnapshot();
    });

    it("Should Navigate to About us screen when clicking on an arrow", () => {
      const props = {
        navigation: {
          navigate: jest.fn(),
        },
      };
      const welcome = shallow(<Welcome {...props} />);
      welcome.find('[data-testID="nextNavigator"]').simulate("press");
      expect(props.navigation.navigate).toHaveBeenCalledWith("AboutUs");
    });

    it("Should navigate to aboutUs screen when clicking on bottom paginator", () => {
      const props = {
        navigation: {
          navigate: jest.fn(),
        },
      };
      const welcome = shallow(<Welcome {...props} />);
      welcome.find('[data-testID="bottomNavigator"]').simulate("press");
      expect(props.navigation.navigate).toHaveBeenCalledWith("AboutUs");
    });
  });
});

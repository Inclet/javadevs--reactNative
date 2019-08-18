import React from "react";
import { shallow } from "enzyme";
import { MockedProvider } from '@apollo/react-testing';
import Home from './index';
import javadeveloper from '../graphQL_Queries/getAllJavadevelopers';

const mocks = [
  {
    request: {
      query: javadeveloper,
      variables: {
        name: 'me',
      },
    },
    result: {
      data: {
        developer: { id: 1, name: 'users' }
      }
    }
  },
];
describe("Home Screen", () => {
  const wrapper = shallow(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  it("Should match Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should show loader initially', () => {
    const component = shallow(<Home />);
  });
});

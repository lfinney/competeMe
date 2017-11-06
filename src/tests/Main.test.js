import React from 'react';
import Main from '../Main/Main';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
  activeUser: {},
  submitComp: [],
  activePopup: false,
  fetchFromFirebase: [],
  userLocation: {},
  nearbyParks: []
};
const store = mockStore(initialState);

describe('Main', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <Main store={store}/>);

    expect(wrapper.length).toMatchSnapshot();
  });

  it('should render component', () => {
    const wrapper = shallow(
      <Main store={store}/>);

    expect(wrapper.props().activeUser).toEqual({});
    expect(wrapper.props().competitions).toEqual([]);
    expect(wrapper.props().liveUser).toEqual(false);
    expect(wrapper.props().liveUser).toEqual(false);
  });
});

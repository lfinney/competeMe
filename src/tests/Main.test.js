import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../Main/Main';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Main', () => {

  it('should render component', () => {
    const initialState = {
      activeUser: {},
      submitComp: [],
      activePopup: false,
      fetchFromFirebase: [],
      userLocation: {},
      nearbyParks: []
    };
    const store = mockStore(initialState);
    const wrapper = shallow(
      <Main store={store}/>);

    expect(wrapper.length).toEqual(1);
  });
});

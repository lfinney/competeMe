import React from 'react';
import PopupContainer from '../Popup/Popup';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = { activePopup: false };
const store = mockStore(initialState);

describe('Popup', () => {

  it('should render component', () => {

    const wrapper = shallow(
      <PopupContainer store={store}/>);

    expect(wrapper).toMatchSnapshot();
  });
});

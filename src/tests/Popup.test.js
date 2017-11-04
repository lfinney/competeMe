import React from 'react';
import ReactDOM from 'react-dom';
import Popup from '../Popup/Popup';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';


const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Popup', () => {

  it('should render component', () => {
    const initialState = { activePopup: false }
    const store = mockStore(initialState);

    const wrapper = shallow(
      <Popup store={store}/>);

    expect(wrapper).toMatchSnapshot();
  });
});

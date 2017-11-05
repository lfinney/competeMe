import React from 'react';
import ReactDOM from 'react-dom';
import PopupContainer, { Popup } from '../Popup/Popup';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

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

  // it('should have a button that modifies the status of an activePopup', () => {
  //   const mockFunc = jest.fn();
  //   const wrapper = mount(
  //     <Popup store={store}/>);
  //   const button = wrapper.find('button')
  //   expect(wrapper).toMatchSnapshot();
  // })
});

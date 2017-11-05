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

  // it('should render component', () => {
  //   const mockFunc = jest.fn();
  //   const wrapper = mount(
  //     <PopupContainer
  //       store={store}
  //       activePopup={mockFunc}/>);
  //
  //   const button = wrapper.find('button');
  //   console.log(button.debug());
  //   expect(mockFunc).toHaveBeenCalledTimes(0);
  //   button.simulate('click');
  //   expect(mockFunc).toHaveBeenCalledTimes(1);
  // });
});

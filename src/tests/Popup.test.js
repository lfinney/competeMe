import React from 'react';
import ReactDOM from 'react-dom';
import Popup from '../Popup/Popup';
import { shallow } from 'enzyme';


describe('Popup', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <Popup />);

    expect(wrapper.length).toEqual(1);
  });
});

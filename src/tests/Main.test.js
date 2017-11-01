import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../Main/Main';
import { shallow } from 'enzyme';


describe('Main', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <Main />);

    expect(wrapper.length).toEqual(1);
  });
});

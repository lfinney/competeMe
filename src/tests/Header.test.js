import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header';
import { shallow } from 'enzyme';


describe('Header', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <Header />);

    expect(wrapper.length).toEqual(1);
  });
});

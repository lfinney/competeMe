import React from 'react';
import { Header } from '../Header/Header';
import { shallow } from 'enzyme';


describe('Header', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <Header />);

    expect(wrapper).toMatchSnapshot();
  });
});

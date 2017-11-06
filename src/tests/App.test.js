import React from 'react';
import App from '../App/App';
import { shallow } from 'enzyme';


describe('App', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <App />);

    expect(wrapper).toMatchSnapshot();
  });
});

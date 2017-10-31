import React from 'react';
import ReactDOM from 'react-dom';
import Event from '../Event/Event';
import { shallow } from 'enzyme';


describe('Event', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <Event />);

    expect(wrapper.length).toEqual(1);
  });
});

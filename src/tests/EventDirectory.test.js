import React from 'react';
import ReactDOM from 'react-dom';
import EventDirectory from '../EventDirectory/EventDirectory';
import { shallow } from 'enzyme';


describe('EventDirectory', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <EventDirectory />);

    expect(wrapper.length).toEqual(1);
  });
});

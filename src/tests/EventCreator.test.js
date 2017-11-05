import React from 'react';
import { EventCreator } from '../EventCreator/EventCreator';
import { shallow, mount } from 'enzyme';


describe('EventCreator', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <EventCreator />);

    expect(wrapper).toMatchSnapshot();
  });
});

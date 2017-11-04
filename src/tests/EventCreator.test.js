import React from 'react';
import ReactDOM from 'react-dom';
import { EventCreator } from '../EventCreator/EventCreator';
import { shallow } from 'enzyme';


describe('EventCreator', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <EventCreator />);

    expect(wrapper).toMatchSnapshot();
  });
});

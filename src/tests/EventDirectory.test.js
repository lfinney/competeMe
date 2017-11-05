import React from 'react';
import EventDirectory from '../EventDirectory/EventDirectory';
import { shallow } from 'enzyme';
import mockCompetitionsArray from './mockData/mockCompetitionsArray';


describe('EventDirectory', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <EventDirectory competitions={mockCompetitionsArray}/>);

    expect(wrapper).toMatchSnapshot();
  });
});

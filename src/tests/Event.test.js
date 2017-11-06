import React from 'react';
import Event from '../Event/Event';
import { shallow } from 'enzyme';
import mockCompetition from './mockData/mockCompetition';


describe('Event', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <Event
        comp={mockCompetition}/>);

    expect(wrapper).toMatchSnapshot();
  });
});

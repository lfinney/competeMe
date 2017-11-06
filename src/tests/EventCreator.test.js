import React from 'react';
import { EventCreator } from '../EventCreator/EventCreator';
import { shallow, mount } from 'enzyme';
let wrapper;

describe('EventCreator', () => {

  it('should render component', () => {
    wrapper = shallow(
      <EventCreator />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('Create event functionality', () => {
  beforeEach(() => {
    wrapper = mount(
      <EventCreator />);
  });

  it('should allow user to give competition a name', () => {

    const compNameInput = wrapper.find('.compName');

    expect(wrapper.state('compName')).toEqual('');
    const newInput = { target: { value: 'Afternoon Friz' } };

    compNameInput.simulate('change', newInput);
    expect(wrapper.state('compName')).toEqual('Afternoon Friz');
  });

  it('should allow user to select a sport', () => {
    const sportDropDownInput = wrapper.find('.sportDropDown');

    expect(wrapper.state('sport')).toEqual('');
    const newInput = { target: { value: 'Soccer' } };

    sportDropDownInput.simulate('change', newInput);
    expect(wrapper.state('sport')).toEqual('Soccer');
  });

  it('should a determine number of players for game', () => {
    const playersInput = wrapper.find('.players');

    expect(wrapper.state('players')).toEqual('');
    const newInput = { target: { value: 22 } };

    playersInput.simulate('change', newInput);
    expect(wrapper.state('players')).toEqual(22);
  });

  it('should default to casual competitiveness level', () => {
    expect(wrapper.state('competitiveness')).toEqual('Casual');
  });

  it('should a determine number of players for game', () => {
    const dateInput = wrapper.find('.date-input');

    expect(wrapper.state('date')).toEqual('2017-11-01');
    const newInput = { target: { value: '2018-01-17' } };

    dateInput.simulate('change', newInput);
    expect(wrapper.state('date')).toEqual('2018-01-17');
  });

  it('should a determine number of players for game', () => {
    const timeInput = wrapper.find('.time-input');

    expect(wrapper.state('time')).toEqual('15:00');
    const newInput = { target: { value: '2:00' } };

    timeInput.simulate('change', newInput);
    expect(wrapper.state('time')).toEqual('2:00');
  });

  it('should a determine number of players for game', () => {
    const parkSearchInput = wrapper.find('.parkSearch');

    expect(wrapper.state('location')).toEqual('');
    const newInput = { target: { value: 'Washington Park' } };

    parkSearchInput.simulate('change', newInput);
    expect(wrapper.state('location')).toEqual('Washington Park');
  });
});

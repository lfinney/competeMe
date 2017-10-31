import React from 'react';
import ReactDOM from 'react-dom';
import Map from '../Map/Map';
import { shallow } from 'enzyme';


describe('Map', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <Map />);

    expect(wrapper.length).toEqual(1);
  });
});

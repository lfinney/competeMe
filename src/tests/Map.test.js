import React from 'react';
import Map from '../Map/Map';
import { mount } from 'enzyme';


describe('Map', () => {

  it('should render a component', () => {
    const wrapper = mount(<Map
      googleMapURL={'https://maps.googleapis.com/maps/api/js'}
      loadingElement={<div>Loading</div>}
      containerElement={<div>Container</div>}
      mapElement={<div>Map</div>}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});

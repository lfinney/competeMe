import React from 'react';
import Label from '../Label/Label';
import { shallow } from 'enzyme';


describe('Label', () => {

  it('should render component', () => {

    const wrapper = shallow(
      <Label />);

    expect(wrapper).toMatchSnapshot();
  });
});

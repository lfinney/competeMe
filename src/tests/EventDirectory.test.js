import React from 'react';
import ReactDOM from 'react-dom';
import EventDirectory from '../EventDirectory/EventDirectory';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventDirectory />, div);
});

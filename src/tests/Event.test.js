import React from 'react';
import ReactDOM from 'react-dom';
import Event from '../Event/Event';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Event />, div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import Popup from '../Popup/Popup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Popup />, div);
});

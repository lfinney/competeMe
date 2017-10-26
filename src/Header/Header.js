import React from 'react';

const Header = () => {
  return (
    <div className="Header">
      <h1>CompeteMe</h1>
      <input type="text" placeholder="Search" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <button>Log In</button>
    </div>
  );
};


export default Header;

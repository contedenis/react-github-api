import React from 'react';

import './styles.scss';

function NavBarApp() {
  const navigation = [
    'Home',
    'Trending repositories',
    'Search by language',
    'Search users',
  ];
  return (
    <div className="navbar-app">
      <div className="navbar-app__icon">
        <h3>Git Hub API</h3>
      </div>
      <div className="navbar-app__navigation">
        {navigation.map((nav, key) => <div className="navbar-app__navigation-item" key={key}>{nav}</div>)}
      </div>
    </div>
  );
}

export default NavBarApp;

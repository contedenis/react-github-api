import React from 'react';
import { Link } from 'react-router';

import './styles.scss';

function NavBarApp() {
  const navigation = [
    { displayName: 'Home', path: '/home' },
    { displayName: 'Trending repositories', path: '/trending-repositories' },
    { displayName: 'Search by language', path: '/search-by-language' },
    { displayName: 'Search users', path: '/search-users' },
  ];
  return (
    <div className="navbar-app">
      <div className="navbar-app__icon">
        <h3>Git Hub API</h3>
      </div>
      <nav className="navbar-app__navigation">
        <ul className="navbar-app__navigation-menu">
          {navigation.map((nav, key) => (
            <li className="navbar-app__navigation-item" key={key}>
              <Link
                activeClassName="navbar-app__navigation-item-link--active"
                className="navbar-app__navigation-item-link"
                to={nav.path}
              >
                {nav.displayName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBarApp;

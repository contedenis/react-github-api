import React from 'react';
import PropTypes from 'prop-types';

import Body from './Body';
import Navbar from './NavbarApp';
import Footer from './FooterApp';

import Main from '../Main';

function App({ children }) {
  return (
    <div className="App">
      <Body>
        <Navbar />
        <Main>
          {children}
        </Main>
        <Footer />
      </Body>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;

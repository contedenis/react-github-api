import React from 'react';

import './styles.scss';

/* eslint-disable */
function FooterApp() {
  return (
    <div className="footer">
      &copy;
      {(new Date().getFullYear())}
      {' Copyright:'}
      <a className="footer__link" alt="footer https://github.com/contedenis" href="https://github.com/contedenis">
        {'https://github.com/contedenis'}
      </a>
    </div>
  );
}

export default FooterApp;

import React from 'react';

import content from 'config/content.json';
import './Footer.scss'
import facebookFree from './images/icon-facebook-free@1x.png';


function Footer(){
  return (
    <footer className="container">
      <div className="row align-items-center">
        <div className="col-sm text-center text-sm-left">
          <div className="logo">
            <span>
              {content.site_title}
            </span>
          </div>
        </div>
        <div className="col-sm d-none d-sm-block facebookFree">
          <img src={facebookFree} alt=""/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

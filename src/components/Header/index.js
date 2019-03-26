import React, { Fragment } from 'react';
import { Link as RLink } from "react-scroll";

import content from 'config/content.json';
import './Header.scss';

function Header({ toggleModal }) {
  let menu = content.header_menu_links
    .map((link, i, arr) => 
      <Fragment key={i}>
        {getMenuDivider(i, arr.length)}
        { link.type === "anchor"
          ? <RLink to={link.address} smooth={true} className="link"><span>{link.title}</span></RLink>
          : link.type === "link" 
            ? <a className="link" href={link.address}><span>{link.title}</span></a>
            : <button className="link" onClick={toggleModal}><span>{link.title}</span></button>
        }
      </Fragment>
    );
  
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-auto text-center text-md-left">
            <div className="logo"><span>{content.site_title}</span></div>
          </div>
          <div className="col-md-6 col-lg-auto ml-auto text text-center text-md-right">
            {content.header_menu_label} {menu}
          </div>
        </div>
      </div>
    </header>
  );
}

function getMenuDivider(index, length) {
  switch (true) {
    case (index === 0):
      return '';
    case (index === length - 1):
      return ' or ';
    default:
      return ', ';
  }
}

export default Header;

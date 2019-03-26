import React from 'react';

import './SectionDevices.scss';
import iphone from './images/photo-phone.png';
import laptop from './images/photo-laptop.png';

function SectionDevices(){
  return (
    <section className="section-devices">
      <div className="container">
        <div>
          <img className="image laptop" src={laptop} alt="" data-aos="fade-right" data-aos-anchor-placement="top-center" />
          <img className="image iphone" src={iphone} alt="" data-aos="fade-left" data-aos-anchor-placement="top-center"/>
        </div>
      </div>
    </section>
  );
}

export default SectionDevices;

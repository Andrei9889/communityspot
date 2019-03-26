import React from 'react';

import { isRetina } from 'utils/common';
import content from 'config/content.json';
import './FeatureTime.scss';
import imgLogo from './images/icon-bookings.svg';
import imgBack from './images/feature-timetable.png';
import imgBack2x from './images/feature-timetable@2x.png';
import imgFront from './images/feature-volunteer.png';
import imgFront2x from './images/feature-volunteer@2x.png';

function FeatureTime(){
  return (
    <div className="row feature-time">
      <div className="col-md-4 description" data-aos="fade-up">
        <img src={imgLogo} alt=""/>
        <h3>{content.section_features_feature_time_title}</h3>
        <p>{content.section_features_feature_time_text}</p>
      </div>
      <div className="col-md-8 images d-none d-md-block">
        <img className="imgBack" src={isRetina(imgBack, imgBack2x)} alt="" data-aos="fade-left" data-aos-anchor-placement="top-center" />
        <img className="imgFront" src={isRetina(imgFront, imgFront2x)} alt="" data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="100" />
      </div>
    </div>
  );
} 

export default FeatureTime;

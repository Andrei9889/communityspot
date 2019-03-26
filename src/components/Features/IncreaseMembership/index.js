import React from 'react';

import content from 'config/content.json';
import './FeatureMembership.scss';
import imgLogo from './images/icon-graph.svg';
import imgBack from './images/feature-signup.png';
import imgFront from './images/feature-volunteer.png';

function FeatureMembership(){
  return (
    <div className="row feature-membership">
      <div className="col-md-4 description" data-aos="fade-up">
        <img src={imgLogo} alt=""/>
        <h3>{content.section_features_feature_membership_title}</h3>
        <p>{content.section_features_feature_membership_text}</p>
      </div>
      <div className="col-md-8 images d-none d-md-block">
        <img className="imgBack" src={imgBack} alt="" data-aos="fade-left" data-aos-anchor-placement="top-center" />
        <img className="imgFront" src={imgFront} alt="" data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="100"/>
      </div>
    </div>
  );
}

export default FeatureMembership;

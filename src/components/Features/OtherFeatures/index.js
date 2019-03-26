import React, { Fragment } from 'react';

import content from 'config/content.json';
import './FeatureOther.scss';
import img0 from './images/1.svg';
import img1 from './images/2.svg';
import img2 from './images/3.svg';
import img3 from './images/4.svg';
import img4 from './images/5.svg';
import img5 from './images/6.svg';

const images = { img0, img1, img2, img3, img4, img5 };

function FeatureOther(){
  return (
    <Fragment>
      <h3>{content.section_other_features_title}</h3>
      <div className="row feature-other">
        {content.section_other_features_list.map((feature,i)=>{
          return (
            <div key={i} className="col-sm-6 col-md-4 feature-card" data-aos="fade-up" data-aos-anchor-placement="top-center">
              <div className="row">
                <div className="col-2">
                  <img src={images[`img${i}`]} alt="" />
                </div>
                <div className="feature-other-description col-10">
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default FeatureOther;
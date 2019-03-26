import React from 'react';

import { isRetina } from 'utils/common';
import content from 'config/content.json';
import './SectionDescription.scss';
import imgFront from './images/homepage-hca.png';
import imgFront2x from './images/homepage-hca@2x.png';
import imgBack from './images/homepage-ktcc.png';
import imgBack2x from './images/homepage-ktcc@2x.png';

function SectionDescription(props) {
  return (
    <section className="section-description">
      <div className="container">
        <div className="row">
          <div className="col-md-6 description">
            <h1 className="title" dangerouslySetInnerHTML={content.section_description_title} />
            <p>{content.section_description_subtitle_1}</p>
            <p>{content.section_description_subtitle_2}</p>
            <div className="button" onClick={props.toggleModal}>
              <span>{content.section_description_btn_text}</span>
            </div>
          </div>
          <div className="col-md-6 images d-none d-md-block" data-aos="fade-left">
            <div className="imgFront text-right">
              <img src={isRetina(imgFront, imgFront2x)} alt="" />
              <div className="text-bottom">{content.section_description_images_text_bottom}</div>
            </div>
            <div className="imgBack">
              <img src={isRetina(imgBack, imgBack2x)} alt="" />
              <div className="text-top">{content.section_description_images_text_top}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionDescription;
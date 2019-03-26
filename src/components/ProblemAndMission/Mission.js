import React from 'react';

import content from 'config/content.json';
import './styles.scss';
import gift from './images/gif-placeholder-together.png';

const OurMission = () => {
  return (
    <section className="section-content pt-0" id="section1">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="text custom-padding-mission" data-aos="fade-up">
              <h3>{content.section_mission_subtitle}</h3>
              <h2 className="title">{content.section_mission_title}</h2>
              <p dangerouslySetInnerHTML={content.section_mission_text} />
            </div>
          </div>
          <div className="col-sm gift text-center" data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-offset="-300">
            <img src={gift} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
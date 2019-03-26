import React from 'react';

import content from 'config/content.json';
import './SectionFeatures.scss';
import SaveTime from '../SaveTime';
import IncreaseMembership from '../IncreaseMembership';
import OtherFeatures from '../OtherFeatures';

function SectionFeatures(){
  return (
    <section className="section-features" id="section2">
      <div className="container">
        <h2 className="title">{content.section_features_title}</h2>
        <h3 className="title title-light">{content.section_features_subtitle}</h3>
        
        <SaveTime />
        <IncreaseMembership />
        <OtherFeatures />
      </div>
    </section>
  );
}

export default SectionFeatures;

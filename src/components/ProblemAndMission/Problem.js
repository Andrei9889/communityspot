import React from 'react';

import content from 'config/content.json';
import './styles.scss';
import gift from './images/ezgif-2-256e023efb44.gif';

const OurProblem = () => {
  return (
    <section className="section-content">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="text custom-padding-problem" data-aos="fade-up">
              <h3>{content.section_problem_subtitle}</h3>
              <h2 className="title">{content.section_problem_title}</h2>
              <p dangerouslySetInnerHTML={content.section_problem_text} />
            </div>
          </div>
          <div className="col-md gift text-center" data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-offset="-300">
            <img src={gift} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProblem;
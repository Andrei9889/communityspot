import React from 'react';

import MailForm from 'components/MailForm';
import './SectionMailForm.scss';

function SectionMailForm() {
  return (
    <section className="bg-green">
    <div className="container section-email-form">
      <svg>
        <rect x="0" y="0" fill="#fff" />
      </svg>
        <div className="green">
          <MailForm />
        </div>
      </div>
    </section>
  );
}

export default SectionMailForm;

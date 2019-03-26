import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { Link as RLink } from "react-scroll";
import * as Yup from 'yup';

import content from 'config/content.json';
import './MailForm.scss';

const apiUrl = '';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('E-mail is not valid!').required('E-mail is required!')
});

class MailForm extends Component {
  state = {
    isSubmitting: false,
    isFade: false
  }

  handleSubmit = (values, actions) => {
    const { email } = values;

    axios.post(apiUrl, { email })
      .then(() => { 
        this.setState({ isFade: true }, () => {
          setTimeout(() => {
            actions.resetForm({});
            this.setState({ isSubmitting: true, isFade: false });
            setTimeout(this.resetSubmittingView, 2500);
          }, 500);
        });
        
      })
      .catch(error => { console.log(error) });
  }

  resetSubmittingView = () => {
    this.setState({ isFade: true }, () => {
      setTimeout(() => {
        this.setState({ isSubmitting: false, isFade: false });
      }, 500);
    });
  }
  
  render() {
    const { bottomContent, toggle } = this.props;
    const { isSubmitting, isFade } = this.state;

    const statusText = isSubmitting ? 'after' : 'before';
    const title = content[`section_email_form_title_${statusText}`];
    const subtitle = content[`section_email_form_text_${statusText}`];
    const text = bottomContent ? content[`mail_form_bottom_content_${statusText}`] : '';
    const icon = !isSubmitting ? 'fa-arrow-right' : 'fa-check';
    
    return (
      <div className="mail-form">
        <h2 className={`title ${isFade ? 'fade' : ''}`}>{title}</h2>
        <h4 className={`subtitle ${isFade ? 'fade' : ''}`} dangerouslySetInnerHTML={subtitle} />
        <div className="form-wrapper text-center">
          <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={this.handleSubmit}
            render={(props) => <CustomForm 
              bottomContent={text} 
              isFade={isFade} 
              isSubmittingForm={isSubmitting}
              icon={icon} 
              toggle={toggle}
              {...props} 
            />}
          />
        </div>
      </div>
    );
  }
}

const CustomForm = ({ values, errors, touched, bottomContent, isFade, isSubmittingForm, icon, toggle }) => {
  const isError = field => errors[field] && touched[field];
  
  return (
    <Fragment>
      <Form>
        <Field
          type="email"
          name="email"
          placeholder="me@mycommunitycentre.com"
          value={values.email || ''}
          className={`${isError('email') ? 'is-invalid' : ''}`}
        />
        <button type="submit" id="myBtn">
          <i className={`fas ${icon} ${isFade ? 'fade' : ''}`}></i>
        </button>
      </Form>
      {bottomContent &&
      <div className={`content-bottom ${isFade ? 'fade' : ''}`} >
        <span dangerouslySetInnerHTML={bottomContent} />{` `}
        {isSubmittingForm ||
        <RLink to="section2" smooth={true} delay={1500}><span onClick={toggle}>Check out why</span></RLink>
        }
      </div>
      }
    </Fragment>
  );
}

export default MailForm;

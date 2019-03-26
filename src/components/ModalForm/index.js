import React, { Fragment } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import MailForm from 'components/MailForm';
import './ModalForm.scss';
import times from './images/icon-close.svg';

const ModalForm = (props) => {
  const { modal, toggle } = props;

  const closeBtn = (
    <button className="modal-close" onClick={toggle}>
      <img src={times} alt="" />
    </button>
  );

  return (
    <Fragment>
      <div className={`cd-overlay-nav${modal ? ' active' : ''}`}><span></span></div>
      <Modal isOpen={modal} fade={true} toggle={toggle} modalTransition={{ timeout: 600 }} className={props.className}>
        <div className="container">
          <ModalHeader toggle={toggle} close={closeBtn}>
            <div className="logo"><span>CommunitySpot</span></div>
          </ModalHeader>
          <ModalBody>
            <MailForm bottomContent toggle={toggle} />
          </ModalBody>
        </div>
      </Modal>
    </Fragment>
  );
};

export default ModalForm;
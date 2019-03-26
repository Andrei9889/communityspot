import React, { Component, Fragment } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header             from 'components/Header';
import SectionDescription from 'components/SectionDescription';
import SectionProblem     from 'components/ProblemAndMission/Problem';
import SectionMission     from 'components/ProblemAndMission/Mission';
import SectionFeatures    from 'components/Features/Wrapper';
import SectionDevices     from 'components/SectionDevices';
import SectionMailForm    from 'components/SectionMailForm';
import Footer             from 'components/Footer';
import ModalForm          from 'components/ModalForm';

class App extends Component {
  state = {
    isModalOpen: false,
  }
  
  componentDidMount() {
    AOS.init();
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }
  
  render() {
    const { isModalOpen } = this.state;
     
    return (
      <Fragment>
        <Header             toggleModal={this.toggleModal} />
        <SectionDescription toggleModal={this.toggleModal} />
        <SectionProblem />
        <SectionMission />
        <SectionFeatures />
        <SectionDevices />
        <SectionMailForm />
        <Footer />
        <ModalForm modal={isModalOpen} toggle={this.toggleModal} />
      </Fragment>
    );
  }
}

export default App;

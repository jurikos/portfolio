import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    overflow              : 'auto',
    maxWidth              : '80%',
    maxHeight             : '90%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

class TechStack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.openModal}
                className='c-button c-button--secondary v-animation v-animation--slide-in-left'>
          Tech Stack
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='Tech Stack'
          overlayClassName='c-overlay v-animation v-animation--fade-in'
        >
          <button className='c-overlay__button' onClick={this.closeModal}>
            <span className='c-overlay__close js-overlay-close' />
          </button>
          <div className='c-listing v-animation v-animation--zoom-in'>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>Javascript</h2>
              <ul className='c-listing__list'>
                <li><i data-svg='react'></i> React</li>
                <li><i data-svg='angular'></i> Angular</li>
                <li><i data-svg='vue'></i> Vue.js</li>
                <li><i data-svg='typescript'></i> TypeScript</li>
                <li><i data-svg='jquery'></i> jQuery</li>
                <li><i data-svg='html5'></i> Canvas</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>Frameworks</h2>
              <ul className='c-listing__list'>
                <li><i data-svg='react'></i> React Native</li>
                <li><i data-svg='ionic'></i> Ionic</li>
                <li><i data-svg='bootstrap'></i> Bootstrap</li>
                <li><i data-svg='foundation'></i> Foundation</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>Platforms</h2>
              <ul className='c-listing__list'>
                <li><i data-svg='magento'></i> Magento</li>
                <li><i data-svg='wordpress'></i> Wordpress</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>Builders</h2>
              <ul className='c-listing__list'>
                <li><i data-svg='gulp'></i> Gulp</li>
                <li><i data-svg='grunt'></i> Grunt</li>
                <li><i data-svg='webpack'></i> Webpack</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>CSS</h2>
              <ul className='c-listing__list'>
                <li><i data-svg='sass'></i> Sass</li>
                <li><i data-svg='less'></i> Less</li>
                <li><i data-svg='css'></i> Animation</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>HTML</h2>
              <ul className='c-listing__list'>
                <li><i data-svg='svg'></i> SVG</li>
                <li><i data-svg='html5'></i> XML</li>
                <li><i data-svg='bem'></i> BEM</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>Version Control</h2>
              <ul className='c-listing__list'>
                <li><i data-svg='git'></i> Git</li>
                <li><i data-svg='mercurial'></i> Mercurial</li>
                <li><i data-svg='github'></i> GitHub</li>
                <li><i data-svg='bitbucket'></i> BitBucket</li>
                <li><i data-svg='sourcetree'></i> SourceTree</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>UX / UI</h2>
              <ul className='c-listing__list'>
                <li><i data-svg='sketch'></i> Sketch</li>
                <li><i data-svg='photoshop'></i> Photoshop</li>
                <li><i data-svg='illustrator'></i> Illustrator</li>
                <li><i data-svg='invision'></i> InVision</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>Optimisation</h2>
              <ul className='c-listing__list'>
                <li><i data-svg='security'></i> Security</li>
                <li><i data-svg='performance'></i> Performance</li>
                <li><i data-svg='google'></i> SEO</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>Methodologies</h2>
              <ul className='c-listing__list'>
                <li><i data-svg='board'></i> Agile</li>
                <li><i data-svg='tasks'></i> Scrum</li>
                <li><i data-svg='list'></i> Kanban</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>PM Tools</h2>
              <ul className='c-listing__list'>
                <li><i data-svg='jira'></i> Jira</li>
                <li><i data-svg='confluence'></i> Confluence</li>
                <li><i data-svg='trello'></i> Trello</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>Communication</h2>
              <ul className='c-listing__list'>
                <li><i data-svg='skype'></i> Skype</li>
                <li><i data-svg='slack'></i> Slack</li>
                <li><i data-svg='hipchat'></i> HipChat</li>
              </ul>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default TechStack;

import React, { Component } from 'react';
import Modal from 'react-modal';

import Icon from '../Icon';

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

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.toggleModal}
                className='c-button c-button--secondary v-animation v-animation--slide-in-left'>
          Tech Stack
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.toggleModal}
          style={customStyles}
          contentLabel='Tech Stack'
          overlayClassName='c-overlay v-animation v-animation--fade-in'
        >
          <button className='c-overlay__button' onClick={this.toggleModal}>
            <span className='c-overlay__close js-overlay-close' />
          </button>
          <div className='c-listing v-animation v-animation--zoom-in'>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>Javascript</h2>
              <ul className='c-listing__list'>
                <li><Icon name='javascript' /> ES5</li>
                <li><Icon name='javascript' /> ES6</li>
                <li><Icon name='react' /> React</li>
                <li><Icon name='react' /> React Native</li>
                <li><Icon name='redux' /> Redux</li>
                <li><Icon name='typescript' /> TypeScript</li>
                <li><Icon name='angular' /> Angular</li>
                <li><Icon name='ionic' /> Ionic</li>
                <li><Icon name='jquery' /> jQuery</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>CMS / Backend</h2>
              <ul className='c-listing__list'>
                <li><Icon name='magento' /> Magento 2</li>
                <li><Icon name='magento' /> Magento 1</li>
                <li><Icon name='wordpress' /> Wordpress</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>Builders</h2>
              <ul className='c-listing__list'>
                <li><Icon name='webpack' /> Webpack</li>
                <li><Icon name='gulp' /> Gulp</li>
                <li><Icon name='grunt' /> Grunt</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>Version Control</h2>
              <ul className='c-listing__list'>
                <li><Icon name='git' /> Git</li>
                <li><Icon name='mercurial' /> Mercurial</li>
                <li><Icon name='github' /> GitHub</li>
                <li><Icon name='bitbucket' /> BitBucket</li>
                <li><Icon name='sourcetree' /> SourceTree</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>CSS</h2>
              <ul className='c-listing__list'>
                <li><Icon name='sass' /> Sass</li>
                <li><Icon name='less' /> Less</li>
                <li><Icon name='css' /> Animation</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>HTML</h2>
              <ul className='c-listing__list'>
                <li><Icon name='svg' /> SVG</li>
                <li><Icon name='html5' /> XML</li>
                <li><Icon name='bem' /> BEM</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>UX / UI</h2>
              <ul className='c-listing__list'>
                <li><Icon name='invision' /> InVision</li>
                <li><Icon name='sketch' /> Sketch</li>
                <li><Icon name='photoshop' /> Photoshop</li>
                <li><Icon name='illustrator' /> Illustrator</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>Optimisation</h2>
              <ul className='c-listing__list'>
                <li><Icon name='security' /> Security</li>
                <li><Icon name='performance' /> Performance</li>
                <li><Icon name='google' /> SEO</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>Methodologies</h2>
              <ul className='c-listing__list'>
                <li><Icon name='board' /> Agile</li>
                <li><Icon name='tasks' /> Scrum</li>
                <li><Icon name='list' /> Kanban</li>
              </ul>
            </div>
            <div className='c-listing__col'>
              <h2 className='c-listing__heading'>PM Tools</h2>
              <ul className='c-listing__list'>
                <li><Icon name='trello' /> Trello</li>
                <li><Icon name='jira' /> Jira</li>
                <li><Icon name='confluence' /> Confluence</li>
              </ul>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default TechStack;

import React, { Component } from 'react';

import Loading from './Loading';
import TechStack from './main/TechStack';
import Portfolio from './main/Portfolio';
import ContactMe from './main/ContactMe';

class Main extends Component {
  fetchApi(url, localUrl = '/content.json') {
    fetch(url)
      .then(this.handleErrors)
      .then(res => res.json())
      .then(json => {
        const stringifiedJson = JSON.stringify(json);

        sessionStorage.setItem(url, stringifiedJson);

        this.setState({
          content: JSON.parse(stringifiedJson)
        });

        return json;
      })
      .catch(error => {
        console.error(error);
        this.fetchApi(localUrl);
      });
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  constructor(props) {
    super(props);

    this.state = {
      content: null,
      techStack: null,
      contactMe: null
    }
  }

  componentDidMount() {
    const url = 'https://jurikos.github.io/portfolio/content.json';
    const cached = sessionStorage.getItem(url);

    if (!cached) {
      this.fetchApi(url);
    } else {
      this.setState({
        content: JSON.parse(cached)
      });
    }
  }

  render() {
    const content = this.state.content ? this.state.content : null;

    return (
      <main className='l-main' data-role='main'>
        <div className='c-content'>
          <h1 className='c-content__heading v-animation v-animation--slide-in-down'>Frontend Developer</h1>
          {content ?
            <React.Fragment>
              <article className='c-content__txt v-animation v-animation--fade-in-up'
                       dangerouslySetInnerHTML={{ __html: content.summary }} />
              <div className='c-content__cta'>
                <TechStack data={content.techStack} />
                <Portfolio data={content.portfolio} />
                <ContactMe data={content.contact} />
              </div>
            </React.Fragment>
            : <Loading />}
        </div>
      </main>
    );
  }
}

export default Main;

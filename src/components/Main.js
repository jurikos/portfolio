import React, { Component } from 'react';

import Loading from './Loading';
import TechStack from './main/TechStack';
import ContactMe from './main/ContactMe';

class Main extends Component {
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
      fetch(url)
        .then(this.handleErrors)
        .then(res => res.json())
        .then(json => {
          const stringifiedJson = JSON.stringify(json)

          sessionStorage.setItem(url, stringifiedJson);

          this.setState({
            content: JSON.parse(stringifiedJson)
          });

          return json;
        })
        .catch(error => console.error(error));
    } else {
      this.setState({
        content: JSON.parse(cached)
      });
    }
  }

  render() {
    const content = this.state.content ? this.state.content.summary : null;

    return (
      <main className="l-main" data-role="main">
        <div className="c-content">
          <h1 className="c-content__heading v-animation v-animation--slide-in-down">Frontend Developer</h1>
          {content ? <article className="c-content__txt v-animation v-animation--fade-in-up"
                              dangerouslySetInnerHTML={{ __html: content }} /> : <Loading />}
          <div className="c-content__cta">
            <TechStack />
            <ContactMe />
          </div>
        </div>
      </main>
    );
  }
}

export default Main;

import React, { Component } from 'react';

import TechStack from './main/TechStack';
import ContactMe from './main/ContactMe';

class Main extends Component {
  render() {
    return (
      <main className="l-main" data-role="main">
        <div className="c-content">
          <h1 className="c-content__heading v-animation v-animation--slide-in-down">Frontend Developer</h1>
          <article className="c-content__txt v-animation v-animation--fade-in-up">
            <p>
              Senior <strong>Frontend Web &amp; Mobile</strong> developer with a strong focus on
              <strong>performance optimisation</strong>, <strong>clean code</strong> and passion to <strong>UX</strong>.
              I have 10 Years of professional experience developing high-end <strong>ecommerce</strong> &amp; <strong>
              corporate websites</strong>, cross-platform <strong>mobile apps</strong>.
            </p>
          </article>
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

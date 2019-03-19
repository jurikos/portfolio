import React, { Component } from 'react';

class Main extends Component {
  handleClick(e) {
    console.log(e.target);
  }

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
          <div id="contact-me-overlay" className="h-hidden">
            <ul className="c-contacts v-animation v-animation--zoom-in">
              <li className="c-contacts__item">
                <a className="c-contacts__link js-antispam-link" href='mailto:juri.kostjunin@gmail.com'>
                  <i data-svg="envelope"></i>
                </a>
              </li>
              <li className="c-contacts__item">
                <a className="c-contacts__link" href="https://www.linkedin.com/in/jurikos/" rel="noopener noreferrer" target="_blank">
                  <i data-svg="linkedin"></i>linkedin.com/in/jurikos
                </a>
              </li>
            </ul>
          </div>
          <div className="c-content__cta">
            <button onClick={this.handleClick}
                    className="c-button c-button--secondary v-animation v-animation--slide-in-left js-overlay-trigger">
              Tech Stack
            </button>
            <button onClick={this.handleClick}
                    className="c-button c-button--primary v-animation v-animation--slide-in-right js-overlay-trigger">
              Contact Me
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;

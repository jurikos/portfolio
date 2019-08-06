import React from 'react';
import { useCacheContent } from '../hooks/cache-content';
import Loading from './common/Loading';
import TechStack from './main/TechStack';
import Portfolio from './main/Portfolio';
import ContactMe from './main/ContactMe';

const Main = () => {
  const content = useCacheContent();

  return (
    <main className='l-main' data-role='main'>
      <div className='c-content'>
        {content ?
          <>
            <h1 className='c-content__heading v-animation v-animation--slide-in-down'
                dangerouslySetInnerHTML={{ __html: content.title }} />
            <article className='c-content__txt v-animation v-animation--fade-in-up'
                     dangerouslySetInnerHTML={{ __html: content.summary }} />
            <div className='c-content__cta'>
              <TechStack data={content.techStack} />
              <Portfolio data={content.portfolio} />
              <ContactMe email={content.contact.email} linkedIn={content.contact.linkedIn} />
            </div>
          </>
          : <Loading />}
      </div>
    </main>
  );
}

export default Main;

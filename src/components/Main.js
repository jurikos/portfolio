import React, { useState, useEffect } from 'react';
import { getSessionStorageItem, setSessionStorageItem } from '../helper/session-storage';
import { fetchDataAsync } from '../helper/fetch-data-async';
import Loading from './common/Loading';
import TechStack from './main/TechStack';
import Portfolio from './main/Portfolio';
import ContactMe from './main/ContactMe';

const Main = () => {
  const [content, setContent] = useState(null);
  const dataUrl = {
    live: 'https://jurikos.github.io/portfolio/content.json',
    local: '/content.json',
  };

  const setContentCache = (data) => {
    setContent(data);
    setSessionStorageItem('content', JSON.stringify(data));
  }

  useEffect(() => {
    const cachedContent = getSessionStorageItem('content');

    cachedContent ?
      setContent(JSON.parse(cachedContent)) :
      fetchDataAsync(dataUrl.live)
        .then(data => setContentCache(data))
        .catch(error => {
          console.error(error);

          fetchDataAsync(dataUrl.local)
            .then(data => setContentCache(data))
            .catch(error => console.error(error));
        });
  },[dataUrl.live, dataUrl.local]);

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

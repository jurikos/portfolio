import { useState, useEffect } from 'react';
import { getSessionStorageItem, setSessionStorageItem } from '../helper/session-storage';
import fetchDataAsync from '../helper/fetch-data-async';
import config from '../config';

const useCacheContent = () => {
  const [content, setContent] = useState(null);
  const dataUrl = {
    live: config.content.live,
    local: config.content.local,
  };

  const setContentCache = (data) => {
    setContent(data);
    setSessionStorageItem('content', JSON.stringify(data));
  };

  useEffect(() => {
    const cachedContent = getSessionStorageItem('content');

    cachedContent
      ? setContent(JSON.parse(cachedContent))
      : fetchDataAsync(dataUrl.live)
        .then((data) => setContentCache(data))
        .catch((liveErr) => {
          // eslint-disable-next-line no-console
          console.error(liveErr);
          fetchDataAsync(dataUrl.local)
            .then((data) => setContentCache(data))
            // eslint-disable-next-line no-console
            .catch((localErr) => console.error(localErr));
        });
  }, [dataUrl.live, dataUrl.local]);

  return content;
};

export default useCacheContent;

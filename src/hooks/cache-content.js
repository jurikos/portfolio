import { useState, useEffect } from 'react';
import { getSessionStorageItem, setSessionStorageItem } from '../helper/session-storage';
import { fetchDataAsync } from '../helper/fetch-data-async';
import config from '../config';

export const useCacheContent = () => {
  const [content, setContent] = useState(null);
  const dataUrl = {
    live: config.content.live,
    local: config.content.local,
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

  return content;
};

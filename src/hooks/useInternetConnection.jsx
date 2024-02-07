import React, { useEffect, useState } from 'react';
import consoleLogger from './logger';

const useInternetConnection = () => {
  const [active, setActive] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener('online', async (e) => {
      consoleLogger('call');
      setActive(true);
    });
    window.addEventListener('offline', async (e) => {
      consoleLogger('call-2');
      setActive(false);
    });
    return () => {
      window.removeEventListener('online', (e) => {
        setActive(true);
      });
      window.removeEventListener('offline', (e) => {
        setActive(true);
      });
    };
  }, []);
  return active;
};

export default useInternetConnection;

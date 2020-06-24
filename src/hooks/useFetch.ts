import React from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { sendGet } from '@/api/axios';

export default function useFetch(url: string, params?: any) {
  const [timestamp, setTimestamp] = React.useState(0);
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const reload = () => setTimestamp(new Date().getTime());

  useDeepCompareEffect(() => {
    let cancelled = false;
    setLoading(true);

    sendGet(url, params)
      .then(response => {
        if (cancelled) return;
        setLoading(false);
        setData(response.data);
      })
      .catch(error => {
        if (cancelled) return;
        setLoading(false);
        setErrorMessage(String(error));
      });
    return () => {
      cancelled = true;
    };
  }, [url, params, timestamp]);

  return {
    data,
    loading,
    errorMessage,
    reload,
  };
}

import React from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { sendGet } from '@/api/axios';
import { getErrorMessage } from '@/utils';

export default function useFetch(url: string, params?: any) {
  const [result, setResult] = React.useState({
    timestamp: 0,
    data: null,
    pageIndex: 0,
    pageSize: 0,
    totalItems: 0,
    totalPages: 0,
    loading: false,
    errorMessage: '',
  });

  const reload = () =>
    setResult({ ...result, timestamp: new Date().getTime() });

  useDeepCompareEffect(() => {
    let cancelled = false;
    setResult({ ...result, loading: true });

    sendGet(url, params)
      .then(response => {
        if (cancelled) return;
        const responseData = response.data;
        setResult({
          ...result,
          loading: false,
          data: responseData.data,
          pageIndex: responseData.pageIndex,
          pageSize: responseData.pageSize,
          totalItems: responseData.totalItems,
          totalPages: responseData.totalPages,
        });
      })
      .catch(error => {
        if (cancelled) return;
        setResult({ ...result, loading: false });
        setResult({ ...result, errorMessage: getErrorMessage(error) });
      });
    return () => {
      cancelled = true;
    };
  }, [url, params, result.timestamp]);

  return {
    ...result,
    reload,
  };
}

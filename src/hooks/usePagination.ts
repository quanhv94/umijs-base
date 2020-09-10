import React from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { sendGet } from '@/api/axios';
import { getErrorMessage } from '@/utils';

export default function usePagination(url: string, params?: any) {
  const [result, setResult] = React.useState({
    timestamp: 0,
    data: [],
    pageIndex: 1,
    pageSize: 0,
    totalItems: 0,
    totalPages: 0,
    loading: false,
    hasMore: true,
    errorMessage: '',
  });

  const removeItem = (id: number) => {
    const newData = result?.data?.filter((x: any) => x?.id !== id);
    setResult({ ...result, data: newData });
  };

  const updateItem = (id: number, fields: any) => {
    const newData: any = result?.data?.map((x: any) => {
      if (x.id === id) {
        return {
          ...x,
          ...fields,
        };
      }
      return x;
    });
    setResult({ ...result, data: newData });
  };

  const getItem = (id: number) => result?.data?.find((x: any) => x.id === id);

  const reload = () => {
    if (result.pageIndex === 1) {
      setResult({ ...result, timestamp: new Date().getTime() });
    } else {
      setResult({ ...result, pageIndex: 1 });
    }
  };

  const loadMore = () => {
    setResult({ ...result, pageIndex: result.pageIndex + 1 });
  };

  useDeepCompareEffect(() => {
    if (result.loading) return;
    setResult({ ...result, loading: true });
    sendGet(url, { ...params, pageIndex: result.pageIndex })
      .then((response: any) => {
        setResult({ ...result, loading: false });
        const responseData = response.data;
        const newResult = {
          ...result,
          hasMore:
            Number(responseData.pageIndex) < Number(responseData.totalPages),
          pageSize: responseData.pageSize,
          totalItems: responseData.totalItems,
          totalPages: responseData.totalPages,
          data:
            responseData.pageIndex === 1
              ? responseData.data
              : [...result.data, ...responseData.data],
        };
        setResult(newResult);
      })
      .catch(error => {
        setResult({
          ...result,
          loading: false,
          errorMessage: getErrorMessage(error),
        });
      });
  }, [url, result.pageIndex, result.timestamp, params]);

  return {
    ...result,
    getItem,
    removeItem,
    updateItem,
    reload,
    loadMore,
  };
}

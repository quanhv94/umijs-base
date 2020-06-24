import React from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { sendGet } from '@/api/axios';

export default function usePagination(url: string, params?: any) {
  const [timestamp, setTimestamp] = React.useState(0);
  const [pageIndex, setPageIndex] = React.useState(1);
  const [data, setData] = React.useState<Array<any>>([]);
  const [pageSize, setPageSize] = React.useState(null);
  const [totalItems, setTotalItems] = React.useState(null);
  const [totalPage, setTotalPage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');

  const removeItem = (id: number) => {
    const newData = data.filter(x => x.id !== id);
    setData(newData);
  };

  const updateItem = (id: number, fields: any) => {
    const newData = data.map(x => {
      if (x.id === id) {
        return {
          ...x,
          ...fields,
        };
      }
      return x;
    });
    setData(newData);
  };

  const getItem = (id: number) => data.find(x => x.id === id);

  const reload = () => {
    if (pageIndex === 1) {
      setTimestamp(new Date().getTime());
    } else {
      setPageIndex(1);
    }
  };

  const loadMore = () => {
    setPageIndex(pageIndex + 1);
  };

  const fetchData = () => {
    if (loading) return;
    setLoading(true);
    sendGet(url, { ...params, page_index: pageIndex })
      .then((response: any) => {
        setLoading(false);
        const reponseData = response.data;
        if (pageIndex === 1) {
          setData(reponseData.data);
        } else {
          setData([...data, ...reponseData.data]);
        }
        setHasMore(
          Number(reponseData.page_index) < Number(reponseData.total_pages),
        );
        setPageSize(reponseData.page_size);
        setTotalItems(reponseData.total_item);
        setTotalPage(reponseData.total_pages);
      })
      .catch(error => {
        setLoading(false);
        setErrorMessage(String(error));
      });
  };

  useDeepCompareEffect(() => {
    fetchData();
  }, [url, pageIndex, timestamp, params]);

  return {
    data,
    loading,
    hasMore,
    errorMessage,
    pageSize,
    totalItems,
    totalPage,
    getItem,
    removeItem,
    updateItem,
    reload,
    loadMore,
  };
}

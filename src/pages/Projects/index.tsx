import React, { useState } from 'react';
import { Spin, Pagination, Button } from 'antd';
import ProductList from './ProjectList';
import useFetch from '@/hooks/useFetch';

const pageSize = 5;

export default function Products() {
  const [filter, setFilter] = useState({ pageIndex: 1, pageSize });

  const { data, loading, reload } = useFetch('/projects', filter);

  const handlePageChange = (page: number) => {
    setFilter({ ...filter, pageIndex: page });
  };

  return (
    <div>
      <h2>List of Project</h2>
      <Button onClick={reload}>Reload</Button>
      <ProductList loading={loading} projects={data?.data} />
      <Pagination
        current={filter.pageIndex}
        total={data?.totalItems}
        pageSize={filter.pageSize}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
    </div>
  );
}

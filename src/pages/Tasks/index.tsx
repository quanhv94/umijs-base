import React, { useState } from 'react';
import { Spin, Pagination, Button, Row } from 'antd';
import ProductList from './TaskList';
import useFetch from '@/hooks/useFetch';

const pageSize = 5;

export default function Products() {
  const [filter, setFilter] = useState({ pageIndex: 1, pageSize });

  const { data, totalItems, pageIndex, loading, reload } = useFetch(
    '/v1/app/task/list',
    filter,
  );

  const handlePageChange = (page: number) => {
    setFilter({ ...filter, pageIndex: page });
  };

  return (
    <div>
      <Row justify="space-between">
        <h2>List of Task</h2>
        <Button onClick={reload}>Reload</Button>
      </Row>
      <ProductList loading={loading} projects={data} />
      <p />
      <Pagination
        current={pageIndex}
        total={totalItems}
        pageSize={pageSize}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
    </div>
  );
}

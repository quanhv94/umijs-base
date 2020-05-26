import React, { useState } from 'react';
import { Spin } from 'antd';
import ProductList from './ProjectList';
import useFetch from '@/hooks/useFetch';

export default function Products() {
  const projects = useFetch('/posts', {});
  if (projects.loading) return <Spin />;
  return (
    <div>
      <h2>List of Project</h2>
      <ProductList projects={projects.data || []} />
    </div>
  );
}

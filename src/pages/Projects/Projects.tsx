import React from 'react';
import { Spin } from 'antd';
import ProductList from './ProjectList';
import { useSelector, useDispatch } from 'umi';

export default function Products() {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.projects.loading);
  const projects = useSelector((state: any) => state.projects.items);
  React.useEffect(() => {
    dispatch({ type: 'projects/loadAll' });
  }, []);
  const handleDelete = (projectId: Number) => {
    dispatch({
      type: 'projects/delete',
      projectId,
    });
  };
  if (loading) return <Spin />;
  return (
    <div>
      <h2>List of Project</h2>
      <ProductList onDelete={handleDelete} projects={projects} />
    </div>
  );
}

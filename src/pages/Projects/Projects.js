import React from 'react';
import { connect } from 'umi';
import { Spin } from 'antd';
import ProductList from './ProjectList';

const Products = ({ dispatch, projects, loading }) => {
  React.useEffect(() => {
    dispatch({ type: 'projects/loadAll' });
  }, []);
  const handleDelete = (projectId) => {
    dispatch({
      type: 'projects/delete',
      projectId,
    });
  }
  if (loading) return <Spin />
  return (
    <div>
      <h2>List of Project</h2>
      <ProductList onDelete={handleDelete} projects={projects} />
    </div>
  );
};

export default connect(({ projects }) => ({
  projects: projects.items,
  loading: projects.loading,
}))(Products);

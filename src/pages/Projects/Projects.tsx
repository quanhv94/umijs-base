import React from 'react';
import { connect, Dispatch } from 'umi';
import { Spin } from 'antd';
import ProductList from './ProjectList';

interface IProps {
  dispatch: Dispatch;
  projects: Array<any>;
  loading: Boolean;
}

const Products = ({ dispatch, projects, loading }: IProps) => {
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
};

interface IState {
  projects: any;
}

export default connect(({ projects }: IState) => ({
  projects: projects.items,
  loading: projects.loading,
}))(Products);

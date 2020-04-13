import React from 'react';
import { Table, Popconfirm, Button } from 'antd';

interface IProps {
  onDelete: Function;
  projects: Array<any>;
}

const ProjectList = ({ onDelete, projects }: IProps) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text: any, record: any) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table rowKey="id" dataSource={projects} columns={columns} />;
};

export default ProjectList;

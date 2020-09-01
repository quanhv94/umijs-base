import React from 'react';
import { Table, Popconfirm, Button, message } from 'antd';

interface IProps {
  projects: Array<any>;
  loading: boolean;
}

const TaskList = ({ projects, loading }: IProps) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Actions',
      render: (text: any, record: any) => {
        return (
          <>
            <Button>Detail</Button>
            &nbsp;
            <Button>Edit</Button>
          </>
        );
      },
    },
  ];
  return (
    <Table
      rowKey="id"
      dataSource={projects || []}
      columns={columns}
      pagination={false}
      loading={loading}
    />
  );
};

export default TaskList;

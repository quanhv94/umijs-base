import React from 'react';
import { Table, Popconfirm, Button, message } from 'antd';

interface IProps {
  projects: Array<any>;
}

const ProjectList = ({ projects }: IProps) => {
  const columns = [
    {
      title: 'title',
      dataIndex: 'title',
    },
    {
      title: 'body',
      dataIndex: 'body',
    },
    {
      title: 'Actions',
      render: (text: any, record: any) => {
        return (
          <Popconfirm
            title="Delete?"
            onConfirm={() => message.warn('TODO: call api delete')}
          >
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table rowKey="id" dataSource={projects || []} columns={columns} />;
};

export default ProjectList;

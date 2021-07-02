import React, { useEffect } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'ID dispositivo',
    dataIndex: 'deviceId',
    sorter: true,
    width: '30%',
  },
  {
    title: 'Stato del dispositivo',
    dataIndex: 'connectionState',
    filters: [
      { text: 'Disconnected', value: 'Disconnected' },
      { text: 'Connected', value: 'Connected' },
    ],
    width: '20%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    filters: [
      { text: 'Enabled', value: 'enabled' },
      { text: 'Disabled', value: 'disabled' },
    ],
    width: '20%',
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    width: '30%',
  },
];

export const TableComponent = ({ data }) => {
  return <Table columns={columns} dataSource={data} />;
};

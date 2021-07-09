import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'ID dispositivo',
    dataIndex: 'deviceId',
    sorter: true,
    width: '30%',
    render: (text: any, record: any) => <a>{record.deviceId}</a>,
  },
  {
    title: 'Stato del dispositivo',
    dataIndex: 'connectionState',
    filters: [
      { text: 'Disconnected', value: 'Disconnected' },
      { text: 'Connected', value: 'Connected' },
    ],
    width: '20%',
    onFilter: (value: any, record: any) =>
      record.connectionState.indexOf(value) === 0,
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

type deviceType = {
  data: {
    deviceId: string;
    status: string;
    lastActivityTime: string;
    region: null;
    plant: null;
    connectionState: string;
    customer: null;
  }[];
};

export const TableComponent = ({ data }: deviceType) => {
  const [devices, setDevices] = useState([
    {
      deviceId: '',
      status: '',
      lastActivityTime: '',
      region: null,
      plant: null,
      connectionState: '',
      customer: null,
    },
  ]);

  useEffect(() => {
    setDevices(data);
  }, []);

  return <Table columns={columns} dataSource={data} />;
};

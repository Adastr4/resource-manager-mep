import React, { useEffect, useState } from 'react';
import { Loader } from '../components/Loader';
import { TableComponent as Table } from '../components/Table';

//APIS
import { getDevices } from '../services/devices';

type deviceType = {
  deviceId: string;
  status: string;
  lastActivityTime: string;
  region: null;
  plant: null;
  connectionState: string;
  customer: null;
}[];

export const Devices = () => {
  const [devices, setDevices] = useState<deviceType>([]);
  const [loading, setLoading] = useState(false);

  const getDevicesPromise = (): Promise<deviceType> => {
    return new Promise((resolve, reject) => {
      getDevices(resolve, reject);
    });
  };

  useEffect(() => {
    const getAllDevices = async () => {
      setLoading(true);
      const dev: deviceType = await getDevicesPromise();
      setDevices(dev);
      setLoading(false);
    };
    getAllDevices();
  }, []);

  if (loading) return <Loader />;

  return <Table data={devices} />;
};

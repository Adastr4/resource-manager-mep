import React, { useEffect, useState } from 'react';
import { Loader } from '../components/Loader';
import Table from '../components/Table';

//APIS
import { getDevices } from '../services/devices';

export const Devices = () => {
  const [devices, setDevices] = useState({});

  const getDevicesPromise = () => {
    return new Promise((resolve, reject) => {
      getDevices(resolve, reject);
    });
  };

  useEffect(() => {
    const getAllDevices = async () => {
      console.log(await getDevicesPromise());
    };
    getAllDevices();
  }, []);

  return <h2>Devices</h2>;
};

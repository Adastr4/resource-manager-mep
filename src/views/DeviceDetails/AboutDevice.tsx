import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DeviceMenu as Menu } from '../../components/DeviceMenu';

export const AboutDevice = () => {
  type paramsType = {
    deviceId: string;
  };

  let params: paramsType = useParams();

  return (
    <>
      <Menu deviceID={params.deviceId} />
      <h4>Nothing to show in About page</h4>
    </>
  );
};

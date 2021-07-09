import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DeviceMenu as Menu } from '../../components/DeviceMenu';
import { Loader } from '../../components/Loader';
import { getTwinDevices } from '../../services/devices';
import { Descriptions } from 'antd';

export const ManageDevice = () => {
  type paramsType = {
    deviceId: string;
  };

  type twinDeviceType = {
    location: {
      region: string;
      plant: string;
    };
    customer: {
      code: string;
      ragSoc: string;
    };
  };

  let params: paramsType = useParams();

  const [twinDevice, setTwinDevices] = useState<twinDeviceType>({
    location: { region: '', plant: '' },
    customer: { code: '', ragSoc: '' },
  });

  const [loading, setLoading] = useState(false);

  const getTwinDevicesPromise = (): Promise<twinDeviceType> => {
    return new Promise((resolve, reject) => {
      getTwinDevices(params.deviceId, resolve, reject);
    });
  };

  useEffect(() => {
    const getTwinDevices = async () => {
      setLoading(true);
      const dev: twinDeviceType = await getTwinDevicesPromise();
      setTwinDevices(dev);
      setLoading(false);
    };
    getTwinDevices();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Menu deviceID={params.deviceId} />
      <Descriptions bordered>
        <Descriptions.Item label="Region" span={2}>
          {twinDevice?.location.region}
        </Descriptions.Item>
        <Descriptions.Item label="Plant" span={1}>
          {twinDevice?.location.plant}
        </Descriptions.Item>
        <Descriptions.Item label="Code" span={2}>
          {twinDevice?.customer.code}
        </Descriptions.Item>
        <Descriptions.Item label="RagSoc" span={1}>
          {twinDevice?.customer.ragSoc}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

import { useParams } from 'react-router-dom';
import { DeviceMenu as Menu } from '../../components/DeviceMenu';
import { Breadcrumb } from 'antd';

export const AboutDevice = () => {
  type paramsType = {
    deviceId: string;
  };

  let params: paramsType = useParams();

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Dispositivi</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/alldevices">Tutti i Dispositivi</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">{params.deviceId}</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Menu deviceID={params.deviceId} />
      <h4>Nothing to show in About page</h4>
    </>
  );
};

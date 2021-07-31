import { Link, useParams } from 'react-router-dom';
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
          <Link to="/alldevices">Tutti i Dispositivi</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{params.deviceId}</Breadcrumb.Item>
        <Breadcrumb.Item>About</Breadcrumb.Item>
      </Breadcrumb>
      <Menu deviceID={params.deviceId} />
      <h4>Nothing to show in About page</h4>
    </>
  );
};

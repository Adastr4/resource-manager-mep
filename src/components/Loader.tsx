import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const Loader = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <div className="full-page-loader">
      <Spin indicator={antIcon} />
    </div>
  );
};

import { notification } from 'antd';
import { getRequest } from './verb.services';

export const getDevices = (resolve, reject) => {
  return getRequest(``, null, false)
    .then(({ data, status }) => {
      if (status === 200) {
        console.log(data);
        resolve(data);
      } else {
        reject();
      }
    })
    .catch((err) => {
      notification.error({
        message: 'Error',
        description: 'Something went wrong while getting devices',
      });
      reject(err);
    });
};

export const getTwinDevices = (deviceID, resolve, reject) => {
  return getRequest(`/api/Resource/twin/${deviceID}`, null, false)
    .then(({ data, status }) => {
      if (status === 200) {
        console.log(data);
        let { tags } = data;
        resolve(tags);
      } else {
        reject();
      }
    })
    .catch((err) => {
      notification.error({
        message: 'Error',
        description: 'Something went wrong while getting devices',
      });
      reject(err);
    });
};

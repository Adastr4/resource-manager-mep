import { notification } from 'antd';
import { putRequest, postRequest } from './verb.services';

export const registerDevice = (deviceID, resolve, reject) => {
  return putRequest(`/api/Resource/${deviceID}`)
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
        description: 'Something went wrong while registering the device',
      });
      reject(err);
    });
};

export const registerUser = (deviceID, resolve, reject) => {
  return postRequest(`/uerss/`)
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
        description: 'Something went wrong while registering the device',
      });
      reject(err);
    });
};

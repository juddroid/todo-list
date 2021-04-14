import axios from 'axios';
import qs from 'qs';
import { REQUEST_URL } from './const';

export const postData = async (title, contents, columnID, callback) => {
  const data = { taskTitle: title, taskContent: contents };
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url: `${REQUEST_URL}/api/columns/${columnID}/tasks`,
  };
  await axios(options);
  callback(true);
};

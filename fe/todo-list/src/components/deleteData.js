import axios from 'axios';
import { REQUEST_URL } from './const';

export const deleteData = async (columnID, taskID) => {
  await axios.delete(`${REQUEST_URL}/api/columns/${columnID}/tasks/${taskID}`);
};

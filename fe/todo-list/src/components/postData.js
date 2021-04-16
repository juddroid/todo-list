import axios from 'axios';
import qs from 'qs';
import { REQUEST_URL } from './const';

export const postData = async (
  title,
  contents,
  columnID,
  cardList,
  setCardList,
  setInputValue
) => {
  const data = { taskTitle: title || ' ', taskContent: contents || ' ' };
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url: `${REQUEST_URL}/api/columns/${columnID}/tasks`,
  };
  await axios(options).then((response) => {
    const taskID = response.data.task.id;
    setCardList([
      { id: taskID, taskTitle: title, taskContent: contents },
      ...cardList,
    ]);
  });
  setInputValue({
    title: '',
    contents: '',
  });
};

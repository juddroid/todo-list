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
    const { id, taskTitle, taskContent, authorName } = response.data.task;
    setCardList([
      {
        id: id,
        taskTitle: taskTitle,
        taskContent: taskContent,
        authorName: authorName,
      },
      ...cardList,
    ]);
  });
  setInputValue({
    title: '',
    contents: '',
  });
};

import axios from 'axios';
import qs from 'qs';
import { REQUEST_URL } from './const';

export const putData = async (
  title,
  contents,
  columnID,
  taskID,
  cardList,
  setCardList
) => {
  console.log('click');
  const data = { taskTitle: title || ' ', taskContent: contents || ' ' };
  const options = {
    method: 'PUT',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url: `${REQUEST_URL}/api/columns/${columnID}/tasks/${taskID}`,
  };
  await axios(options).then(() => {
    setCardList(
      cardList.map((card) => {
        if (card.id === taskID) {
          return {
            ...card,
            taskTitle: title,
            taskContent: contents,
          };
        }
        return card;
      })
    );
  });
};

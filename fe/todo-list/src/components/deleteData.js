import axios from 'axios';
import { REQUEST_URL } from './const';

export const deleteData = async (columnID, taskID, cardList, setCardList) => {
  await axios
    .delete(`${REQUEST_URL}/api/columns/${columnID}/tasks/${taskID}`)
    .then(() => {
      setCardList(cardList.filter((card) => card.id !== taskID));
    });
};

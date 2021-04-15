import React from 'react';
import CancelPopup from '../card/cancelPopup';
import { deleteData } from '../deleteData';
import { toggleDisplay } from '../util';

const Popup = ({
  taskID,
  columnID,
  cardList,
  setCardList,
  popupDisplay,
  setPopupDisplay,
}) => {
  const onRemove = (columnID, taskID, cardList, setCardList) => {
    console.log(cardList);
    console.log(columnID);
    console.log(taskID);
    deleteData(columnID, taskID);
    setCardList(cardList.filter((card) => card.id !== taskID));
    toggleDisplay(popupDisplay, setPopupDisplay);
  };

  return (
    <CancelPopup
      popupDisplay={popupDisplay}
      setPopupDisplay={setPopupDisplay}
      onRemove={() => onRemove(columnID, taskID, cardList, setCardList)}
    />
  );
};

export default Popup;

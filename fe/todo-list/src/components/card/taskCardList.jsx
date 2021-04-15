import React from 'react';
import { ACTIVE, BLOCK, DEFAULT } from '../const';
import Card from './card';

const TaskCardList = ({
  closeActiveTask,
  display,
  columnID,
  cardList,
  setCardList,
  popupDisplay,
  setPopupDisplay,
}) => {
  return (
    <>
      <Card
        cardStyle={ACTIVE}
        closeActiveTask={closeActiveTask}
        display={display}
        columnID={columnID}
        cardList={cardList}
        setCardList={setCardList}
      />
      {cardList.map(({ id, taskTitle, taskContent, authorName }) => (
        <Card
          key={id}
          cardStyle={DEFAULT}
          title={taskTitle}
          content={taskContent}
          author={authorName}
          display={BLOCK}
          columnID={columnID}
          taskID={id}
          cardList={cardList}
          setCardList={setCardList}
          popupDisplay={popupDisplay}
          setPopupDisplay={setPopupDisplay}
        />
      ))}
    </>
  );
};

export default TaskCardList;

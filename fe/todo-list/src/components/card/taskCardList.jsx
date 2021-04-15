import React from 'react';
import { ACTIVE, BLOCK, DEFAULT } from '../const';
import Card from './card';

const TaskCardList = ({
  closeActiveTask,
  display,
  columnID,
  toggleDisplayState,
  setDelColID,
  setDelTasID,
  cardList,
  setCardList,
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
          toggleDisplayState={toggleDisplayState}
          setDelColID={setDelColID}
          setDelTasID={setDelTasID}
          cardList={cardList}
          setCardList={setCardList}
        />
      ))}
    </>
  );
};

export default TaskCardList;

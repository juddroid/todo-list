import React from 'react';
import Card from './card';
import { STATE_DEFAULT } from '../const';

const TaskCardList = ({ list, cardState, cancelList }) => {
  return (
    <>
      {cardState && <Card cardState={cardState} cancelList={cancelList} />}
      {list.map(({ id, taskTitle, taskContent, authorName }) => (
        <Card cardState={STATE_DEFAULT} key={id} title={taskTitle} content={taskContent} author={authorName} />
      ))}
    </>
  );
};

export default TaskCardList;
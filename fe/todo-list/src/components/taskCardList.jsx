import React from 'react';
import { DEFAULT } from '../const';

import Card from './card/card';

const TaskCardList = ({ taskList, cardState }) => {
  return (
    <>
      {cardState && <Card cardState={cardState} />}
      {taskList.map(({ id, taskTitle, taskContent, authorName }) => (
        <Card key={id} cardState={DEFAULT} taskTitle={taskTitle} taskContent={taskContent} authorName={authorName} />
      ))}
    </>
  );
};

export default TaskCardList;

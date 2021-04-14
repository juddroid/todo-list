import React from 'react';
import { ACTIVE, BLOCK, DEFAULT } from '../const';
import Card from './card';

const TaskCardList = ({
  list,
  closeActiveTask,
  display,
  columnID,
  deleteData,
}) => {
  return (
    <>
      <Card
        cardStyle={ACTIVE}
        closeActiveTask={closeActiveTask}
        display={display}
      />
      {list.map(({ id, taskTitle, taskContent, authorName }) => (
        <Card
          key={id}
          cardStyle={DEFAULT}
          title={taskTitle}
          content={taskContent}
          author={authorName}
          display={BLOCK}
          columnID={columnID}
          taskID={id}
          deleteData={deleteData}
        />
      ))}
    </>
  );
};

export default TaskCardList;

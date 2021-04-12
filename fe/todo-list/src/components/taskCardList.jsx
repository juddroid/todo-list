import React from 'react';
import Card from './card/card';

const TaskCardList = ({ taskList }) => {
  return (
    <>
      {taskList.map(({ id, taskTitle, taskContent, authorName }) => (
        <Card
          key={id}
          type="default"
          taskTitle={taskTitle}
          taskContent={taskContent}
          authorName={authorName}
        />
      ))}
    </>
  );
};

export default TaskCardList;

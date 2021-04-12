import React from 'react';
import Card from './card';

const TaskCardList = ({ list }) => {
  return (
    <>
      {list.map(({ id, taskTitle, taskContent, authorName }) => (
        <Card type="default" key={id} title={taskTitle} content={taskContent} author={authorName} />
      ))}

      <Card type="active" />
      <Card type="deactivate" />
    </>
  );
};

export default TaskCardList;

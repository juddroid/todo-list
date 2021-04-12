import React from 'react';
import Card from './card';

const TaskCardList = ({ list }) => {
  return (
    <>
      {list.map((el) => (
        <Card type="default" key={el.id} title={el.taskTitle} content={el.taskContent} author={el.authorName} />
      ))}
      <Card type="default" />
      <Card type="active" />
      <Card type="deactivate" />
    </>
  );
};
 
export default TaskCardList;

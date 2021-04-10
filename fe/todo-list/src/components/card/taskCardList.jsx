import React from 'react';
import Card from './card';

const TaskCardList = ({ list }) => {
  console.log(list);
  return (
    <>
      {list.map((el) => (
        <Card type="default" key={el.id} title={el.taskTitle} content={el.taskContent} author={el.authorName} />
      ))}
    </>
  );
};

export default TaskCardList;

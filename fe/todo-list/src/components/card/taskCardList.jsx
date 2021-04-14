import axios from 'axios';
import React, { useState } from 'react';
import { ACTIVE, BLOCK, DEFAULT, REQUEST_URL } from '../const';
import Card from './card';

const TaskCardList = ({
  list,
  closeActiveTask,
  display,
  columnID,
  postData,
}) => {
  const [cardList, setCardList] = useState(list);

  const deleteData = async (columnID, taskID) => {
    await axios.delete(
      `${REQUEST_URL}/api/columns/${columnID}/tasks/${taskID}`
    );
    setCardList(cardList.filter((card) => card.id !== taskID));
  };

  return (
    <>
      <Card
        cardStyle={ACTIVE}
        closeActiveTask={closeActiveTask}
        display={display}
        postData={postData}
        columnID={columnID}
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
          deleteData={deleteData}
        />
      ))}
    </>
  );
};

export default TaskCardList;

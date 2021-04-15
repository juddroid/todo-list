import axios from 'axios';
import React, { useState } from 'react';
import { ACTIVE, BLOCK, DEFAULT, REQUEST_URL } from '../const';
import Card from './card';
import qs from 'qs';

const TaskCardList = ({
  list,
  closeActiveTask,
  display,
  columnID,
  toggleDisplayState,
  setDelColID,
  setDelTasID,
}) => {
  const [cardList, setCardList] = useState(list);

  const postData = async (title, contents, columnID) => {
    const data = { taskTitle: title || ' ', taskContent: contents || ' ' };
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(data),
      url: `${REQUEST_URL}/api/columns/${columnID}/tasks`,
    };
    await axios(options);

    setCardList([
      { id: 'autumn', taskTitle: title, taskContent: contents },
      ...cardList,
    ]);
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

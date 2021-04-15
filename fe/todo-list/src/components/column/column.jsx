import React, { useState } from 'react';
import styled from 'styled-components';
import ColumnHeader from './columnHeader';
import TaskCardList from '../card/taskCardList';
import { BLOCK, NONE } from '../const';

const Column = ({
  title,
  taskList,
  columnID,
  toggleDisplayState,
  setDelColID,
  setDelTasID,
}) => {
  const [display, setDisplay] = useState(NONE);
  const [cardList, setCardList] = useState(taskList);

  const toggleDisplay = () => {
    if (display === NONE) return setDisplay(BLOCK);
    return setDisplay(NONE);
  };

  const closeActiveTask = () => {
    setDisplay(NONE);
  };
  return (
    <ColumnContainer>
      <ColumnHeader
        title={title}
        cardList={cardList}
        setCardList={setCardList}
        toggleDisplay={toggleDisplay}
        closeActiveTask={closeActiveTask}
      />
      <TaskCardList
        cardList={cardList}
        setCardList={setCardList}
        closeActiveTask={closeActiveTask}
        display={display}
        columnID={columnID}
        toggleDisplayState={toggleDisplayState}
        setDelColID={setDelColID}
        setDelTasID={setDelTasID}
      />
    </ColumnContainer>
  );
};

export default Column;

const ColumnContainer = styled.div`
  padding: 10px;
  width: 300px;
`;

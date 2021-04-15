import React, { useState } from 'react';
import styled from 'styled-components';
import ColumnHeader from './columnHeader';
import TaskCardList from '../card/taskCardList';
import { NONE } from '../const';
import { closeActiveTask, toggleDisplay } from '../util';

const Column = ({
  title,
  taskList,
  columnID,
  popupDisplay,
  setPopupDisplay,
}) => {
  const [display, setDisplay] = useState(NONE);
  const [cardList, setCardList] = useState(taskList);

  return (
    <ColumnContainer>
      <ColumnHeader
        title={title}
        cardList={cardList}
        setCardList={setCardList}
        toggleDisplay={() => toggleDisplay(display, setDisplay)}
        closeActiveTask={() => closeActiveTask(setDisplay)}
      />
      <TaskCardList
        cardList={cardList}
        setCardList={setCardList}
        closeActiveTask={() => closeActiveTask(setDisplay)}
        display={display}
        popupDisplay={popupDisplay}
        setPopupDisplay={setPopupDisplay}
        columnID={columnID}
      />
    </ColumnContainer>
  );
};

export default Column;

const ColumnContainer = styled.div`
  padding: 10px;
  width: 300px;
`;

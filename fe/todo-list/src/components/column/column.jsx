import React, { useState } from 'react';
import styled from 'styled-components';
import ColumnHeader from './columnHeader';
import TaskCardList from '../card/taskCardList';
import { CARD_STATE_ACTIVE } from '../const';

const Column = ({ title, taskList }) => {
  const [cardState, setCardState] = useState(null);

  const changeList = (e) => {
    e.preventDefault();
    setCardState(CARD_STATE_ACTIVE);
  };

  return (
    <ColumnContainer>
      <ColumnHeader title={title} list={taskList} changeList={changeList} />
      <TaskCardList list={taskList} cardState={cardState} />
    </ColumnContainer>
  );
};

export default Column;

const ColumnContainer = styled.div`
  padding: 10px;
  width: 300px;
`;

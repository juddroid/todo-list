import React, { useState } from 'react';
import styled from 'styled-components';
import ColumnHeader from './columnHeader';
import TaskCardList from '../card/taskCardList';
import { STATE_ACTIVE } from '../const';

const Column = ({ title, taskList }) => {
  const [cardState, setCardState] = useState(null);

  const changeList = (e) => {
    e.preventDefault();
    setCardState(STATE_ACTIVE);
  };

  const cancelList = (e) => {
    e.preventDefault();
    setCardState(null);
  };

  return (
    <ColumnContainer>
      <ColumnHeader title={title} list={taskList} changeList={changeList} />
      <TaskCardList list={taskList} cardState={cardState} cancelList={cancelList} />
    </ColumnContainer>
  );
};

export default Column;

const ColumnContainer = styled.div`
  padding: 10px;
  width: 300px;
`;

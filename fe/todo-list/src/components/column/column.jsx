import React, { useState } from 'react';
import styled from 'styled-components';
import ColumnHeader from './columnHeader';
import TaskCardList from '../taskCardList';
import { ACTIVE } from '../../const';

const Column = ({ columnTitle, taskList }) => {
  const [cardState, setCardState] = useState(null);

  const changeState = (e) => {
    e.preventDefault();
    setCardState(ACTIVE);
  };

  return (
    <ColumnContainer>
      <ColumnHeader columnTitle={columnTitle} taskList={taskList} changeState={changeState} />
      <TaskCardList taskList={taskList} cardState={cardState} />
    </ColumnContainer>
  );
};
export default Column;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 10px;
`;

import React from 'react';
import styled from 'styled-components';

import ColumnHeader from './columnHeader';
import TaskCardList from '../taskCardList';

const Column = ({ columnTitle, taskList }) => {
  return (
    <ColumnContainer>
      <ColumnHeader columnTitle={columnTitle} taskList={taskList} />
      <TaskCardList taskList={taskList} />
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

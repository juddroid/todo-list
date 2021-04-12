import React from 'react';
import styled from 'styled-components';
import ColumnHeader from './columnHeader';
import TaskCardList from '../card/taskCardList';

const Column = ({ title, taskList }) => {
  return (
    <ColumnContainer>
      <ColumnHeader title={title} list={taskList} />
      <TaskCardList list={taskList} />
    </ColumnContainer>
  );
};

export default Column;

const ColumnContainer = styled.div`
  padding: 10px;
  width: 300px;
`;

import React from 'react';
import styled from 'styled-components';

import ColumnHeader from './columnHeader';
import TaskCardList from '../taskCardList';

const Column = () => {
  return (
    <ColumnContainer>
      <ColumnHeader />
      <TaskCardList />
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

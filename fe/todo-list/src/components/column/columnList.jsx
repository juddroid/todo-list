import React from 'react';
import styled from 'styled-components';
import Column from './column';

const ColumnList = ({ data }) => {
  return (
    <ColumnWrapper>
      {data.map(({ id, columnTitle, taskList }) => (
        <Column key={id} columnTitle={columnTitle} taskList={taskList} />
      ))}
    </ColumnWrapper>
  );
};

export default ColumnList;

const ColumnWrapper = styled.div`
  display: flex;
`;

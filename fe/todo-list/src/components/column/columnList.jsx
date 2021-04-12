import React from 'react';
import styled from 'styled-components';
import Column from './column';

const ColumnList = props => {
  return (
    <ColumnWrapper>
      <Column />
      <Column />
      <Column />
      <Column />
    </ColumnWrapper>
  );
};

export default ColumnList;

const ColumnWrapper = styled.div`
  display: flex;
`;

import React from 'react';
import Icon from '../icon/icon';
import styled from 'styled-components';
import TaskCardCount from '../card/taskCardCount';

const ColumnHeader = ({ title, list }) => {
  return (
    <ColumnHeaderContainer>
      <ColumnTitleBox>
        <ColumnTitle>{title}</ColumnTitle>
        <TaskCardCount list={list} />
      </ColumnTitleBox>
      <ColumnButtonBox>
        <IconBox onClick={() => console.log('add')}>
          <Icon type="add" />
        </IconBox>
        <IconBox onClick={() => console.log('delete')}>
          <Icon type="delete" />
        </IconBox>
      </ColumnButtonBox>
    </ColumnHeaderContainer>
  );
};

export default ColumnHeader;

const ColumnHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`;

const ColumnTitleBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const ColumnTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  margin-right: 10px;
`;

const ColumnButtonBox = styled.div`
  display: flex;
`;

const IconBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

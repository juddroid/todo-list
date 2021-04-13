import React from 'react';
import TaskCardCount from '../taskCardCount/taskCardCount';
import Icon from '../icon/icon';
import styled from 'styled-components';

const ColumnHeader = ({ columnTitle, taskList, changeState }) => {
  return (
    <ColumnHeaderContainer>
      <ColumnTitleBox>
        <ColumnTitle>{columnTitle}</ColumnTitle>
        <TaskCardCount taskList={taskList} />
      </ColumnTitleBox>
      <ColumnButtonBox>
        <IconBox onClick={changeState}>
          <Icon type="add" />
        </IconBox>
        <IconBox>
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
  width: 300px;
  padding: 0px 10px;
  margin-bottom: 10px;
`;

const ColumnTitleBox = styled.div`
  display: flex;
  align-items: center;
`;

const ColumnTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  margin-right: 10px;
`;

const ColumnButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconBox = styled.div`
  width: fit-content;
  height: fit-content;
`;

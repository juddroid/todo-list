import React from 'react';
import styled from 'styled-components';

const TaskTitle = ({ type, title }) => {
  return (
    <TitleBox>
      <TaskTitleSpan type={type}>{title}</TaskTitleSpan>
    </TitleBox>
  );
};

export default TaskTitle;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TaskTitleSpan = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 23px;

  color: ${(props) => (props.type === 'deactivate' ? '#828282' : '#010101')};
  margin: 8px 0px;
`;

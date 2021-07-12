import React from 'react';
import styled from 'styled-components';

const TaskContents = ({ type, content }) => {
  return (
    <ContentsBox>
      <TaskContentsSpan type={type}>{content}</TaskContentsSpan>
    </ContentsBox>
  );
};
export default TaskContents;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 5px;
`;

const TaskContentsSpan = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => (props.type === 'deactivate' ? '#828282' : '#010101')};
`;

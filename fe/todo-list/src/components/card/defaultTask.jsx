import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BLOCK, DELETE, NONE } from '../const';
import Icon from '../icon/icon';
import Caption from './caption';
import TaskContents from './taskContents';
import TaskTitle from './taskTitle';

const DefaultTask = ({
  title,
  content,
  author,
  display,
  columnID,
  taskID,
  toggleDisplayState,
  setDelColID,
  setDelTasID,
}) => {
  return (
    <TaskWrapper display={display} draggable={true}>
      <IconPosition
        onClick={() =>
          toggleDisplayState(columnID, taskID, setDelColID, setDelTasID)
        }
      >
        <Icon type={DELETE} />
      </IconPosition>
      <TaskBox>
        <TextArea>
          <TaskTitle title={title} />
          <TaskContents content={content} />
          <Caption author={author} />
        </TextArea>
      </TaskBox>
    </TaskWrapper>
  );
};

export default DefaultTask;

const TaskWrapper = styled.div`
  position: relative;
  animation: ${({ display }) => {
      if (display === NONE) {
        return FadeOut;
      }
      if (display === BLOCK) {
        return FadeIn;
      }
    }}
    0.4s ease-in-out;

  display: ${({ display }) => display};
  margin-top: 20px;

  & + div {
    margin-top: 20px;
  }
`;

const IconPosition = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
`;

const TaskBox = styled.div`
  background: #fff;
  box-shadow: 0px 1px 30px rgba(224, 224, 224, 0.3);
  border-radius: 6px;
  padding: 10px 16px;
  border: 1px solid #fff;

  ${IconPosition}:hover + & {
    background: #ffeeec;
    border: 1px solid #ff4343;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const FadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

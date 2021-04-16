import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  ACTIVE,
  BLOCK,
  CANCEL,
  DELETE,
  DISABLED,
  FLEX,
  INPUT_CONTENTS,
  INPUT_TITLE,
  NAME_CANCEL,
  NAME_MODIFY,
  NAME_SUBMIT,
  NONE,
  SUBMIT,
} from '../const';
import { deleteData } from '../deleteData';
import Icon from '../icon/icon';
import { closeActiveTask, toggleDisplay } from '../util';
import Caption from './caption';
import { TaskContentsForm, TaskTitleForm } from './form';
import TaskContents from './taskContents';
import TaskTitle from './taskTitle';
import Button from '../button/button';
import { putData } from '../putData';

const DefaultTask = ({
  title,
  content,
  author,
  display,
  popupDisplay,
  columnID,
  taskID,
  cardList,
  setCardList,
  setPopupDisplay,
  setOnRemove,
}) => {
  const [activeDisplay, setActiveDisplay] = useState(NONE);
  const [defaultDisaply, setDefaultDisplay] = useState(BLOCK);
  const [inputValue, setInputValue] = useState({
    inputTitle: title,
    inputContents: content,
  });
  const [buttonState, setButtonState] = useState(DISABLED);
  const { inputTitle, inputContents } = inputValue;
  const onChangeUserInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const changeButtonState = (title, contents) => {
    if (title === '' && contents === '') return setButtonState(DISABLED);
    return setButtonState(ACTIVE);
  };

  const onRemove = (
    columnID,
    taskID,
    cardList,
    setCardList,
    setPopupDisplay
  ) => {
    deleteData(columnID, taskID, cardList, setCardList);
    closeActiveTask(setPopupDisplay);
  };

  const onClick = () => {
    toggleDisplay(popupDisplay, setPopupDisplay);
    setOnRemove(() => () =>
      onRemove(columnID, taskID, cardList, setCardList, setPopupDisplay)
    );
  };

  const onToggle = () => {
    toggleDisplay(activeDisplay, setActiveDisplay, FLEX);
    toggleDisplay(defaultDisaply, setDefaultDisplay, FLEX);
  };

  const handleModifyButtonClick = () => {
    putData(inputTitle, inputContents, columnID, taskID, cardList, setCardList);
    onToggle();
  };

  useEffect(() => {
    changeButtonState(inputTitle, inputContents);
  }, [inputTitle, inputContents]);

  return (
    <TaskWrapper display={display} draggable={true} onDoubleClick={onToggle}>
      <IconPosition onClick={onClick} display={defaultDisaply}>
        <Icon type={DELETE} />
      </IconPosition>
      <TaskBox>
        <TextArea display={defaultDisaply}>
          <TaskTitle title={title} />
          <TaskContents content={content} />
          <Caption author={author} />
        </TextArea>
        <TextArea display={activeDisplay}>
          <TitleBox>
            <TaskForm>
              <TaskTitleForm
                name={INPUT_TITLE}
                value={inputTitle}
                onChange={onChangeUserInput}
              />
              <TaskContentsForm
                name={INPUT_CONTENTS}
                value={inputContents}
                onChange={onChangeUserInput}
              />
            </TaskForm>
          </TitleBox>
        </TextArea>
        <ButtonArea display={activeDisplay}>
          <ButtonBox onClick={onToggle}>
            <Button type={CANCEL} name={NAME_CANCEL} />
          </ButtonBox>
          <ButtonBox onClick={handleModifyButtonClick}>
            <Button
              type={SUBMIT}
              name={NAME_MODIFY}
              buttonState={buttonState}
            />
          </ButtonBox>
        </ButtonArea>
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
  display: ${(props) => props.display};
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
  display: ${(props) => props.display};
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

const ButtonArea = styled.div`
  display: ${(props) => props.display};
  justify-content: space-between;
  align-items: center;
`;

const ButtonBox = styled.div`
  width: fit-content;
  height: fit-content;
`;

const TaskForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 0 4px;
  box-shadow: 0px 0px 2px #828282;
  border-radius: 10px;
  margin: 4px 0 8px 0;
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

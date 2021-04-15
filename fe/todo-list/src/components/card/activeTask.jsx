import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../button/button';
import {
  ACTIVE,
  BLOCK,
  CANCEL,
  DISABLED,
  NAME_CANCEL,
  NAME_CONTENTS,
  NAME_SUBMIT,
  NAME_TITLE,
  NONE,
  SUBMIT,
} from '../const';
import { postData } from '../postData';
import { TaskContentsForm, TaskTitleForm } from './form';

const ActiveTask = ({
  closeActiveTask,
  display,
  columnID,
  cardList,
  setCardList,
}) => {
  const [inputValue, setInputValue] = useState({
    title: '',
    contents: '',
  });
  const [buttonState, setButtonState] = useState(DISABLED);
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(display);

  const { title, contents } = inputValue;
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

  useEffect(() => {
    if (localVisible === BLOCK && display === NONE) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 2000);
    }
    setLocalVisible(display);
  }, [localVisible, display]);

  useEffect(() => {
    changeButtonState(title, contents);
  }, [title, contents]);

  if (localVisible === NONE && !animate) return null;

  return (
    <TaskWrapper display={display}>
      <TaskBox>
        <TextArea>
          <TitleBox>
            <TaskForm>
              <TaskTitleForm
                name={NAME_TITLE}
                value={title}
                onChange={onChangeUserInput}
              />
              <TaskContentsForm
                name={NAME_CONTENTS}
                value={contents}
                onChange={onChangeUserInput}
              />
            </TaskForm>
          </TitleBox>
        </TextArea>
        <ButtonArea>
          <ButtonBox onClick={closeActiveTask}>
            <Button type={CANCEL} name={NAME_CANCEL} />
          </ButtonBox>
          <ButtonBox
            onClick={() =>
              postData(title, contents, columnID, cardList, setCardList)
            }
          >
            <Button
              type={SUBMIT}
              name={NAME_SUBMIT}
              buttonState={buttonState}
            />
          </ButtonBox>
        </ButtonArea>
      </TaskBox>
    </TaskWrapper>
  );
};

export default ActiveTask;

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

const TaskForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 0 4px;
  box-shadow: 0px 0px 2px #828282;
  border-radius: 10px;
  margin: 4px 0 8px 0;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonBox = styled.div`
  width: fit-content;
  height: fit-content;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
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

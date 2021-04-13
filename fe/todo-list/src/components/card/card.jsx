import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ACTIVE, DEFAULT } from '../../const';
import Button from '../button/button';
import Icon from '../icon/icon';

const DefaultTask = ({ taskTitle, taskContent, authorName }) => {
  return (
    <TaskBox>
      <IconPosition>
        <Icon type="delete" />
      </IconPosition>
      <TextArea>
        <TaskTitle taskTitle={taskTitle} />
        <TaskContents taskContent={taskContent} />
        <Caption authorName={authorName} />
      </TextArea>
    </TaskBox>
  );
};

const ActiveTask = ({ cardState }) => {
  const [inputValue, setInputValue] = useState({
    title: '',
    contents: '',
  });
  const [buttonState, setButtonState] = useState(DEFAULT);
  const { title, contents } = inputValue;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const changeButtonState = (title, contents) => {
    const isInputValueEmpty = (value) => value === '';
    if (isInputValueEmpty(title) && isInputValueEmpty(contents)) {
      return setButtonState(DEFAULT);
    }
    return setButtonState(ACTIVE);
  };

  useEffect(() => {
    changeButtonState(title, contents);
  }, [title, contents]);

  return (
    <TaskBox>
      <TextArea>
        <TaskTitleInput name="title" value={title} onChange={handleInputChange} placeholder="제목을 입력하세요" autoComplete="off" />
        <TaskContentsArea name="contents" value={contents} onChange={handleInputChange} placeholder="내용을 입력하세요" />
      </TextArea>
      <ButtonArea>
        <Button type="cancel" name="취소" />
        <Button buttonState={buttonState} cardState={cardState} type="submit" name="등록" />
      </ButtonArea>
    </TaskBox>
  );
};

const TaskTitle = ({ type, taskTitle }) => {
  return (
    <TitleBox>
      <TaskTitleSpan type={type}>{taskTitle}</TaskTitleSpan>
    </TitleBox>
  );
};

const TaskContents = ({ type, taskContent }) => {
  return (
    <ContentsBox>
      <TaskContentsSpan type={type}>{taskContent}</TaskContentsSpan>
    </ContentsBox>
  );
};

const Caption = ({ authorName }) => {
  return (
    <>
      <TaskAuthorLabel>{authorName} by web</TaskAuthorLabel>
    </>
  );
};

const Card = ({ cardState, taskTitle, taskContent, authorName }) => {
  return {
    default: <DefaultTask taskTitle={taskTitle} taskContent={taskContent} authorName={authorName} />,
    active: <ActiveTask cardState={cardState} />,
  }[cardState];
};

export default Card;

const TaskBox = styled.div`
  position: relative;
  width: 300px;
  background: #ffffff;
  box-shadow: 0px 1px 30px rgba(224, 224, 224, 0.3);
  border-radius: 6px;
  padding: 10px 16px;

  & + div {
    margin-top: 20px;
  }
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

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 5px;
`;

const TaskTitleSpan = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 23px;
  color: ${(props) => (props.type === 'deactivate' ? '#828282' : '#010101')};
  margin: 8px 0px;
`;

const TaskContentsSpan = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => (props.type === 'deactivate' ? '#828282' : '#010101')};
`;

const TaskAuthorLabel = styled.span`
  font-size: 12px;
  line-height: 17px;
  color: #bdbdbd;
  text-align: left;
`;

const IconPosition = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
`;

const TaskTitleInput = styled.input`
  width: 100%;
  font-size: 16px;
  line-height: 23px;
  outline: none;
  border: none;
`;

const TaskContentsArea = styled.textarea`
  width: 100%;
  min-height: 50px;
  max-height: 150px;
  resize: vertical;
  outline: none;
  border: none;
`;

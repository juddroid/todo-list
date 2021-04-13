import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../button/button';
import { STATE_ACTIVE, STATE_DISABLED } from '../const';
import Icon from '../icon/icon';

const DefaultTask = ({ title, content, author }) => {
  return (
    <TaskWrapper draggable={true}>
      <IconPosition>
        <Icon type="delete" />
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

const ActiveTask = ({ cardState, cancelList }) => {
  const [inputValue, setInputValue] = useState({
    title: '',
    contents: '',
  });
  const [buttonState, setButtonState] = useState(STATE_DISABLED);

  const { title, contents } = inputValue;
  const onChangeUserInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const changeButtonState = (title, contents) => {
    if (title === '' && contents === '') return setButtonState(STATE_DISABLED);
    return setButtonState(STATE_ACTIVE);
  };

  const usePostData = () => {
    axios.post('/user/12345', {
      title: title,
      contents: contents,
    });
  };

  useEffect(() => {
    changeButtonState(title, contents);
  }, [title, contents]);

  return (
    <TaskWrapper>
      <TaskBox>
        <TextArea>
          <TitleBox>
            <TaskForm>
              <TaskTitleForm name="title" value={title} onChange={onChangeUserInput} />
              <TaskContentsForm name="contents" value={contents} onChange={onChangeUserInput} />
            </TaskForm>
          </TitleBox>
        </TextArea>
        <ButtonArea>
          <ButtonBox onClick={cancelList}>
            <Button type="cancel" name="취소" />
          </ButtonBox>
          <ButtonBox onClick={() => console.log('submit')}>
            <Button type="submit" name="등록" cardState={cardState} buttonState={buttonState} />
          </ButtonBox>
        </ButtonArea>
      </TaskBox>
    </TaskWrapper>
  );
};

const TaskTitleForm = ({ name, value, onChange }) => {
  return <TaskTitleInput name={name} value={value} onChange={onChange} placeholder="제목을 입력하세요" autoFocus />;
};

const TaskContentsForm = ({ name, value, onChange }) => {
  return <TaskContentsInput name={name} value={value} onChange={onChange} placeholder="내용을 입력하세요" />;
};

const TaskTitle = ({ type, title }) => {
  return (
    <TitleBox>
      <TaskTitleSpan type={type}>{title}</TaskTitleSpan>
    </TitleBox>
  );
};

const TaskContents = ({ type, content }) => {
  return (
    <ContentsBox>
      <TaskContentsSpan type={type}>{content}</TaskContentsSpan>
    </ContentsBox>
  );
};

const Caption = ({ author }) => {
  return <TaskAuthorLabel>{author} by web</TaskAuthorLabel>;
};

const Card = ({ cardState, cancelList, title, content, author }) => {
  return {
    default: <DefaultTask title={title} content={content} author={author} />,
    active: <ActiveTask cardState={cardState} cancelList={cancelList} />,
  }[cardState];
};

export default Card;

const WrapperFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const TaskWrapper = styled.div`
  position: relative;
  animation: ${WrapperFade} 0.4s ease-in-out;

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

const ButtonBox = styled.div`
  width: fit-content;
  height: fit-content;
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

const DefaultTaskInputStyle = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-weight: bold;
  line-height: 23px;
  padding: 8px;
  color: #222;
  :focus {
    outline: none;
    box-shadow: 0px 0px 2px #828282;
    border-radius: 5px;
  }
`;

const TaskTitleInput = styled(DefaultTaskInputStyle)`
  margin: 4px 0px;
  font-size: 16px;
`;

const TaskContentsInput = styled.textarea`
  font-size: 14px;
  height: 100%;
  min-height: 50px;
  max-height: 150px;
  width: 100%;
  outline: none;
  border: none;
  font-weight: bold;
  line-height: 23px;
  padding: 8px;
  color: #222;
  resize: vertical;
  :focus {
    outline: none;
    box-shadow: 0px 0px 2px #828282;
    border-radius: 5px;
  }
`;

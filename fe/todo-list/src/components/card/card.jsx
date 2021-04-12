import React from 'react';
import styled from 'styled-components';
import Button from '../button/button';
import Icon from '../icon/icon';

const DefaultTask = ({ title, content, author }) => {
  return (
    <TaskWrapper>
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

const ActiveTask = ({ type }) => {
  return (
    <TaskWrapper>
      <TaskBox>
        <TextArea>
          <TaskTitleForm />
          <TaskContentsForm />
        </TextArea>
        <ButtonArea>
          <Button type="cancel" name="취소" />
          <Button type="submit" name="등록" active={type} />
        </ButtonArea>
      </TaskBox>
    </TaskWrapper>
  );
};

const TaskTitleForm = () => {
  return (
    <TitleBox>
      <TaskForm>
        <TaskTitleInput placeholder="제목을 입력하세요." />
      </TaskForm>
    </TitleBox>
  );
};

const TaskContentsForm = () => {
  return (
    <TitleBox>
      <TaskForm>
        <TaskContentsInput placeholder="내용을 입력하세요." />
      </TaskForm>
    </TitleBox>
  );
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

const Card = ({ type, title, content, author }) => {
  return {
    default: <DefaultTask title={title} content={content} author={author} />,
    active: <ActiveTask type={type} />,
    deactivate: <ActiveTask type={type} />,
  }[type];
};

export default Card;

const TaskWrapper = styled.div`
  position: relative;

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
`;

const DefaultTaskInputStyle = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-weight: bold;
  line-height: 23px;
  padding: 8px;
  color: #9d9d9d;
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

const TaskContentsInput = styled(DefaultTaskInputStyle)`
  margin-bottom: 10px;
  font-size: 14px;
`;

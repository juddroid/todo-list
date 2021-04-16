import React from 'react';
import styled from 'styled-components';
import { CONTENTS_MSG, TITLE_MSG, OFF } from '../const';

export const TaskTitleForm = ({ name, value, onChange }) => {
  return (
    <TaskTitleInput
      name={name}
      value={value}
      onChange={onChange}
      placeholder={TITLE_MSG}
      autoFocus
      autoComplete={OFF}
    />
  );
};

export const TaskContentsForm = ({ name, value, onChange }) => {
  return (
    <TaskContentsInput
      name={name}
      value={value}
      onChange={onChange}
      placeholder={CONTENTS_MSG}
    />
  );
};

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

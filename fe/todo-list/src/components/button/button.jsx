import React from 'react';
import styled from 'styled-components';
import { DISABLED } from '../const';

const CancelButton = ({ name }) => {
  return <NormalButton>{name}</NormalButton>;
};

const DeleteButton = ({ name }) => {
  return <NormalButton>{name}</NormalButton>;
};

const SubmitButton = ({ name, buttonState }) => {
  const state = buttonState === DISABLED ? true : false;
  return <AccentButton disabled={state}>{name}</AccentButton>;
};

const EditButton = ({ name }) => {
  return <AccentButton>{name}</AccentButton>;
};

const Button = ({ type, name, buttonState }) => {
  return {
    cancel: <CancelButton name={name} />,
    delete: <DeleteButton name={name} />,
    submit: <SubmitButton name={name} buttonState={buttonState} />,
    edit: <EditButton name={name} />,
  }[type];
};

export default Button;

const NormalButton = styled.button`
  align-items: flex-start;
  padding: 10px;
  width: 120px;
  height: 40px;
  background: #e0e0e0;
  color: #828282;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #ffffff;
    background-color: #828282;
  }
`;

const AccentButton = styled.button`
  align-items: flex-start;
  padding: 10px;
  width: 120px;
  height: 40px;
  background: #0075de;
  color: #fff;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  &:hover {
    background: #00529b;
  }
  &:disabled {
    background: #86c6ff;
    cursor: default;
    color: rgba(255, 255, 255, 0.4);
  }
`;

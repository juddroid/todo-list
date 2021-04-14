import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaTimes, FaBars } from 'react-icons/fa';

const AddButton = ({ type }) => {
  return (
    <IconButton type={type}>
      <FaPlus />
    </IconButton>
  );
};
const DeleteButton = ({ type }) => {
  return (
    <IconButton type={type}>
      <FaTimes />
    </IconButton>
  );
};
const UserActionButton = ({ type }) => {
  return (
    <IconButton type={type}>
      <FaBars />
    </IconButton>
  );
};

const Icon = ({ type }) => {
  return {
    add: <AddButton type={type} />,
    delete: <DeleteButton type={type} />,
    userAction: <UserActionButton type={type} />,
  }[type];
};

const IconButton = styled.button`
  color: ${(props) => (props.type === 'userAction' ? '#010101' : '#bdbdbd')};
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: ${(props) => {
      return { add: '#0075DE', delete: '#FF4343' }[props.type] || '#505050';
    }};
  }
`;

export default Icon;

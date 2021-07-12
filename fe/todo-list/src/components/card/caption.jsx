import React from 'react';
import styled from 'styled-components';

const Caption = ({ author }) => {
  return <TaskAuthorLabel>{author} by web</TaskAuthorLabel>;
};

export default Caption;

const TaskAuthorLabel = styled.span`
  font-size: 12px;
  line-height: 17px;
  color: #bdbdbd;
  text-align: left;
`;

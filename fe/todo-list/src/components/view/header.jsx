import React from 'react';
import styled from 'styled-components';
import { TITLE } from '../const';
import Icon from '../icon/icon';

const Title = ({ title }) => {
  return (
    <TitleDiv>
      <TitleSpan>{title}</TitleSpan>
    </TitleDiv>
  );
};

const Header = () => {
  return (
    <HeaderStyle>
      <Title title={TITLE} />
      <Icon type="userAction" />
    </HeaderStyle>
  );
};

export default Header;

const TitleSpan = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const TitleDiv = styled.div`
  display: flex;
`;

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
`;

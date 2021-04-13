import React from 'react';
import styled from 'styled-components';
import Icon from '../components/icon/icon';

const Header = () => {
  return (
    <HeaderContainer>
      <h1>To-Do List</h1>
      <Icon type="userAction" />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  padding: 30px 20px;
`;

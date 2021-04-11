import React from 'react';
import styled from 'styled-components';
import Icon from '../icon/icon';
import ActionCard from './actionCard';

const ActionCardList = () => {
  return (
    <ActionCardContainer>
      <IconPosition>
        <Icon type="delete" />
      </IconPosition>
      <ActionCardListBox>
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
      </ActionCardListBox>
    </ActionCardContainer>
  );
};

export default ActionCardList;

const ActionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  box-sizing: content-box;
  background: #fff;
  position: absolute;
  width: 332px;
  height: 100%;
  right: 0;
  top: 40px;
`;

const IconPosition = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 5px;
`;

const ActionCardListBox = styled.div`
  display: flex;
  flex-direction: column;
`;

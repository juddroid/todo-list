import React from 'react';
import styled from 'styled-components';
import Icon from '../icon/icon';
import ActionCard from './actionCard';

const ActionCardList = ({ state, setState }) => {
  return (
    <ActionCardContainer state={state}>
      <IconPosition onClick={setState}>
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
  /* display: ${(props) => (props.state === 'flex' ? 'flex' : 'none')}; */
  position: absolute;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 40px 40px 40px;
  box-sizing: content-box;
  background: #fff;
  width: 332px;
  height: fit-content;
  right: 0;
  top: -10px;
  opacity: ${(props) => (props.state === 'flex' ? '100%' : '0%')};
  transform: ${(props) => (props.state === 'flex' ? 'translate3d(30px, 0px, 0px)' : 'translate3d(430px, 0px, 0px)')};
  transition-duration: 0.4s;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  z-index: 1;
`;

const IconPosition = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 5px;
  margin-right: 5px;
`;

const ActionCardListBox = styled.div`
  display: flex;
  flex-direction: column;
`;

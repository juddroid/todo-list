import React from 'react';
import styled from 'styled-components';
import { DELETE, FLEX } from '../const';
import Icon from '../icon/icon';
import ActionCard from './actionCard';

const ActionCardList = ({ state, setState, actionData }) => {
  return (
    <ActionCardContainer state={state}>
      <IconPosition onClick={setState}>
        <Icon type={DELETE} />
      </IconPosition>
      <ActionCardListBox>
        {actionData.map((data) => (
          <ActionCard key={data.id} data={data} />
        ))}
      </ActionCardListBox>
    </ActionCardContainer>
  );
};

export default ActionCardList;

const ActionCardContainer = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 40px 40px 40px;
  box-sizing: content-box;
  background: #fff;
  width: 350px;
  height: 850px;
  right: 0;
  top: -10px;
  opacity: ${(props) => (props.state === FLEX ? '100%' : '0%')};
  transform: ${(props) =>
    props.state === FLEX
      ? 'translate3d(30px, 0px, 0px)'
      : 'translate3d(430px, 0px, 0px)'};
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

const ActionCardListBox = styled.ul`
  display: flex;
  flex-direction: column;
  height: 800px;
  overflow-y: scroll;
`;

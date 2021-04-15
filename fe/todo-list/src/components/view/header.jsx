import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import ActionCardList from '../card/actionCardList';
import { CLICK, ERROR_MSG, FLEX, NONE, TITLE, USER_ACTION } from '../const';
import Icon from '../icon/icon';

const Title = ({ title }) => {
  return (
    <TitleDiv>
      <TitleSpan>{title}</TitleSpan>
    </TitleDiv>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case CLICK:
      return (state = FLEX);
    case NONE:
      return (state = NONE);
    default:
      return new Error(ERROR_MSG);
  }
};

const Header = () => {
  const [state, dispatch] = useReducer(reducer, null);

  const changeState = () => {
    dispatch({
      type: CLICK,
    });
  };

  const defaultState = () => {
    dispatch({
      type: NONE,
    });
  };

  useEffect(() => {
    defaultState();
  }, []);

  return (
    <HeaderStyle>
      <Title title={TITLE} />
      <IconBox onClick={changeState}>
        <Icon type={USER_ACTION} />
      </IconBox>
      <ActionCardList state={state} setState={defaultState} />
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
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
  max-width: 1300px;
  min-width: 1000px;
`;

const IconBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

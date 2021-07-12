import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import ActionCardList from '../card/actionCardList';
import {
  CLICK,
  ERROR_MSG,
  FLEX,
  NONE,
  REQUEST_URL,
  TITLE,
  USER_ACTION,
} from '../const';
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
  const [actionData, setActionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const fetchData = async () => {
    try {
      setActionData(null);
      setError(null);
      setLoading(true);
      const request = `${REQUEST_URL}/api/logs`;
      const response = await axios.get(request);

      setActionData(response.data.todoLogs);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    defaultState();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!!!</div>;
  if (!actionData) return null;

  return (
    <HeaderStyle>
      <Title title={TITLE} />
      <IconBox onClick={changeState}>
        <Icon type={USER_ACTION} />
      </IconBox>
      <ActionCardList
        state={state}
        setState={defaultState}
        actionData={actionData}
      />
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
`;

const IconBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

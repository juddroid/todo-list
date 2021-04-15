import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DELETE, REQUEST_URL } from '../const';
import Icon from '../icon/icon';
import ActionCard from './actionCard';

const ActionCardList = ({ state, setState }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setData(null);
      setError(null);
      setLoading(true);
      const request = `${REQUEST_URL}/api/logs`;
      const response = await axios.get(request);

      setData(response.data.todoLogs);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!!!</div>;
  if (!data) return null;

  console.log(data);
  return (
    <ActionCardContainer state={state}>
      <IconPosition onClick={setState}>
        <Icon type={DELETE} />
      </IconPosition>
      <ActionCardListBox>
        {data.map((el) => (
          <ActionCard key={el.id} data={el} />
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
  width: 332px;
  height: fit-content;
  right: 0;
  top: -10px;
  opacity: ${(props) => (props.state === 'flex' ? '100%' : '0%')};
  transform: ${(props) =>
    props.state === 'flex'
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
`;

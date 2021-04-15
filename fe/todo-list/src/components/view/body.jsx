import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../card/card';
import Column from '../column/column';
import { BLOCK, CANCEL, NONE, REQUEST_URL } from '../const';

const Body = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cancelButtonState, setCancleButtonSate] = useState(NONE);
  const [delColID, setDelColID] = useState('');
  const [delTasID, setDelTasID] = useState('');

  const fetchData = async () => {
    try {
      setError(null);
      setLoading(true);
      const request = `${REQUEST_URL}/api/columns`;
      const response = await axios.get(request);
      const apiData = response.data.columns;
      setData(apiData);
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

  const toggleDisplayState = (columnID, taskID, setColID, setTasID) => {
    if (typeof columnID === 'number' && typeof taskID === 'number') {
      setColID(columnID);
      setTasID(taskID);
    }
    if (cancelButtonState === NONE) return setCancleButtonSate(BLOCK);
    return setCancleButtonSate(NONE);
  };

  return (
    <BodyContainer>
      <Card
        cardStyle={CANCEL}
        display={cancelButtonState}
        toggleDisplayState={toggleDisplayState}
        delColID={delColID}
        delTasID={delTasID}
      />
      {data.map(({ columnTitle, id, taskList }) => (
        <Column
          title={columnTitle}
          key={id}
          taskList={taskList}
          columnID={id}
          toggleDisplayState={toggleDisplayState}
          setDelColID={setDelColID}
          setDelTasID={setDelTasID}
        />
      ))}
    </BodyContainer>
  );
};

export default Body;

const BodyContainer = styled.div`
  display: flex;
`;

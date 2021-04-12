import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Column from './column';

const Body = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setData(null);
      setError(null);
      setLoading(true);
      const request = `/api/columns`;
      const response = await axios.get(request);
      setData(response.data);
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

  return (
    <BodyContainer>
      {data.map((el) => (
        <Column title={el.columnTitle} key={el.id} taskList={el.taskList} />
      ))}
    </BodyContainer>
  );
};

export default Body;

const BodyContainer = styled.div`
  display: flex;
`;

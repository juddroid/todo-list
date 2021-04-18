import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ColumnList from '../column/columnList';
import { REQUEST_URL } from '../const';

const Body = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <BodyContainer>
      <ColumnList data={data} />
    </BodyContainer>
  );
};

export default Body;

const BodyContainer = styled.div`
  display: flex;
`;

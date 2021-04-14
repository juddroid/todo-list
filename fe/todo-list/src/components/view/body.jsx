import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Column from '../column/column';

const Body = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reloading, setReloading] = useState(false);

  const fetchData = async () => {
    try {
      setData(null);
      setError(null);
      setLoading(true);
      const request = `http://13.209.60.60:8080/api/columns`;
      const response = await axios.get(request);
      setData(response.data.columns);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const deleteData = async (columnID, taskID) => {
    await axios.delete(
      `http://13.209.60.60:8080/api/columns/${columnID}/tasks/${taskID}`
    );
    setReloading(true);
  };

  useEffect(() => {
    fetchData();
    setReloading(false);
  }, [reloading]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!!!</div>;
  if (!data) return null;

  return (
    <BodyContainer>
      {data.map(({ columnTitle, id, taskList }) => (
        <Column
          title={columnTitle}
          key={id}
          taskList={taskList}
          columnID={id}
          deleteData={deleteData}
        />
      ))}
    </BodyContainer>
  );
};

export default Body;

const BodyContainer = styled.div`
  display: flex;
`;

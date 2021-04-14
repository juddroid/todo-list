import axios from 'axios';
import qs from 'qs';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Column from '../column/column';
import { REQUEST_URL } from '../const';

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
      const request = `${REQUEST_URL}/api/columns`;
      const response = await axios.get(request);
      const apiData = response.data.columns;

      setData(apiData);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const deleteData = async (columnID, taskID) => {
    await axios.delete(
      `${REQUEST_URL}/api/columns/${columnID}/tasks/${taskID}`
    );
    setReloading(true);
  };

  // const postData = async (title, contents, columnID) => {
  //   const data = { taskTitle: title, taskContent: contents };
  //   const options = {
  //     method: 'POST',
  //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
  //     data: qs.stringify(data),
  //     url: `${REQUEST_URL}/api/columns/${columnID}/tasks`,
  //   };
  //   await axios(options);
  //   setReloading(true);
  // };

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
          // postData={postData}
        />
      ))}
    </BodyContainer>
  );
};

export default Body;

const BodyContainer = styled.div`
  display: flex;
`;

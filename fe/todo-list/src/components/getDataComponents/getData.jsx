import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetData() {
  const [data, setData] = useState();

  const useFetch = () => {
    async function fetchData() {
      const request = `/api/columns`;
      const response = await axios.get(request);
      console.log(response);

      setData();
    }

    useEffect(() => {
      fetchData();
    }, []);
  };

  useFetch();

  return <div type={data}>Raccoon</div>;
}
export default GetData;

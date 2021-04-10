import axios from 'axios';

function GetData() {
  const data = axios.get('http://localhost:3000/test');

  return data;
}

export default GetData;

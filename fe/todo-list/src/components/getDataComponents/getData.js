import axios from 'axios';

async function GetData() {
  try {
    const request = `/api/columns`;
    const response = await axios.get(request);
    console.log(response);
  } catch (error) {}
}
export default GetData;

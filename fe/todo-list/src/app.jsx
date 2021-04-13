import './app.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ColumnList from './components/column/columnList';
import Header from './components/header';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      setData(null);
      setError(null);
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData('/api/columns');
  }, []);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error!</div>;
  if (!data) return null;

  return (
    <div className="App">
      <Header />
      <ColumnList data={data} />
    </div>
  );
}

export default App;

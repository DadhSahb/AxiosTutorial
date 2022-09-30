import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setError] = useState("");
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data)
  //       .catch((error) => setError(error.message))
  //     )
  // }, [])

  const getApiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    } catch (error) {
      setError(error.message);
    }

  }
  useEffect(() => {
    getApiData();
  }, [])
  return (
    <div className="App">
      <h1>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}
      <div className='grid'>
        {myData.slice(0, 12).map((post) => {
          const { title, body, id } = post;
          return <div className='card' key={id}>
            <h4>{title.slice(0, 15)}</h4>
            <p>{body.slice(0, 100)}</p>
          </div>
        })}</div>
    </div>
  );
}

export default App;

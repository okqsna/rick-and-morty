import './App.css';
import React, {useState, useEffect} from 'react';
import Characters from './Characters/Characters';
import PaginationChar from './PaginationChar/PaginationChar';
const App=()=> {
  const [page, setPage]=useState(1);
  const [receivedData, setReceivedData]=useState([]);
  const [loading, setLoading]=useState(true);
  const {info, results}=receivedData;
  useEffect(()=>{
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
  .then(response=>response.json())
  .then(data=>{
    setReceivedData(data);
    setLoading(false);
    console.log(data);
  })
  }, [])

  return (
    <div className="App">
      <h3>Characters</h3>
    { loading ? <div className="loading__App"><p>Loading..</p></div>
    :
    <div className="content__App">
      <Characters results={results} />
      <PaginationChar />
    </div>
    }
    </div>
  );
}

export default App;

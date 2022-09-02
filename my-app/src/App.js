import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState()
  return (
    <div className="App">
      <header className="App-header">
      <h1>Fetching an API endpoint </h1>
        <p>
          Press the button to fetch contents of API. Only args are printed in this case. 
        </p>
        <button onClick= {() => {
          axios.get('/get?foo1=bar1&foo2=bar2',
          ).then((response) => {
            console.log(response);
            //Printing only the args, because other JSON elements contain sensitive data 
            //To print all the JSON elements uncomment the following ->
            //setData(response);
            setData(response['data']['args']);
          }).catch((error) => {
            console.log("Error:", error)
          }).then(function () {
            console.log("always call")
          });
        }}> Call API</button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </header>
    </div>
  );
}

export default App;

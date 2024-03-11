import React, { useState } from 'react';

function App() {

  const [value1,setValue1] = useState(0);
  const [value2,setValue2] = useState(0);
  const [operator,setOperator] = useState(1);
  const [response, setResponse] = useState();

  const culc = () =>{

      fetch(`https://culculator.onrender.com/${value1}/${value2}/${operator}`)
        .then((res) => res.json())   
        .then((data) => {
            console.log(data);
            setResponse(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   };

  return (
    <>
    <div className="App">
      <div className="App-body">
          <input className="value1" onChange = {(e) => setValue1(e.target.value)}/>
              <select onChange={(e) => setOperator(e.target.value)}>
                <option value="1">+</option>
                <option value="2">-</option>
                <option value="3">×</option>
                <option value="4">÷</option>
              </select>
          <input className="value2" onChange={(e) => setValue2(e.target.value)}/>
          =
          <input className="result" value={response}/>
        <br />
          <button onClick={culc} className="culc">計算</button>
        <br />
      </div>
    </div>
    </>
  );
};
export default App;

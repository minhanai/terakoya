import React, { useState } from 'react';
// import axios from "axios";

// const API_BASEURL = `https://hanashinagakunai.npkn.net/terakoya-culc/`;
// const API_KEY = "6870d725c8d443cbb9863841dd95ed41";

// const res = fetch(API_BASEURL, {
//   headers: {
//     "napkin-account-api-key": API_KEY
//   }
// })
function App() {

  const [value1,setValue1] = useState(0);
  const [value2,setValue2] = useState(0);
  const [operator,setOperator] = useState("+");
  const [response, setResponse] = useState([]);

  const culc = () =>{

      fetch(`https://hanashinagakunai.npkn.net/terakoya-culc/${value1}/${operator}/${value2}/`,
      {headers: { 'napkin-account-api-key': '6870d725c8d443cbb9863841dd95ed41'}}) 
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
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="×">×</option>
                <option value="÷">÷</option>
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

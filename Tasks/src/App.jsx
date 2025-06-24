import { useState } from "react";

function App() {
  /* Task 1- event handling added 

    const[text, selectText] = useState('');
    const[error, setError] = useState('');

    function handleClick(e) {
      let inputValue = e.target.value;
      selectText(inputValue);

      if(inputValue.length > 10) {
        setError('Too long...')
      }else{
        setError('');
      }
      console.log(e)
    } */

  const cars = ["toyota", "BMW", "suzuki", "honda"];
  return (
    <>
      <h2>cars list</h2>
      <ul>
        {cars.map(function (car, index) {
          return <li key={index}>{car}</li>;
        })}
      </ul>

      {/* 
      *****Task - 1
      <input type="text" value={text} placeholder='type something' onChange={handleClick}/>
      <p style={{ color: "red" }}>{error}</p> 
      */}
    </>
  );
}

export default App;

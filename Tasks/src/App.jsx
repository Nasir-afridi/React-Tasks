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
    } 

    Task-2
    const cars = ["toyota", "BMW", "suzuki", "honda"];*/

    const users = [
  { name: "Nasir", age: 19 },
  { name: "Ali", age: 22 },
];
  return (
    <>
      <ul>
        <h2>users</h2>
        {users.map((user, index) => (
          <li key={index}>Name: {user.name} , age: {user.age}</li>
        ))} 
      </ul>


      {/* 
      task-2
      <h2>cars list</h2>
      <ul>
        {cars.map(function (car, index) {
          return <li key={index}>{car}</li>;
        })}
      </ul> 
      */}

      {/* 
      *****Task - 1
      <input type="text" value={text} placeholder='type something' onChange={handleClick}/>
      <p style={{ color: "red" }}>{error}</p> 
      */}
    </>
  );
}

export default App;

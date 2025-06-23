import { useState } from 'react';

function App() {
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
  return (
   <>
    <input type="text" value={text} placeholder='type something' onChange={handleClick}/>
      <p style={{ color: "red" }}>{error}</p>
      
   </>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import Testing from './components/testing';


const App = () => {
  const [limit, setLimit] = useState(1)
  const [name, setName] = useState('Aris M')
  const inputNameRef=useRef()

  useEffect(() => {
    setName(inputNameRef.current.value);
  }, [limit])

  return (
    <>
      <center>
        {name}{limit}
        <br />
        <input placeholder='input disini' ref={inputNameRef} />
        <button onClick={() => setLimit((prev) => prev + 1)}>naikkan limit</button>
        <button onClick={() => setLimit((prev) => prev - 1)}>turunkan limit</button>
      </center>
      <Testing />
    </>
  )
}

export default App;

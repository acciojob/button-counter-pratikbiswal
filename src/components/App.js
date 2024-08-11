
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  function countClick(){
    setCount(count+1)
  }
  let [count,setCount]=useSate(0)
  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={countClick}>
        Click me
      </button>
    </div>
  )
}

export default App

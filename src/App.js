import React, { useState,useEffect} from "react";
import "./App.css";
import HomePage from "./components/HomePage";
function App() {
  //hooks usestate, useEffect, useContext, useRef
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/todo')
    .then(response=>response.json())
    .then(data=>{
      setData(data)
    })
  }, []);

  return (
    <div className="App">
      <HomePage data={data}/>
    </div>
  );
}

export default App;

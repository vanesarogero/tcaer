import {useEffect, useState} from 'react'
import './App.css';

function App() {

 let {data,setData}= useState ([])

  
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
        .then(res => res.json())
        .then(data=>setData(data.results))
        
        
      
},[])

  return (
    <>
    <h1>hola mundo </h1>
    </>
    
  );
}

export default App;

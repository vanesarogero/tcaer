import {useEffect, useState} from 'react'
import './App.css';

function App() {

 let {data,setData}= useState ([])

  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type/')
        .then(res => res.json())
        .then(function (datos)
        {setData(datos.results)
        })
           
      
},[])

  return (
    <>
    <select onChange={(e)=>setSelect(e.target.value)}>
    <h1>hola mundo </h1>
    
    </select>
    </>
    

    
  );
}

export default App;

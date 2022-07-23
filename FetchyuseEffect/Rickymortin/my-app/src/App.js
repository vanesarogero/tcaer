
import {useEffect, useState} from 'react'
import './App.css';



function App() {

  let [data, setData] = useState ({})
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then(datos=>setData(datos.results)) 
          
    },[])
    
    


  

  return (
    <>
      {data.map((personaje, index)=>{
        return(
        <div>
          <img src={personaje.image} alt={personaje.name} />
          <h4>{personaje.name}</h4>
        </div>
        )
      
    })}
      
      </>
  );
}

export default App


import './App.css';
import casas from './Casas';

//import component
import Casa from './Casa';

function App() {
  return (
    <>
    {casas.map((datosCasa,index)=>{
      return (<Casa key={index} datos={datosCasa}/> )
      //nos decuelve un array de datos componente, al ser un array REact entiende que eun componente no hace falta crear un componente por cada uno

    })}
    
    </>
  );
}

export default App;

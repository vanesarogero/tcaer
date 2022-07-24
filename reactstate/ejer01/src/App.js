import  persona from './persona'
import './App.css';

function App() {
  return (
    <>
    <h1>{persona.nombre}</h1>
    <div>
      <p>Edad: {persona.edad}</p>
      <p>Nacimiento: {persona.nacimiento}</p>
      <div>
        dirección
        <p>Calle: {persona.direccion.calle}, {persona.direccion.numero}</p>
        <p>{persona.direccion.piso} {persona.direccion.cd}{persona.direccion.ciudad}</p>
      </div>
    </div>
    </>
    
  );
}

export default App;

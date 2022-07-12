import  persona from "./eje01";
import './App.css';

function App() {
  return (
    <>
    <h1>{persona.nombre}</h1>
    <div>
      <p>Edad:{persona.edad}</p>
      <p>Nacimiento:{persona.nacimiento} </p>
      <div>
        Dirección:
        <p>Calle:{persona.direccion.calle}</p>
        <p>Numero y piso:{persona.direccion.numero}, {persona.direccion.piso} </p>
      </div>
    </div>
    </>
    
  );
}

export default App;


import './App.css';
import {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import videojuegos from './datos/videojuegos';
import Videojuego from './componets/Videojuego';


function App() {
  const [catalogo] = useState(videojuegos)
  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path='/' 
        element={catalogo.map((videojuego, index) => {
          return (
          <Videojuego videojuego={videojuego}
           key={index} />
          )
          
        })}
        />
      </Routes>

    </BrowserRouter>

  );
}

export default App;

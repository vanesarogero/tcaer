
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Componentes
import Header from './components/Header';
import Meses from './info/Meses';
import Dias from './info/Dias';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/meses' element={<Meses />}/>
      <Route path='/dia' element={<Dias />}/>
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;

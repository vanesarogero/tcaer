
import './App.css';
//objeto
import videoclub from './datos/videoclub';
//Component
import Cabecera from './component/Cabecera';

import Footer from './component/Footer';
import Main from './component/Main';

function App() {
  return (
    <>
      <Cabecera />
      <Main className='catalogo' peliculas={videoclub}/>
      
      <Footer />
    </>
  );
}

export default App;

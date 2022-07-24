
import './App.css';
import biblioteca from './biblio/biblioteca'
//components
import Header from './components/Header';
import Libro from './components/Libro'

function App() {
  return (
    <>
    <Header biblioteca={biblioteca}/>
    <main className="catalogo">
    {biblioteca.libros.map((librito,index)=>{
      return <Libro libro={librito} />
    })}
    </main>
    </>
  );
}

export default App;

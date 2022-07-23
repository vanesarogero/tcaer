import videoclub from "../datos/videoclub"


function Tarjeta(props) {
    return (
        <>
            <div className='card'>
                <img src={props.cartel} alt={props.titulo} />
                <div>
                    <h4>{props.titulo}</h4>
                    <p>{props.sinopsis}</p>

                </div>
            </div>
        </>
    )
}



function Main (props){
   let arrayFinal = props.peliculas.map((pelicula,index)=>{
        return <Tarjeta 
        key='index'
        cartel={pelicula.cartel}
         titulo={pelicula.titulo} 
         sinopsis={pelicula.sinopsis} />
    })
    console.log (arrayFinal)
    return(
        <>
        {arrayFinal}
        <Tarjeta/>
        </>
    )
}
export default Main;

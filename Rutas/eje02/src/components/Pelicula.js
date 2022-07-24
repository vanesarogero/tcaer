import { Link } from 'react-router-dom'

function Pelicula(props) {
    if (props.full) {

        return (


            <div>
                <img src={props.cartel} alt={props.titulo} />
                <Link to={'/' + props.titulo.replaceAll('', '-')}>
                    <h2>{props.titulo}</h2>
                </Link>
                <p>{props.sinopsis}</p>
            </div>



        )
    } else {
        return (
            <div>
                <img src={props.cartel} alt={props.titulo} />
                <Link to={'/' + props.titulo.replaceAll('', '-')}>
                    <h2>{props.titulo}</h2>
                </Link>
            </div>
        )
    }

}

export default Pelicula;
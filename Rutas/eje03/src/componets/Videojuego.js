function Videojuego({videojuego}) {
    //Si tenemos varios componente al mismo nivel deberemos poner una key para diferenciarlos (index)
    return (
        <div>
            <h2> {videojuego.titulo}</h2>
            <p>Año: {videojuego.anyo}</p>
            <p>Plataforma: {videojuego.plataforma}</p>
            <p>Creador: {videojuego.creador}</p>
            <p>Sinopsis: {videojuego.sinopsis}</p>

        </div>

    );
}
export default Videojuego;
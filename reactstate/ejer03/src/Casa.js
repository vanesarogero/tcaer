function Casa(props){
    return(
        <div>
            <p>Metros:{props.datos.metros}</p>
            <p>Año de construcción:{props.datos.anyo}</p>
            <p>Habitaciones:{props.datos.habitaciones}</p>
            <p>Terreno:{props.datos.terreno}</p>
            <p>Garaje:{props.datos.garaje ?"Si tiene":"No tiene"}</p>
            <p>Trastero{props.datos.trastero ?"Si tiene, privado":"No tiene"}</p>
            <p>Ascensor:{props.datos.ascensor ?"Si tiene":"Te pondrás en forma"} </p>

        </div>
    )
}
export default Casa;
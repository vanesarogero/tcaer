function Meses(){
    let meses=
["Enero",
 "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septimbre","Octubre","Noviembre","Dicembre",]
    return(
        <ul>
            {meses.map((mes)=><li>{mes}</li>)}
        </ul>

    )
}

    
 
export default Meses;
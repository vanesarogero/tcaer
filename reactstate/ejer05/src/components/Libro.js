import {useState} from 'react'

function Libro(props) {
    let [stock, setStock]=useState(3)
    return (
        <>
            <div>

                <div>
                    <img src={props.libro.formats['image/jpeg']} alt={props.libro.title} />
                    <h1>{props.libro.title}</h1>
                    {props.libro.authors.map((autor) => (<h4>autor.name</h4>))}

                </div>
                <p>Stock :{stock>0 ?"Tenemos stock":"No hay stock"}</p>
                <button onClick={()=>setStock(--stock)}>Stock</button>

            </div>
        </>

    )
}

export default Libro;
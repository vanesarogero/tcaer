

function Header (props){
    return(
        <header>
            <h1 >Biblioteca de la Almu</h1>
            <p>{props.biblioteca.usuario.vip ?"Bienvenido nuestra biblioteca,"+ props.biblioteca.usuario.nombre :props.biblioteca.usuario.nombre }</p>
            <img src={props.biblioteca.usuario.imagen} alt= {props.biblioteca.usuario.name}/>
        </header>

    )
}
export default Header;
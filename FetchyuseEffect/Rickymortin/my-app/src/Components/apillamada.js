
const llamada =
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then(function (datos) {
                console.log(datos)
            })
    }[])




export default apillamada;

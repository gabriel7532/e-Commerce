const ItemDetail = ({id, name, img, descripcion, precio, precioOferta }) => {
    
    
    return(
        <div>
            <h3>{name}</h3>
            <img src={img} alt='itemIMG'/>
            <h5>Antes = {precio}</h5>
            <h4>Ahora = {precioOferta}</h4>
            <p>{descripcion}</p>
        </div>
    )
}

export default ItemDetail
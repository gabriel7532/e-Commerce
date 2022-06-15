import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({id, name, img, precio, oferta}) => {
    return(
        <div  className='items'>
            <h3>{oferta}</h3>
            <h2>{name}</h2>
            
            <picture>
            <img  src={img}  alt = 'item'/>  
            </picture>

            <h5>{precio}</h5>
            <Link to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item;
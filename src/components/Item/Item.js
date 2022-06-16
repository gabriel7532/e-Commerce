import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({id, name, img, precio}) => {
    return(
        <div  className='items'>
            
            <h2 className='name'>{name}</h2>
            
            <picture>
            <img  src={img}  alt = 'item'/>  
            </picture>
            <h5>{precio}</h5>
            <Link className='verDetalle' to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item;
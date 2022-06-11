import './Item.css'
import { Link } from 'react-router-dom';
import { getItemsById } from '../../AsyncMock';


const Item = ({id, name, img, precio}) => {
    return(
        <div  className='items'>
            <h2>{name}</h2>
            <img  src={img}  alt = 'item'/>  
            <h5>{precio}</h5>
            <button onClick={()=> getItemsById}>Detalle</button>
        </div>
    )
}

export default Item;
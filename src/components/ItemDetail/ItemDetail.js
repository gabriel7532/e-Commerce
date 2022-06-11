import { getItems } from "../../AsyncMock"
import Item from "../Item/Item"

const ItemDetail = ({id, name, img, descripcion}) => {
    
    
    return(
        <div>
            <h3>{name}</h3>
            <img src={img}/>
            <p>{descripcion}</p>
        </div>
    )
}

export default ItemDetail
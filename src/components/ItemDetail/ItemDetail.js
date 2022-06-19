import "./ItemDetail.css"
import { useState } from "react"
import { useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import CartContext from "../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({id, name, img, descripcion, precio, precioOferta,stock}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

      const {addItem} = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} ${name}`)
        addItem({id, name, precio, quantity})
        setQuantityAdded(quantity)
    }

    

        return(
        <div className="detalle">
            <h3>{name}</h3>
            <img src={img} alt='itemIMG'/>
            <h5>Antes = {precio}</h5>
            <h4>Ahora = {precioOferta}</h4>
            <p className="descripcion" >{descripcion}</p>

            {quantityAdded === 0
            ? <ItemCount onAdd={handleOnAdd} stock={stock}/> :<Link to='/cart'>Terminar compra</Link>
            }

        </div>
    )
}

export default ItemDetail
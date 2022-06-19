import { useState } from "react"

const ItemCount = ({onAdd, stock = 0, initial=1})=>{
    const [quantity, setQuantity] = useState(initial)

    const increment=() =>{
        if(quantity < stock) {setQuantity(quantity + 1)
    }
}

    const decrement=() =>{
        if(quantity > 1) {setQuantity(quantity - 1)
    }
}

    return(
        <div>
                <button onClick = {decrement}>-</button>
                <p>{quantity}</p>
                <button onClick = {increment}>+</button>
                <button onClick = {() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
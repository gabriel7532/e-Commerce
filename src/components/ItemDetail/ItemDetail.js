import "./ItemDetail.css"
import { useState } from "react"
import { useContext } from "react"
import { Context } from "../../App"

const InputCount = ({onAdd, stock, initial=1})=>{
    const [count, setCount] = useState(initial)

    const handleChange = (e)=>{
        setCount(e.target.value)
    }
    return(
        <div> 
            <input type='number' onChange ={handleChange} value={count}/>
            <button onClick={() => onAdd(parseInt(count))}>Agregar al carrito</button>
        </div> 
    )
}

const ButtonCount = ({onAdd, stock=10, initial = 1}) =>{
    const [count, setCount] = useState(initial)

    const increment=() =>{
        if(count < stock) setCount(count + 1)
    }

    const decrement=() =>{
        if(count > 0) setCount(count - 1)
    }

    return(
        <div>
            <p>{count}</p>
                <button onClick = {decrement}>-</button>
                <button onClick = {increment}>+</button>
                <button onClick = {() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({id, name, img, descripcion, precio, precioOferta,stock}) => {
      const {cart, setCart} = useContext(Context)

    const [inputType, setInputType] = useState('button')

    const changeCount = () => {
        const input = inputType === 'button' ? 'input' : 'button'
        setInputType(input)
    }

    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} ${name}`)
        setCart([...cart, {id, name, precio, quantity}])
    }

        const Count = inputType === 'button' ? ButtonCount : InputCount
    

        return(
        <div className="detalle">
            <h3>{name}</h3>
            <img src={img} alt='itemIMG'/>
            <h5>Antes = {precio}</h5>
            <h4>Ahora = {precioOferta}</h4>
            <p className="descripcion" >{descripcion}</p>

            <button onClick={changeCount}>Cambiar contador</button>
            <Count onAdd={handleOnAdd} stock={stock}/>

        </div>
    )
}

export default ItemDetail
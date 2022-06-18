import {useState, useEffect} from 'react'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [result, setResult] = useState(0)

    useEffect(()=>{
        console.log(count)
    },[count])

    useEffect(() => {
        setResult(count) 
    }, [count])

    const decrement = () =>{
        setCount(prev => prev -1)
    }

    const increment = () =>{
        count < stock && setCount(count +1)
    }
    
    return (
        <>        
        <h2>Count:{result}</h2>
        <div>            
            <button onClick={decrement}>-</button>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd()}>Agregar al carrito</button>
        </div>
        </>
    )
}

export default Counter;
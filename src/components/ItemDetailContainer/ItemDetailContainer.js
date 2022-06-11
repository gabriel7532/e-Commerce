import { useState, useEffect } from "react"
import { getItemsById } from "../../AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState();

    const {itemId} = useParams()
    
    useEffect(() => {
        getItemsById('1').then(Response => {
            setProduct(Response)
        })
    }, []
    )
    console.log(product)

    return (
        <>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer
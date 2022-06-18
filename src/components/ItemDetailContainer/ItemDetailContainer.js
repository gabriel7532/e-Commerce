import { useState, useEffect } from "react"
import { getItemsById } from "../../AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const {itemId} = useParams()
    
    useEffect(() => {

        getItemsById(itemId).then(Response => {
            setProduct(Response)
        })
    }, [])
    
    return (
        <>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer
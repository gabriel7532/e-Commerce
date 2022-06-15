import './ItemListContainer.css'
import { useState,useEffect } from 'react'
import { getItems, getItemsByOferta } from '../../AsyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props)=>{
        const [items, setItems] = useState([])
        const [loading, setLoading] = useState(true)

        const {ofertaId} = useParams()

    useEffect(() => {
        setLoading(true)

        if(!ofertaId){
            getItems().then(prods => {
                setItems(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() =>{setLoading(false)})
    } else {
        getItemsByOferta(ofertaId).then(prods =>{
            setItems(prods)
        }).catch(error => {
            console.log(error)
    }).finally(() =>{
        setLoading(false)
    })    
}

},[ofertaId])
    
    if(loading){
        return <h3>loading...</h3>        
    }
    
    return(
            <>
            <div>
                <h3 className="Titulo" >{props.greeting}</h3>  
                 {items.length > 0
                 ? <ItemList items={ items } />
                : <h1>No hay productos</h1>}            
            </div>
            </>
        )
}

export default ItemListContainer
import './ItemListContainer.css'
import { useState,useEffect } from 'react'
import { getItems, getItemsByCategory } from '../../AsyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props)=>{
        const [items, setItems] = useState([])
        const [loading, setLoading] = useState(true)

        const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        if(!categoryId){
            getItems().then(prods => {
                setItems(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() =>{setLoading(false)})
    } else {
        getItemsByCategory(categoryId).then(prods =>{
            setItems(prods)
        }).catch(error => {
            console.log(error)
    }).finally(() =>{
        setLoading(false)
    })    
}

},[categoryId])
    
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
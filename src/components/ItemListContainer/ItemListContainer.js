import './ItemListContainer.css'
import { useState,useEffect } from 'react'
import { getItems, getItemsByCategory } from '../../AsyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props)=>{
        const [items, setItems] = useState([])


    useEffect(() => {
            getItems().then(response =>{
                setItems(response)
            })
        }, [])

    
    
    return(
            <>
            <div>
                <h3 className="Titulo" >{props.greeting}</h3>
                <ItemList items= {items}/>   
                             
            </div>
            </>
        )
}

export default ItemListContainer
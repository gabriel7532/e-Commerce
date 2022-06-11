import Item from "../Item/Item"


const ItemList = ({items})=>{
    
    return (
    <div style={{display: 'flex'}}>
         {items.map(prod => <Item key = {prod.id} {...prod}/>)}
    </div>
    )
}

export default ItemList
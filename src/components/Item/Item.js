import './Item.css'

const Item = ({id, title, img}) => {
    return(
        <div className='items'>
            <h2>{title}</h2>
            <img  src={img}  alt = 'item'/>            
        </div>
    )
}

export default Item;
import { getByTitle } from "@testing-library/react"
import Item from "../Item/Item"

const items = [
    {
        id: '1',
        name: 'TRX',
        img: 'https://www.mundosilbato.es/1051925-thickbox_default/kit-entrenamiento-en-suspension-trx.jpg'
    },
    {
        id: '2',
        name: 'Mancuernas',
        img: 'https://www.fucol.com.co/wp-content/uploads/2017/12/pesas-mancuernas-50-libras-en-bogota.jpg'
    },
    {
        id: '3',
        name: 'Lazo para saltar',
        img: 'https://falabella.scene7.com/is/image/FalabellaCO/4954312_1?wid=800&hei=800&qlt=70'
    }
]

export const getItems= () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 2000)
    })
}

const ItemList = ({items})=>{
    return (
    <div style={{display: 'flex'}}>
    {items.map(prod => <Item key = {prod.id} title={prod.name} img={prod.img}/>)}
    </div>
    )
}

export default ItemList
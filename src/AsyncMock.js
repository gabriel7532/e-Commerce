const items = [
    {
        id: '1',
        name: 'TRX',
        img: 'https://www.mundosilbato.es/1051925-thickbox_default/kit-entrenamiento-en-suspension-trx.jpg',
        category: 'suspension',
        precio: '$80.000',
        precioOferta: '65.000',
        oferta: 'enoferta',
        descripcion: 'No se estira, se trata de usar nuestro propio peso en angulos diferentes'
    },
    {
        id: '2',
        name: 'Mancuernas',
        img: 'https://www.fucol.com.co/wp-content/uploads/2017/12/pesas-mancuernas-50-libras-en-bogota.jpg',
        category: 'peso libre',
        precio: '$150.000', 
        descripcion: 'Con 20 kilos de discos intercambiables'
    },
    {
        id: '3',
        name: 'Lazo para saltar',
        img: 'https://falabella.scene7.com/is/image/FalabellaCO/4954312_1?wid=800&hei=800&qlt=70',
        category: 'cardio',
        precio: '$50.000',
        descripcion: 'Ideal para realizar trabajo cardiovascular con espacio reducido'
    }
]

export const getItems = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(items)
        }, 500)
    })
}

export const getItemsByOferta = (ofertaId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items.filter(items => items.oferta === ofertaId))
            
        }, 500);
    })
}

export const getItemsById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items.find(prod => prod.id === id))
        },500)
    })
}


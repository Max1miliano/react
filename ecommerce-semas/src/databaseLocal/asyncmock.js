const productos = [
    {
        id: '568',
        nombre: 'Audifonos Samsung',
        categoria: 'Accesorios',
        precio: '$120.000',
        imagen: 'https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_960_720.jpg',
        cantidad: 'Cantidad 8 unidades',
        descripcion: 'Audifonos inalambricos para pc o celular'

    },
    {
        id: '524',
        nombre: 'Portatil Rojos',
        categoria: 'Computadores',
        precio: '$2.800',
        imagen: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_960_720.jpg',
        cantidad: 'Cantidad 15 unidades',
        descripcion: 'Computador Gamer portatil y tactil, con pantalla 360 grados'  
    },
    {
        id: '180',
        nombre: 'Celular Kalley',
        categoria: 'Celulares',
        precio: '$1.115',
        imagen: 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_960_720.jpg',
        cantidad: 'Cantidad 5 unidades',
        descripcion: 'Celular inteligente 12 de ram, 128 de rom y octalcore de 3.2 GHZ'   
    }
]

export const callProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

// Busco los productos por su categoria 
export const callProductsByCategory = (categoriaId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoriaId))
        }, 2000)
    })
}


// Busco los productos por su id 
export const callProductsById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 3000)
    })
}
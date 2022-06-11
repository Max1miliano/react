const catalogo = {
    coleccion2019: [
        {
            id: 1,
            nombre: "Sour Destro",
            genetica: "Destroyer x SBSP",
            floracion: 65,
            aroma: "Zorrino y manzana, melón con café, pera con queso suave.",
            sabores: "Exquisita al paladar. Muy frutal y dulce. Chicle tatuaje remasterizado. Manzana y pera con toques de café.",
            altura: {
                indoor: 1.75,
                outdoor: 3.70
            }, 
            produccion: {
                indoor: {
                    min: 350,
                    max: 450
                },
                outdoor: 1
            },
            thc: {
                min: 19,
                max: 24
            },
            cbd: 0.6,
            img: {
                src: "https://silverriverseeds.com/wp-content/uploads/2019/03/sour-destro-1-WEB-600x495.jpg",
                alt: "sourDestro"
            }
        },
        {
            id: 2,
            nombre: "River Haze",
            genetica: "(Silver Haze x Destroyer) x 2046",
            floracion: 75,
            aroma: "Incienso y alcanfor algo frutal, haze old school con ráfagas frutales de watermelon y cítricos dulces.",
            sabores: "Manzanas al oporto y sambayón con tintes cítricos.",
            altura: {
                indoor: 1.80,
                outdoor: 5
            }, 
            produccion: {
                indoor: 600,
                outdoor: 3
            },
            thc: {
                min: 21,
                max: 27
            },
            cbd: 0.5,
            img: {
                src: "https://silverriverseeds.com/wp-content/uploads/2019/03/river-haze-1-WEB-600x450.jpg",
                alt: "riverHaze"
            }
        },
        {
            id: 3,
            nombre: "OG 324",
            genetica: "OG 18 x OG 18",
            floracion: 60,
            aroma: "Témpera con agua, espárrago cocido con mentol.Zorrino y manzana, melón con café, pera con queso suave.",
            sabores: "Laurel en aceite, sopa de verduras con gasolina.",
            altura: {
                indoor: 1.65,
                outdoor: 2.80
            }, 
            produccion: {
                indoor: 550,
                outdoor: 950
            },
            thc: 25,
            cbd: 0.4,
            img: {
                src: "https://silverriverseeds.com/wp-content/uploads/2019/03/OG-324-2-2-WEB-600x450.jpg",
                alt: "og324"
            }
        }
    ]
} 

export const getCatalogo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(catalogo.coleccion2019)
        }, 2000)
    })
}


// continuar con catalogo 
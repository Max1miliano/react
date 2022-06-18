const catalogo = [
    {
        id: "1",
        nombre: "Sour Destro",
        categoria: "coleccion2019",
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
        id: "2",
        nombre: "STAR POWER",
        categoria: "coleccion2020",
        genetica: "(Starbud x Sour Power) x Sour Power",
        floracion: 55,
        aroma: "Para quienes lo conocen, tiene un parecido al perfume Sauvage de Christian Dior, bergamota de Calabria, geranios, lavanda, ahucaucil hervido. Estando en la soga de secado es tremendo el barandazo a panceta ahumada o matambrito de cerdo a la parrilla, dan ganas de morfarse los cogollos en lugar de fumarlos.",
        sabores: "Impresionante resulta la combinación ácido / dulce, de esta creación magistral. Me imagino a saborear unos espárragos mentolados con carré de cerdo, o alcahuciles con una crema de almendras. La sensación al paladar es agridulce, no es para nada frutal, como comer una verdura con salchichón ahumado.",
        efecto: "Muy potente y relajante no es muy apta para iniciar por las mañanas activas, es preferible consumirla más de media tarde o por la noche. Tiene un pegue bastante indico, muy contundente cerebralmente, da mucho placer físico y tiene efectos afrodisíacos sobresalientes. La considero de efecto mágico, ya que siempre te pone de buen ánimo y con pensamientos positivos y constructivos, a pesar de tener poco de sativa. Muy apta para poder descansar o contemplar estrellas en noches despejadas.",
        altura: {
            indoor: 1.45,
            outdoor: 2.40
        }, 
        produccion: {
            indoor: {
                min: 420,
                max: 480
            },
            outdoor: 850
        },
        thc: 25,
        cbd: 0.75,
        img: {
            src: "https://silverriverseeds.com/wp-content/uploads/2020/07/STAR-POWER-PORTADA-Web-2-600x831.jpg",
            alt: "Star Power"
        }
    },
    {
        id: "3",
        nombre: "MAGNUM COOKIES",
        categoria: "automaticas",
        genetica: "Mágnum x Girl Scout Cookies",
        floracion: 85,
        aroma: "Una combinación exquisita de matices cítricos como limón sutil y la mandarina, notas a pino y uva chinche. También podemos encontrar descriptores como el melón maduro y frutas tropicales como el maracuyá.",
        sabores: "Galleta de vainilla, jengibre picante, deja presente una sensación muy agradable que nos recuerda a la miel.",
        efecto: "Con un altísimo subidón, definimos a este hibrido como una de las más noqueadoras de nuestra colección de automáticas. Su alto porcentaje de THC genera un efecto eufórico y estimulante a la vez.",
        altura: {
            indoor: 80,
            outdoor: 1.4
        }, 
        produccion: {
            indoor: {
                min: 400,
                max: 600
            },
            outdoor: {
                min: 450,
                max: 650
            }
        },
        thc:20,
        cbd: 1.4,
        img: {
            src: "https://silverriverseeds.com/wp-content/uploads/2022/04/MG_0019-w.jpg",
            alt: "MagnumCookies"
        }
    }
]

export const getCatalogo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(catalogo)
        }, 500)
    })
}

export const getCatalogoById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(catalogo.find(sem => sem.id === id))
        }, 500)
    })
}

export const getSemillasByCategoria = (categoriaId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(catalogo.filter(sem => sem.categoria === categoriaId))
        }, 500)
    })
}
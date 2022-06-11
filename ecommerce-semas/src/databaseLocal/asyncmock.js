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
    ],
    coleccion2020: [
        {
            id: 1,
            nombre: "STAR POWER",
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
            id: 2,
            nombre: "SOUR COMPASSION",
            genetica: "Sour Medical (Red Medical x Sour Flash) x  Compassion",
            floracion: 60,
            aroma: "Al acercar la nariz a Sour Compassion lo primero que llega impactante y pega directo en los lacrimales es el potente hedor a cebolla frita con mayonesa, un toque suave de té de manzanilla y un trasfondo general a bosque húmedo y salvaje.",
            sabores: "Ese aroma a cebolla se hace mentolado al paladar, el Linalool me viene al cerebro cuando posa la lengua, con una pizca cítrica, dejando una vez que se retira el mentol un tremendo gusto a salamín de fiambrería de barrio.",
            efecto: "Lo mejor de Sour Compassion es su versatilidad para complacer a todos los consumidores de cannabis, tanto a los que buscan el poder de una gran planta con THC como aquellos que buscan un nivel de CBD dos o tres veces superior que una planta standard alta en THC. El pegue comienza muy arriba pero el CBD no deja en ningún momento que aplique la paranoia, la taquicardia ni la baja presión repentina. Para aquel que recién comienza a probar cosas ricas y fuertes pero tiene algo de pánico o mucho respeto esta es la hierba a cultivar y fumar. Te pone muy bien de humor y el nivel de CBD no deja nunca que te pegue mal o te deje al galope. De hecho te pone alegre pero relajado. Los músculos y extremidades se tornan casi inexistentes y el dolor se aplaca como con ninguna otra yerba. Muy buena para dormir o una jornada de descanso por la relajación corporal. Por otra parte la cabeza se mantiene lúcida pero nuestro  armazón parece flotar con el viento.",
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
        }
    ],
    automaticas: []
} 

export const getCatalogo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(catalogo.coleccion2019)
        }, 2000)
    })
}


// continuar con catalogo  
const tiendaOnline = [
    {
        "site_id": "MLA",
        "country_default_time_zone": "GMT-03:00",
        "paging": {},
        "results": [
        ],
        "sort": {},
        "available_sorts": [],
        "filters": [
        ],
        "available_filters": [
        ]
      }
]

export const getCatalogo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(tiendaOnline)
        }, 500)
    })
}

export const getCatalogoById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(tiendaOnline.find(sem => sem.id === id))
        }, 500)
    })
}

export const getSemillasByCategoria = (categoriaId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(tiendaOnline.filter(sem => sem.categoria === categoriaId))
        }, 500)
    })
}
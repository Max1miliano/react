import Item from "./items"

const ItemList = ({ catalogo }) => {
    return (
        <ul>
            {catalogo.map(catalogos => <Item key={catalogos.id} {...catalogos}/>)}
        </ul>
    )
}

export default ItemList
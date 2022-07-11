import CategoryLink from "../CategoryItem/CategoryList"
import { useContext } from "react"
import CartContext from "../../context/CardContext"



const CategoryContainer = () => {

const { todasLasCategorias } = useContext(CartContext)
    return <>
         <CategoryLink allCategories={todasLasCategorias}></CategoryLink>
    </>
}

export default CategoryContainer
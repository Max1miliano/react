import { MenuItem } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const CategoryName = ({nombre}) => {
    return <>
        <MenuItem>
           <NavLink to={`/catalogo/${nombre}`}>{nombre}</NavLink>
        </MenuItem>
    </>
}

export default CategoryName
import Loader from "../Loader/Loader";

import CategoryName from "../CategoryName/CategoryName";

const CategoryLink = ({allCategories}) => {
    return <>
        { allCategories != null ? allCategories.map(nombreDeCategoria => <CategoryName key={nombreDeCategoria} {...nombreDeCategoria}/>) : <Loader></Loader>}
    </>
}

export default CategoryLink
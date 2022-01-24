import Category from '../Category'

const CategoryList = ({categories}) => {
    
    return(
        <>
            {categories.map((category) => {
                return <Category key={category.id} category={category} />
            })}
        </>
    )
}


export default CategoryList


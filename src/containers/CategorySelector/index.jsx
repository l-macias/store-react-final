import { useEffect, useState } from "react"
import CategoryList from "../../components/CategoryList"
import Categorias from "../../mock/Categorias"


const CategorySelector = () => {


   const [categories, setCategories] = useState([]) 
   
   

   useEffect(() => {
      const categoryPromise = new Promise((res) => {
         res(Categorias)
      })
      categoryPromise.then((res) => setCategories(res))
   }, [categories])
   
   return(
      <CategoryList categories={categories} />
      )
}


export default CategorySelector
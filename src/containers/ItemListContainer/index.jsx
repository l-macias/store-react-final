import { useEffect, useState } from "react"
import MockedItems from "../../mock/MockedItems"
import ItemList from "../../components/ItemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
   

   const [items, setItems] = useState([]) 

   const [loading, setLoading] = useState(true)

   const  {catId}  = useParams()
   
   useEffect(() => {
      setLoading(true)
      const itemPromise = new Promise((res) => {
         
         setTimeout(()=> {
            let myData = catId ? MockedItems.filter((item) => item.category === catId) : MockedItems;
            
            if(catId === "all") {
               myData = MockedItems
            }
            res(myData)}, 500)
      })
      itemPromise.then((res) => {
         setItems(res)
      })
      .finally(()=> setLoading(false))
   }, [catId])
   
   return(
      loading ? <h2 className="loading">Cargando...</h2> :
      <ItemList items={items}/>)
}

export default ItemListContainer
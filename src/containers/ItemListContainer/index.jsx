import { useEffect, useState } from "react"
import ItemList from "../../components/ItemList"
import { useParams } from 'react-router-dom'
import { getFirestore } from "../../firebase"



const ItemListContainer = () => {
   

   const [items, setItems] = useState([]) 

   const [loading, setLoading] = useState(true)

   const  {catId}  = useParams()
   
 

   useEffect(() => {
      setLoading(true)
      
      const db = getFirestore()
      const productCollection = db.collection("articulos")
      
      
      setTimeout(()=> {
      productCollection.get().then(value => {
         let datos = value.docs.map(e => {
            return{...e.data(), id: e.id}
         })
         let myData = catId ? datos.filter((item) => item.category === catId) : datos;
            
         if(catId === "all") {
            myData = datos
            
         }
         setItems(myData)
         setLoading(false)
         
     })},1000)
   }, [catId])
   
   return(
      loading ? <img className="loadingListContainer" src="https://c.tenor.com/9IsrqCRzmNwAAAAC/tyrannosaurus-dinosaur.gif" alt="Cargando el contenido" /> :
      <ItemList items={items}/>)
}

export default ItemListContainer
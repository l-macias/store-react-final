import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { ItemDetail } from "../../components/ItemDetail"
import { getFirestore } from '../../firebase' 



const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})

    
    const [loading, setLoading] = useState(true)

    const  { itemId }  = useParams()

   
    
    useEffect(() => {
        setLoading(true)
        
        const db = getFirestore()
        const productCollection = db.collection("articulos")

    setTimeout(()=> {
        productCollection.get().then(value => {
            let datos = value.docs.map(e => {
                return {...e.data(), id: e.id}
            
            })
            console.log (datos)
            const singleProd = datos.find((e) => e.id === itemId);
            setProduct(singleProd)
            setLoading(false)
    })},1500) 
    }, [itemId])
    
    return loading ? <h2 className="loading">Cargando...</h2> :
    <ItemDetail product={product} />
       
}

export default ItemDetailContainer
import React from 'react'
import { useEffect, useState } from "react"
import MockedItems from "../../mock/MockedItems"
import { useParams } from 'react-router-dom'
import { ItemDetail } from "../../components/ItemDetail"



const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})

    
    const [loading, setLoading] = useState(true)

    const  { itemId }  = useParams()

    

    useEffect(() => {
        setLoading(true)
        const itemPromise = new Promise((res) => {
            
            setTimeout(()=> {
            const myData = MockedItems.find((item) => item.id === itemId);
            
            
            
            res(myData)}, 500)
        })
        itemPromise.then((res) => {
            setProduct(res)
            
        })
        .finally(()=> setLoading(false))
    }, [itemId]);

    return loading ? <h2 className="loading">Cargando...</h2> :
    <ItemDetail product={product} />
}


export default ItemDetailContainer;
import React, {createContext, useEffect, useState} from "react";


const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const isInCart = (id) => {
        let inCart = false
        let item = cart.find(prod => prod.id === id)
        if (item) {
            inCart = true
        }
        return inCart
    }
    
    const addItem = (item, quantity) => { 
    const updtItem = cart.find(prod => prod.id === item.id)
        if(!isInCart(item.id)){
             setCart([...cart, {id: item.id, title: item.title, price: item.price, quantity: quantity}])
            } else {
             const newQuant = updtItem.quantity + quantity
             
             setCart(cart.map((prod)=> {
                 if(prod.id === item.id){ 
                    prod.quantity = newQuant
                }
                return prod
             }))
            }

        
    }

    const removeItem = (item) => {
        setCart(cart.filter(prod => prod.id !== item.id))
        
    }

    const clear = () => {
        setCart([])
    }

    useEffect(() => {
        let tot = 0
        cart.map(item => {   
            return(tot += item.quantity * item.price)    
        })
        setTotal(prevTotal => tot)
    }, [cart])

    return (
        <CartContext.Provider value={{cart,  addItem, removeItem, clear, total}}>
            {children}
        </CartContext.Provider>)
}

export {CartContext, CartContextProvider}




















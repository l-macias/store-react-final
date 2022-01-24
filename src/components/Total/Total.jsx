import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Total = () => {
    const {cart} = useContext(CartContext)
    let total = 0
    
    // eslint-disable-next-line array-callback-return
    cart.map(item => {
        total += item.quantity * item.price
    })

    return(
        <h1 className="total">{`TOTAL: $${total}`}</h1>
    )
}

export { Total } 
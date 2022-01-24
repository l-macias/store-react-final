import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

// USADO EN EL CARTWIDGET
const CartCount = () => {
    const {cart} = useContext(CartContext)
    let count = 0
    // eslint-disable-next-line array-callback-return
    cart.map(item => {
        count += item.quantity 
    })

    return(
        <p>{count}</p>
    )
}

export { CartCount } 
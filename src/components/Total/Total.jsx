import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Total = () => {
    const {cart} = useContext(CartContext)
    let total = 0
    let totalQty = 0
    // eslint-disable-next-line array-callback-return
    cart.map(item => {
        total += item.quantity * item.price
        totalQty +=item.quantity
    })

    return(
        <>
        <div className="total">
        <h1>{`TOTAL PRODUCTOS: ${totalQty} `}    </h1>
        <h1>{`TOTAL: $ ${total}`}</h1>
        </div>
        </>
    )
}

export { Total } 
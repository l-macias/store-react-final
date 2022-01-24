import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Total } from "../Total/Total";
import {Link} from  "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear} = useContext(CartContext)
    
    return(
        <div>
            
            <div className="cartDisplay">
                <h1 className="myCart"> Carrito de Compras</h1>
                { cart.length > 0 ?
                <div>
                {
                    cart.map((item)=> {
                        
                        return (
                        <div className="itemLine" key={item.id}>
                            <h1 className="textLine">{`Codigo: ${item.id} - ${item.title} - $${item.price} `}</h1>
                            <h2>{` Cantidad: ${item.quantity}`}</h2>
                            <h2>{`Subtotal: $ ${item.quantity*item.price}`}</h2>
                            <button className='removeItem' onClick={()=>removeItem(item)}>Eliminar artículo</button>
                        </div>
                        )
                    })
                }
                </div> 
                    : 
                <>
                    <h1 className="cartEmpty">El carrito está vacío.</h1>
                    <Link className="returnLink" to={"/products"}>Ver nuestros productos</Link>
                </>
                }
                
                <Total />
                <div className="btnsContainer cartBtns">
                    <button className='finalizar enabDisab' disabled={cart.length ===0} onClick={clear}>Finalizar Compra</button>
                    <button className='removeItem clear enabDisab' disabled={cart.length ===0} onClick={clear}>Vaciar Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Cart 
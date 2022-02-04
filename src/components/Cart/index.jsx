import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Total } from "../Total/Total";
import {Link} from  "react-router-dom";
import { Button } from "bootstrap";

const Cart = () => {
    const {cart, removeItem, clear} = useContext(CartContext)
    const [name, setName] = useState ('')
    const [phone, setPhone] = useState ('')
    const [email, setEmail] = useState ('')

    const comprar = ()=> {
        let objeto = {
            buyer: {name: name,phone: phone,email: email}, items: [...cart], total: Total.total
        }
console.log(objeto)
    }

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
                            <h2>{`Subtotal: $ ${item.quantity * item.price}`}</h2>
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
                    <div className="containerSelector">
                    <label>Nombre</label><input type="text" onChange={e => setName(e.target.value)} />
                    <label>Telefono</label><input type="tel"onChange={e => setPhone(e.target.value)} /> 
                    <label>Email</label><input type="email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <button type="submit" onClick={comprar}>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Cart 
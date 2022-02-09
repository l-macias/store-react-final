import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Total } from "../Total/Total";
import { Link } from "react-router-dom";
import "@firebase/firestore";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

    return (
    <div>
      <div className="cartDisplay">
        <h1 className="myCart"> Carrito de Compras</h1>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => {
              return (
                <div className="itemCartFlex" key={item.id}>
                  <h6>{` Codigo: ${item.id}`}</h6>
                  <h3 className="itemCart">{`| ${item.title} | $${item.price} |`}</h3>
                  <h5>{`Cantidad: ${item.quantity} |`}</h5>
                  <h5>{`Subtotal: $ ${item.quantity * item.price}`}</h5>
                  <button
                    className="removeItem"
                    onClick={() => removeItem(item)}
                  >
                    Eliminar artículo
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <h1 className="cartEmpty">El carrito está vacío.</h1>
            <Link className="returnLink" to={"/products"}>
              Ver nuestros productos
            </Link>
          </>
        )}

        <Total />
        <div className="btnsContainer cartBtns">
          <button
            className="removeItem clear enabDisab"
            disabled={cart.length === 0}
            onClick={clear}
          >
            Vaciar Carrito
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;

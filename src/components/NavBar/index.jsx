import { useContext } from "react"
import CartWidget from "../CartWidget";
import ItemLink from "../ItemLink"
import { CartContext } from "../../context/CartContext"

const NavBar = () => {
    const {cart} = useContext(CartContext)

    const show = cart.length > 0

    return(
        <nav className='navfull'>
            <div className='logo'><h3>ESTIM - Pocos juegos | Mucha onda</h3></div>
            <div className='contenedor-Nav'>
                <div className="hamb-menu">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="close-menu">
                    <i className="fa fa-close"></i>
                </div>
                <div className='collapse' id="collapse" >
                    <ul className='navbar-nav'>
                        
                        <ItemLink />
                        <li className="item cart-li">
                            {show && <CartWidget />}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

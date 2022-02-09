import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import CategorySelector from "../containers/CategorySelector";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer";
import { CartContextProvider } from "../context/CartContext";
import Cart from "../components/Cart"
import Form from "../components/Form";

const Router = () => {
    return(  
        <CartContextProvider>
        <BrowserRouter>
            <header className="App-header">
            <NavBar />
            </header>
        <Switch>
            <Route exact path="/">
            <div style={{
          textAlign: 'center',
          marginTop: '30px',
          
         }}>
                <h1 className="titulo"> ESTIM</h1>
                <h2>Bienvenidos a la peor tienda online con menos contenido del mundo, pero con algunos juegos divertidos</h2>
                <h3>Te invitamos a que conozcas nuestros pocos Juegos ingresando en la sección <Link className="returnLink" to={"/products"}>PRODUCTOS</Link></h3>
              </div>
            </Route>
            <Route path="/products">
              <div className="containerAll">
                <div className="containerSelector">
                  <h3 className="filterTitle">Categorías:</h3>
                  <CategorySelector />
                </div> 
                <div className='container'> 
                  <Switch>
                    <Route exact path="/products">
                      <ItemListContainer />
                    </Route>
                    <Route path="/products/:catId"> 
                      <ItemListContainer />
                    </Route>
                      
                  </Switch>
                </div>
              </div>
            </Route>
            <Route exact path="/product/:itemId"> 
              <ItemDetailContainer />
            </Route> 
            <Route exact path="/cart"> 
              <Cart />
              <Form />
            </Route> 
            <Route path="/*">
              <h1>Error 404 - Página no encontrada</h1>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    );
  }
        



    export default Router;
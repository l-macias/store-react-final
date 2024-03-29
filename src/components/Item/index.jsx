import { Link } from 'react-router-dom'


const Item = ({item}) => (
    <Link className="linkCardProduct" to={`/product/${item.id}`}>
        <div className="cardProduct">
            <img src={item.pictureUrl} alt="" className="image" />
            <div className="boxProduct">
                <h1 className="nameProduct">{item.title}</h1>
                <p className="descriptionProduct">{item.description}</p>
                <p className="priceProduct">$ {item.price}</p>
            </div>
        </div>
    </Link>
)

export default Item
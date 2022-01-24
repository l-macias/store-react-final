import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom"


const Categorias = [
    {catId:1, nombre: "Inicio", ruta:"/"},
    {catId:2, nombre: "Productos", ruta:"/products"},
    
];

const ItemLink = () => {
    const [categorias, setCategorias] = useState([])
    useEffect(() => {
        const promesaCat = new Promise((res,rej) => {
            res(Categorias);
        });

        promesaCat.then((res) => setCategorias(res))
    }, []);

    return(
        <>
        {categorias.map((categoria) => {
            return(
                <li key={categoria.catId} className="item">
                    <Link className="textItem" to={categoria.ruta}>{categoria.nombre}</Link>
                    
                </li>
            )
        })}
        </>
    )
}

export default ItemLink

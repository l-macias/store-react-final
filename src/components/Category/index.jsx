import React from "react";
import {NavLink} from "react-router-dom"



const Category = ({category}) => {
    return(        
        <NavLink key={category.id} activeClassName="activeClass" className="categoryTag" to={category.address}>{category.title}</NavLink>
    )
}

export default Category



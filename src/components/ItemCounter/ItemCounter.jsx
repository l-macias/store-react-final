import React, { useState } from 'react';


const ItemCounter = ({stock, onAdd}) => {
    
    const [count, setCount] = useState(0)

    const sumar = () => {
        if(count<stock) { //Minimo control de stock - solo hace que no se pueda exceder del stock de cada producto,

            setCount(prevCount => prevCount+1)
            
        } 
    }
    const restar = () => {
        if(count>0){
            setCount(prevCount => prevCount-1)
        }
    }

    return (
        <>
            <div className='detailBtns'>
                <button className='btnCount restar' disabled={count===0} onClick={restar}>-</button>
                <p>{count}</p>
                <button className='btnCount sumar' disabled={count===stock} onClick={sumar}>+</button> 
            </div>
            <div>
                <div className='btnsContainer'>
                    <button className='addToCart' disabled={count===0} onClick={()=> onAdd(count) }>Agregar al Carrito</button> 
                </div> 
            </div>
        </>
    )
}

export { ItemCounter }
import React, { useState } from 'react';


const ItemCounter = ({stock, onAdd}) => {
    
    const [Cant, setCant] = useState(0)

    const sumar = () => {
        if(Cant<stock) { 

            setCant(prevCant => prevCant+1)
            
        } 
    }
    const restar = () => {
        if(Cant>0){
            setCant(prevCant => prevCant-1)
        }
    }

    return (
        <>
            <div className='detailBtns'>
                <button className='btnCant restar' disabled={Cant===0} onClick={restar}>-</button>
                <p>{Cant}</p>
                <button className='btnCant sumar' disabled={Cant===stock} onClick={sumar}>+</button> 
            </div>
            <div>
                <div className='btnsContainer'>
                    <button className='addToCart' disabled={Cant===0} onClick={()=> onAdd(Cant) }>Agregar al Carrito</button> 
                </div> 
            </div>
        </>
    )
}

export { ItemCounter }
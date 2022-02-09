import React, {useContext, useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../../elements/formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';
import { CartContext } from "../../context/CartContext";
import "@firebase/firestore";
import { getFirestore } from "../../firebase";

const Form = () => {
	const [usuario, setUsuario] = useState({campo: '', valido: null});
	const [nombre, setNombre] = useState({campo: '', valido: null});
	const [correo, setCorreo] = useState({campo: '', valido: null});
    const [correo2, setCorreo2] = useState({campo: '', valido: null});
	const [telefono, setTelefono] = useState({campo: '', valido: null});
	const [terminos, setTerminos] = useState(false);
	const [formularioValido, setFormularioValido] = useState(null);

	const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

	const validarCorreo2 = () => {
		if(correo.campo.length > 0){
			if(correo.campo !== correo2.campo){
				setCorreo2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} else {
				setCorreo2((prevState) => {
					return {...prevState, valido: 'true'}
				});
			}
		}
	}

	const onChangeTerminos = (e) => {
		setTerminos(e.target.checked);
	}

    const {cart, total,clear} = useContext(CartContext)
        
        
    

    const handleOnSubmit = () => {
        
        const db = getFirestore()
        

        let guardarFire = {
            Comprador: {usuario:usuario.campo,nombre:nombre.campo,telefono:telefono.campo,correo:correo.campo,},
            Items:{...cart},
            total: total
        }
        db.collection("ordenes").add(guardarFire).then(({id})=>{
            alert(`Tu pedido ha sido generado bajo el código ${id}. `);
         }).catch(err=>{
             alert(err)
         })
        }
    const comprar =()=> {
        
        handleOnSubmit()
        
    }

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			usuario.valido === 'true' &&
			nombre.valido === 'true' &&
			correo.valido === 'true' &&
			correo2.valido === 'true' &&
			telefono.valido === 'true' &&
			terminos
		){
			
            comprar()
            setFormularioValido(true);
            clear()
			setUsuario({campo: '', valido: ''});
			setNombre({campo: '', valido: null});
			setCorreo({campo: '', valido: null});
			setCorreo2({campo: '', valido: 'null'});
			setTelefono({campo: '', valido: null});
            
            
			
		} else {
			setFormularioValido(false);
		}
	}

	return (
		<main> 
			<div className='contenedorCart'>
			<Formulario action="" onSubmit={onSubmit}>
				<Input
					estado={usuario}
					setEstado={setUsuario}
					tipo="text"
					label="Usuario"
					placeholder="Juancarlos69"
					name="usuario"
					leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
					expresionRegular={expresiones.usuario}
                    
				/>
				<Input
					estado={nombre}
					setEstado={setNombre}
                    
					tipo="text"
					label="Nombre"
					placeholder="Juan Carlos"
					name="nombre"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
                    
				/>
				<Input
					estado={correo}
					setEstado={setCorreo}
                    
					tipo="email"
					label="Correo Electrónico"
					placeholder="juanca@comoestas.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
                    
				/>
				<Input
					estado={correo2}
					setEstado={setCorreo2}
                    tipo="email"
					label="Repetir Correo"
					name="correo2"
					leyendaError="Ambos correos deben ser iguales."
					funcion={validarCorreo2}
				/>
				
				<Input
					estado={telefono}
					setEstado={setTelefono}
                    
					tipo="text"
					label="Teléfono"
					placeholder="54934135555"
					name="telefono"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.telefono}
                    
				/>


				<ContenedorTerminos>
					<Label>
						<input 
							type="checkbox"
							name="terminos"
							id="terminos"
							checked={terminos} 
							onChange={onChangeTerminos}
						/>
						Acepto los Terminos y Condiciones
					</Label>
				</ContenedorTerminos>
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor completá el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">FINALIZAR COMPRA</Boton>
					{formularioValido === true && <MensajeExito>El Formulario ha sido enviado de forma exitosa!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
			</div>
		</main>
	);
}

export default Form;
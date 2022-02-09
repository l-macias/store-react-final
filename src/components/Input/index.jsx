import React, { useState } from 'react';
import {Input, Label, GrupoInput, LeyendaError, IconoValidacion} from '../../elements/formulario';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = ({estado,  setEstado,  tipo, label, placeholder, name, leyendaError, expresionRegular, funcion}) => {
	
	
	const [datos, setDatos]= useState({
		usuario:"",
		nombre:"",
		telefono:"",
		correo:"",
	})

	const OnChange = (e) => {
		
		
		setDatos({
            ...datos,
            [e.target.name] : e.target.value
			
    })

		setEstado({...estado, campo: e.target.value})
	
    
	}

	const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(estado.campo)){
				setEstado({...estado, valido: 'true'});
			} else {
				setEstado({...estado, valido: 'false'});
			}
		}

		if(funcion){
			funcion();
		}
	}

	return (
		<div>
			<Label htmlFor={name} valido={estado.valido}>{label}</Label>
			<GrupoInput>
				<Input 
					type={tipo}
					placeholder={placeholder} 
					id={name}
					value={estado.campo}
					onChange={OnChange}
					onKeyUp={validacion}
					onBlur={validacion}
					valido={estado.valido}
				/>
				<IconoValidacion 
					icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
					valido={estado.valido}
				/>
			</GrupoInput>
			<LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
		</div>
	);
}
 
export default ComponenteInput;
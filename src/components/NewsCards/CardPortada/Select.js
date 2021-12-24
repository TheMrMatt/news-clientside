import React from 'react'
import {Container, Titulo, SelectWrap, ButtonsWrapper, PortadaTipo, Edit, SelectOption} from './Elements'

const Select = ({ data, opciones}) => {
    const val = () => {
        const e = document.getElementById(data.id)
        console.log(e.value)
    }
    console.log(data)
    function handleChange(e) {
        console.log(e.target.value)
        
    }

    return (
        <SelectWrap>
            <PortadaTipo>Portada Principal</PortadaTipo>
            <SelectOption name="select" id={data.id} onChange={handleChange}>
                <option value={data.titulo}>{data.titulo}</option>
                {opciones.map( op => <option value={op.titulo}>{op.titulo}</option>)}
            </SelectOption>
            <button onClick={() => val()}>presme</button>
                        
        </SelectWrap>
    )
}

export default Select

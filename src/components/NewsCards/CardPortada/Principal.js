import React, { useState, useContext } from 'react'
import { PortadaContext } from '../../../Store/context/PortadaContext'
import { Container, Titulo, SelectWrap, ButtonsWrapper, PortadaTipo, Edit, SelectOption } from './Elements'




const Principal = ({ data, notas, name }) => {
    const [enable, setEnable] = useState(true)
    const { updatePortada, portadas, loadingP, startLoading } = useContext(PortadaContext)



    const n = data.portada
    const valores = () => {
        startLoading()
        const b = Array.prototype.slice.call(document.getElementsByName(data.portada))
        const values = b.map(val => val.value)

        const filtrado = notas.filter(function (e) {
            return values.indexOf(`${e._id}`) != -1;
        });
        console.log('', filtrado)

        updatePortada(data._id, filtrado, data.portada)
    }
    function handleChange(e) {
        console.log(e.target.value);
        setEnable(false)
    }

    if (loadingP) {
        return <div>Loading...</div>
    } else {
        return (
            <SelectWrap>

                <SelectOption name={name} onChange={handleChange}>
                    <option value={data.id}>{data.titulo}</option>
                    {notas.map(op => <option value={op._id}>{op.titulo}</option>)}
                </SelectOption>
            </SelectWrap>
        )
    }
}

export default Principal

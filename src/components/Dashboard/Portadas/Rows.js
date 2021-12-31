import React, { useState, useContext } from 'react'
import { PortadaContext } from '../../../Store/context/PortadaContext'
import { DeleteIcon, EditarIcon, Line, TableH, TableR } from './Elements'
import { Edit } from '../../NewsCards/CardPortada/Elements'
import Principal from '../../NewsCards/CardPortada/Principal'
const Rows = ({ dato, notas, nota = false }) => {
    const [enable, setEnable] = useState(true)

    const { updatePortada, portadas, loadingP, startLoading } = useContext(PortadaContext)
    let data = JSON.parse(localStorage.getItem('data'));
    const token = data.accessToken;
    const valores = () => {
        startLoading()
        console.log('hola', dato.portada)
        const b = Array.prototype.slice.call(document.getElementsByName(dato.portada))
        const values = b.map(val => val.value)

        const filtrado = notas.filter(function (e) {
            return values.indexOf(`${e._id}`) != -1;
        });
        console.log('asdaw', filtrado)

        updatePortada(dato._id, filtrado, dato.portada, token)
    }

    if (loadingP) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <TableR>
                    <TableH>
                        {dato.portada}
                    </TableH>
                    <TableH>
                        <Principal name={dato.portada} data={dato.principal} notas={notas} />
                    </TableH>
                    {
                        dato.secundario.map(port =>
                            <TableH>
                                <Principal name={dato.portada} data={port} notas={notas} />
                            </TableH>
                        )
                    }
                    <TableH>
                        <Edit onClick={() => valores()}><EditarIcon /></Edit>
                        {
                            nota ? <Edit disabled={enable}><DeleteIcon /></Edit> : <></>
                        }
                    </TableH>

                </TableR>
            </>
        )
    }
}

export default Rows

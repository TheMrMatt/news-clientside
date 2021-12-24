import React, { useState, useContext } from 'react'
import { PortadaContext } from '../../../Store/context/PortadaContext'
import { Line, TableH, TableR } from './Elements'
import { Edit } from '../../NewsCards/CardPortada/Elements'
import Principal from '../../NewsCards/CardPortada/Principal'
const RowsSub = ({ dato, notas, nota = false }) => {
    const [enable, setEnable] = useState(true)

    const { updatePortada, portadas, loadingP, startLoading } = useContext(PortadaContext)

    if (loadingP) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <TableR>
                    <TableH>
                        {dato.subCategoria}
                    </TableH>
                    <TableH>
                        <Principal data={dato.subCatPrincipal} notas={notas} />
                    </TableH>
                    {
                        dato.subCatSecundario.map(port =>
                            <TableH>
                                <Principal data={port} notas={notas} />
                            </TableH>
                        )
                    }
                    <TableH>
                        <Edit disabled={enable}>Editar</Edit>
                        {
                            nota ? <Edit disabled={enable}>Eliminar</Edit> : <></>
                        }
                    </TableH>

                </TableR>
            </>
        )
    }
}

export default RowsSub

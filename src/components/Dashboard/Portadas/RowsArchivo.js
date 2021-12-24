import React, { useState, useContext } from 'react'
import { PortadaContext } from '../../../Store/context/PortadaContext'
import { ButtonWrap, Cat, CategoriaWrapp, Line, SubCat, TableH, TableR } from './Elements'
import { Edit } from '../../NewsCards/CardPortada/Elements'
import Principal from '../../NewsCards/CardPortada/Principal'
import { NotasContext } from '../../../Store/context/NotasContext'
import { useNavigate } from 'react-router-dom'

const RowsArchivo = ({ dato, notas }) => {
    const [enable, setEnable] = useState(true)
    const { deleteNota, startLoading, loading } = useContext(NotasContext)
    let history = useNavigate();

    const goNota = () => {
        history(`/archivo/${dato._id}`, { replace: true })
        startLoading()
    }


    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <>
            <TableR>
                <TableH>
                    {dato.titulo}
                </TableH>
                <TableH>
                    <CategoriaWrapp>
                        <Cat>{dato.categoria}</Cat>
                        {
                            dato.subCategoria === 'undefined' ? null : <SubCat>{dato.subCategoria}</SubCat>
                        }
                    </CategoriaWrapp>

                </TableH>
                <TableH>

                    {dato.fechaDeCreacion}
                </TableH>
                <TableH>
                    <ButtonWrap>

                        <Edit onClick={() => goNota()}>Leer</Edit>
                    </ButtonWrap>

                </TableH>
            </TableR>
        </>
    )
}

export default RowsArchivo

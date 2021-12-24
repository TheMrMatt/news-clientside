import React, { useState, useContext } from 'react'
import { PortadaContext } from '../../../Store/context/PortadaContext'
import { ButtonsWrap, BWrap, Cat, CategoriaWrapp, DeleteIcon, EditarIcon, Line, SubCat, TableH, TableR } from './Elements'
import { Edit } from '../../NewsCards/CardPortada/Elements'
import Principal from '../../NewsCards/CardPortada/Principal'
import { NotasContext } from '../../../Store/context/NotasContext'
import { useNavigate } from 'react-router-dom'
import { BorradorContext } from '../../../Store/context/BorradorContext'

const RowBorrador = ({ dato }) => {
    const [enable, setEnable] = useState(true)
    const { startLoading, loadingB, deleteBorrador } = useContext(BorradorContext)
    let history = useNavigate();

    const edit = () => {
        history(`/borradores/${dato._id}`, { replace: true })
        startLoading()
    }
    if (loadingB) {
        return <div>Loading...</div>
    } else {
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
                        <ButtonsWrap>
                            <BWrap>
                                <Edit onClick={() => edit()}><EditarIcon /></Edit>
                                <Edit onClick={() => deleteBorrador(dato._id)}><DeleteIcon /></Edit>
                            </BWrap>
                        </ButtonsWrap>


                    </TableH>

                </TableR>
            </>
        )
    }
}

export default RowBorrador

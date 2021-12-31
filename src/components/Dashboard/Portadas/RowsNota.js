import React, { useState, useContext } from 'react'
import { PortadaContext } from '../../../Store/context/PortadaContext'
import { ButtonsWrap, BWrap, Cat, CategoriaWrapp, DeleteIcon, EditarIcon, Line, SubCat, TableH, TableR } from './Elements'
import { Edit } from '../../NewsCards/CardPortada/Elements'
import Principal from '../../NewsCards/CardPortada/Principal'
import { NotasContext } from '../../../Store/context/NotasContext'
import { useNavigate } from 'react-router-dom'

const RowsNota = ({ dato, notas }) => {
    const [enable, setEnable] = useState(true)
    const { deleteNota, startLoading, loading } = useContext(NotasContext)
    let history = useNavigate();
    let data = JSON.parse(localStorage.getItem('data'));
    const token = data.accessToken;
    const edit = () => {
        history(`/editar/${dato._id}`, { replace: true })
        startLoading()
    }


    if (loading) {
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
                                <Edit onClick={() => deleteNota(dato._id, token)}><DeleteIcon /></Edit>
                            </BWrap>
                        </ButtonsWrap>


                    </TableH>

                </TableR>
            </>
        )
    }
}

export default RowsNota

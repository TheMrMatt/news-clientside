import React, { useContext } from 'react'
import { Container, Titulo, Categoria, FechaDePublicacion, ButtonsWrapper, Edit, Delete } from './Elements'
import { NotasContext } from '../../../Store/context/NotasContext'

const CardDash = ({ nota }) => {
    const { deleteNota, startLoading } = useContext(NotasContext)

    return (
        <>
            <Container>
                <Titulo>{nota.titulo}</Titulo>
                <Categoria>{nota.categoria}</Categoria>
                <FechaDePublicacion>{nota.fechaDeCreacion}</FechaDePublicacion>
                <ButtonsWrapper>
                    <Edit to={`/dashboard/editar/${nota._id}`} onClick={() => startLoading()}>Edit</Edit>
                    <Delete onClick={() => deleteNota(nota._id)}>Delete</Delete>
                </ButtonsWrapper>
            </Container>
        </>
    )
}

export default CardDash

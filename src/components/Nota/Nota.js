import React from 'react'
import { Autor, Categoria, Container, Contenido, Descripcion, SubCategoria, Texto, Titulo, Wrapper } from './Elements'

const Nota = ({ nota, autor }) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Texto>Titulo</Texto>
                    <Titulo>{nota.titulo}</Titulo>
                    <Texto>Autor</Texto>
                    <Autor>{autor}</Autor>
                    <Texto>Categoria</Texto>
                    <Categoria>{nota.categoria}</Categoria>
                    <Texto>Sub Categoria</Texto>
                    <SubCategoria>{nota.SubCategoria}</SubCategoria>
                    <Texto>Descripcion</Texto>
                    <Descripcion>{nota.descripcion}</Descripcion>
                    <Texto>Contenido</Texto>
                    <Contenido>{nota.contenido}</Contenido>
                </Wrapper>
            </Container>
        </>
    )
}

export default Nota

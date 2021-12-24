import React from 'react'
import PortadaC from '../../NewsCards/PortadaC'

import {Container, Wrapper, Titulo, NotasWrapper} from './UserPublicacionesElements'

const UserPublicaciones = ({notas, user}) => {

    console.log('', notas)

    return (
        <>
            <Container>
                <Wrapper>
                    {user.tipoUsuario === 'Normal' ? <Titulo>Articulos Guardados</Titulo> : <Titulo>Articulos Publicados</Titulo>}
                    <NotasWrapper>
                        {notas.map(nota => <PortadaC key={nota._id} nota={nota}/>)}
                    </NotasWrapper>
                    
                </Wrapper>
            </Container>
        </>
    )
}

export default UserPublicaciones

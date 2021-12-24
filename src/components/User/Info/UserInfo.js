import React from 'react'
import {Container, Wrapper, NombreUsuario, Descripcion} from './UserInfoElements'


const UserInfo = ({user}) => {
    
    return (
        <>
            <Container>
                <Wrapper>
                    <NombreUsuario>{user.nombreYapellido}</NombreUsuario>
                    <Descripcion>{user.descripcion}</Descripcion>
                </Wrapper>
            </Container>
        </>
    )
}

export default UserInfo

import React from 'react'
import LoadingScreen from '../../pages/Especials/LoadingScreen';
import { Container, Wrapper, Notificaciones, Title, Separador, Usuario, NombreUsuario, PerfilUsuario, Wrap } from './Elements'


const Header = ({ user, cat, loading, pic }) => {
    console.log(user);
    if (loading) {
        return <LoadingScreen />
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>{cat}</Title>
                    <Wrap>

                        <Separador />
                        <Usuario>
                            <NombreUsuario>{user.nombreYapellido}</NombreUsuario>
                            {
                                user ? <PerfilUsuario src={user.imagenPerfil[0].url} /> : null
                            }

                        </Usuario>
                    </Wrap>
                </Wrapper>
            </Container>
        </>
    )
}

export default Header

// <PerfilUsuario src={user.imagenPerfil[0].url} />
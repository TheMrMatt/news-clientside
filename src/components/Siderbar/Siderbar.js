import React, { useContext, useEffect } from 'react'
import { Container, Wrapper, Logo, Wrap, Opcion, Logout, } from './Elements'
import { UserContext } from '../../Store/context/UserContext'
import { useNavigate } from 'react-router-dom'
import { createBrowserHistory } from "history";

const Siderbar = () => {
    const { user, auth, logout, isLoggedIn, startLoading } = useContext(UserContext)
    let history = useNavigate();
    let h = createBrowserHistory();
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            console.log('user ', foundUser)
            isLoggedIn(foundUser)
        }
    }, []);

    const cerrarSesion = () => {
        startLoading();
        logout(() => history('/', { replace: true }))
    }

    console.log(user);


    if (h.location.pathname === '/') {
        return null
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <Logo to={"/"}>Contexto</Logo>
                    <Wrap>
                        <Opcion to='/publicaciones' focus exact='true'>Publicaciones</Opcion>
                        <Opcion to='/archivo' exact='true'>Archivo</Opcion>
                        <Opcion to='/publicar' exact='true'>Publicar</Opcion>
                        <Opcion to='/portadas' exact='true'>Portadas</Opcion>
                        <Opcion to='/borradores' exact='true'>Borradores</Opcion>
                        {
                            auth === false ? <div></div> : <Logout onClick={() => cerrarSesion()} exact='true'>Log out</Logout>
                        }

                    </Wrap>

                </Wrapper>
            </Container>
        </>
    )
}

export default Siderbar

import React from 'react'
import {Container, ImgOverlay, ImgPortada, FotoPerfil} from './UserElements'

const UserPortada = ({user}) => {


    return (
        <>
            <Container>
                   
                    <ImgOverlay>
                        <ImgPortada src={user.imagenPortada[0].url}/>
                        <FotoPerfil src={user.imagenPerfil[0].url}/>
                    </ImgOverlay>
                   
            </Container>
        </>
    )
}

export default UserPortada

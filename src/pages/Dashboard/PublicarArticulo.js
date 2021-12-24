import React, { useContext } from 'react'
import Header from '../../components/Dashboard/Header'
import Publicar from '../../components/Forms/Publicar/Publicar'
import { UserContext } from '../../Store/context/UserContext'


const PublicarArticulo = () => {
    const { user, loadingUser } = useContext(UserContext)

    return (
        <>
            <Header user={user} cat='Publicar' loading={loadingUser} />
            <Publicar />
        </>
    )
}

export default PublicarArticulo

import React, { useContext, useEffect } from 'react'
import Header from '../../components/Dashboard/Header'
import Publicaciones from '../../components/Publicaciones/Publicaciones'
import { UserContext } from '../../Store/context/UserContext'
import { NotasContext } from '../../Store/context/NotasContext'
import LoadingScreen from '../Especials/LoadingScreen'

const PublicacionesPage = () => {
    const { user, loadingUser } = useContext(UserContext)
    const { notas, populateNotas, loading } = useContext(NotasContext)

    useEffect(() => {
        populateNotas()
    }, [loading])


    console.log(user);
    if (loading) {
        return <LoadingScreen />
    } else {
        return (
            <>
                <Header user={user} cat='Publicaciones' loading={loadingUser} />
                <Publicaciones notas={notas.filter(nota => nota.autor === user._id)} />
            </>
        )
    }
}

export default PublicacionesPage

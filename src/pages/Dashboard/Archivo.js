import React, { useContext, useEffect } from 'react'
import Header from '../../components/Dashboard/Header'
import ArchivoPublicaciones from '../../components/Publicaciones/ArchivoPublicaciones'
import { UserContext } from '../../Store/context/UserContext'
import { NotasContext } from '../../Store/context/NotasContext'
import LoadingScreen from '../Especials/LoadingScreen'
import Buscador from '../../components/Buscador/Buscador'


const Archivo = () => {
    const { user, loadingUser } = useContext(UserContext)
    const { notas, populateNotas, loading } = useContext(NotasContext)

    useEffect(() => {
        populateNotas()
    }, [loading])

    console.log(user);
    if (loading) {
        return <LoadingScreen />
    } if (loadingUser) {
        return <LoadingScreen />
    }
    return (
        <>
            <Header user={user} cat='Archivo' loading={loadingUser} />

            <ArchivoPublicaciones notas={notas} />
        </>
    )
}

export default Archivo

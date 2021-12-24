import React, { useContext, useEffect } from 'react'
import Header from '../../components/Dashboard/Header'
import { UserContext } from '../../Store/context/UserContext'
import { NotasContext } from '../../Store/context/NotasContext'
import LoadingScreen from '../Especials/LoadingScreen'
import Nota from '../../components/Nota/Nota'
import { useParams } from 'react-router';

const NotaArchivo = () => {
    const { user, userSearch, getUser, loadingUser } = useContext(UserContext)
    const { nota, populateNota, loading } = useContext(NotasContext)
    const camp = useParams();
    useEffect(() => {
        populateNota(camp.id)
    }, [loading])
    useEffect(() => {
        if (nota.autor != undefined) {
            getUser(nota.autor)
        }

    }, [loading])
    console.log(nota);
    if (loading) {
        return <LoadingScreen />
    }
    return (
        <>
            <Header user={user} cat='Nota' loading={loadingUser} />

            <Nota nota={nota} autor={userSearch.nombreYapellido} />
        </>
    )
}

export default NotaArchivo

import React, { useContext, useRef, useEffect } from 'react'
import Header from '../../components/Dashboard/Header'
import { UserContext } from '../../Store/context/UserContext'
import { NotasContext } from '../../Store/context/NotasContext'
import Publicaciones from '../../components/Publicaciones/Publicaciones'
import { useParams } from 'react-router';
import LoadingScreen from '../Especials/LoadingScreen'
import { BorradorContext } from '../../Store/context/BorradorContext'
import Borradores from '../../components/Publicaciones/Borradores'

const Borrador = () => {
    const { user, loadingUser } = useContext(UserContext)
    const { getBorrador, notas, loadingB } = useContext(BorradorContext)
    useEffect(() => {
        getBorrador()
    }, [loadingB])


    console.log(notas);
    if (loadingB) {
        return <LoadingScreen />
    } if (loadingUser) {
        return <LoadingScreen />
    } else {
        return (
            <>
                <Header user={user} cat='Borrador' loading={loadingUser} />
                <Borradores notas={notas.filter(nota => nota.autor === user._id)} />
            </>
        )
    }

}

export default Borrador

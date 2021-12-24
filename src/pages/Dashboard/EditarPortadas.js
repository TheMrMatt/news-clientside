import React, { useContext, useEffect } from 'react'
import Header from '../../components/Dashboard/Header'
import { UserContext } from '../../Store/context/UserContext'
import { NotasContext } from '../../Store/context/NotasContext'
import { PortadaContext } from '../../Store/context/PortadaContext'
import Portadas from '../../components/Dashboard/Portadas/Portadas'
import LoadingScreen from '../Especials/LoadingScreen'

const EditarPortadas = () => {
    const { user, loadingUser } = useContext(UserContext)
    const { notas } = useContext(NotasContext)
    const { portadas, loadingP, getPortadas } = useContext(PortadaContext)

    useEffect(() => {
        getPortadas()
    }, [loadingP])

    if (loadingP) {
        return <LoadingScreen />
    } else {
        return (
            <>
                <Header user={user} cat='Editar portadas' loading={loadingUser} />
                <Portadas portada={portadas} notas={notas} loading={loadingP} />
            </>
        )
    }
}

export default EditarPortadas

import React, { useContext, useRef, useEffect } from 'react'
import Header from '../../components/Dashboard/Header'
import { UserContext } from '../../Store/context/UserContext'
import { NotasContext } from '../../Store/context/NotasContext'
import EditarNota from '../../components/Forms/Editar/EditarNota'
import { useParams } from 'react-router';
import LoadingScreen from '../Especials/LoadingScreen'
import { BorradorContext } from '../../Store/context/BorradorContext'
import PublicarBorrador from '../../components/Forms/Publicar/PublicarBorrador'

const EditarBorrador = () => {
    useEffect(() => {
        populateBorrador(camp.id)
    }, [])

    const { user, loadingUser } = useContext(UserContext)
    const { nota, loadingB, populateBorrador } = useContext(BorradorContext)



    const camp = useParams();
    console.log(user);
    if (loadingB) {
        return <LoadingScreen />
    } else {
        return (
            <>
                <Header user={user} cat='Editar Borrador' loading={loadingUser} />
                <PublicarBorrador nota={nota} />
            </>
        )
    }
}

export default EditarBorrador

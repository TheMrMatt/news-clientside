import React, { useContext, useRef, useEffect } from 'react'
import Header from '../../components/Dashboard/Header'
import { UserContext } from '../../Store/context/UserContext'
import { NotasContext } from '../../Store/context/NotasContext'
import EditarNota from '../../components/Forms/Editar/EditarNota'
import { useParams } from 'react-router';
import LoadingScreen from '../Especials/LoadingScreen'

const EditarArticulo = () => {
    let data = JSON.parse(localStorage.getItem('data'));
    const token = data.accessToken;
    useEffect(() => {
        populateNota(camp.id, token)
    }, [])

    const { user, loadingUser } = useContext(UserContext)
    const { nota, populateNota, notas, loading } = useContext(NotasContext)




    const camp = useParams();

    if (loadingUser) {
        return <LoadingScreen />
    } else if (loading) {
        return <LoadingScreen />
    } else {
        return (
            <>
                <Header user={user} cat='Editar Nota' loading={loadingUser} />
                <EditarNota nota={nota} />
            </>
        )
    }
}
//
export default EditarArticulo

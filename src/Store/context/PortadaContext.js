import React, { createContext, useReducer } from 'react';
import PortadaReducer from '../Reducers/PortadaReducers';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = {
    loadingP: true,
    portadas: [

    ],
    portada: {},
    error: '',

}

export const PortadaContext = createContext(initialState)

export const PortadaProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PortadaReducer, initialState)

    async function getPortadas() {
        try {
            const res = await axios.get('https://news-server-context.herokuapp.com/portadas')

            dispatch({
                type: 'GET_PORTADAS',
                payload: res.data.data
            });
        } catch (err) {

        }
    }

    async function updatePortada(id, n, oldPortada) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        let formato = [];
        for (let m of n) {
            let i = {
                id: m._id,
                img: m.img[0].url,
                titulo: m.titulo,
                descripcion: m.descripcion,
                categoria: m.categoria,
                subCategoria: m.subCategoria
            }
            console.log(m)
            formato.push(i)
        }
        formato.reverse();

        const principal = formato[0];
        const secundario = formato.filter(port => port.id != principal.id)
        console.log('prin', id)
        const newP = {
            id,
            portada: oldPortada,
            principal,
            secundario
        }
        try {
            const res = await axios.put(`https://news-server-context.herokuapp.com/${id}`, { ...newP }, config);

            dispatch({
                type: 'UPDATE_PORTADA',
                payload: res.data.data
            });
            toast.success('Portada editada con exito', { position: toast.POSITION.TOP_RIGHT, autoClose: false })
        } catch (err) {
            dispatch({
                type: 'PORTADA_ERROR',
                payload: err
            });
            console.log(err)
            toast.error(err, { position: toast.POSITION.TOP_RIGHT, autoClose: false })
        }
    }

    function startLoading() {
        console.log('cargando...')
        dispatch({
            type: 'START_LOADING'
        });
    }

    return (
        <PortadaContext.Provider value={{
            portadas: state.portadas,
            loadingP: state.loadingP,
            portada: state.portada,
            updatePortada,
            getPortadas,
            startLoading
        }}>
            {children}
        </PortadaContext.Provider>
    )
}
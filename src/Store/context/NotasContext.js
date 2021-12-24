import React, { createContext, useReducer } from 'react'
import NotasReducer from '../Reducers/NotasReducers'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    nota: {

    },
    loading: true,
    notas: [

    ],

    notasA: [

    ],
    masRecientes: [

    ],
    error: '',

}
//va a fallar los mas recientes seguramente, no hay acciones ni funciones que lo llenen
export const NotasContext = createContext(initialState)

export const NotasProvider = ({ children }) => {
    const [state, dispatch] = useReducer(NotasReducer, initialState)

    async function populateNota(id, notas) {

        try {
            const res = await axios.get(`https://news-server-context.herokuapp.com/nota/${id}`);
            console.log(res)

            dispatch({
                type: 'GET_NOTA',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'NOTA_ERROR',
                payload: err.response.data.error
            });
            toast.error(err.response.data.error, { position: toast.POSITION.TOP_RIGHT, autoClose: false })
        }

    }

    async function populateNotas() {

        //const notasAutor = initialState.notas.filter(nota => nota.autor === autor);
        //usar esta accion para llamar a todas las notas, filtrar desde el front 

        try {
            const res = await axios.get('https://news-server-context.herokuapp.com/nota/all')

            dispatch({
                type: 'GET_NOTAS',
                payload: res.data.data
            });
        } catch (err) {

            dispatch({
                type: 'NOTA_ERROR',
                payload: err.response.data.error
            });
        }

    }

    async function deleteNota(id) {


        try {
            await axios.delete(`https://news-server-context.herokuapp.com/nota/${id}`)
            dispatch({
                type: 'DELETE_NOTA',
                payload: id
            });
            toast.success('Nota eliminada', { position: toast.POSITION.TOP_RIGHT, autoClose: false })
        } catch (err) {
            dispatch({
                type: 'NOTA_ERROR',
                payload: err.response.data.error
            });
            toast.error(err.response.data.error, { position: toast.POSITION.TOP_RIGHT, autoClose: false })
        }

    }

    async function addNota(nota, redirect) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            body: nota,
        }
        console.log(nota);
        try {
            const res = await axios.post(`https://news-server-context.herokuapp.com/nota/all`, nota, config);

            dispatch({
                type: 'ADD_NOTA',
                payload: res.data.data
            });
            toast.success('Nota Publicada', { position: toast.POSITION.TOP_RIGHT, autoClose: false })
            redirect()
        } catch (err) {
            dispatch({
                type: 'NOTA_ERROR',
                payload: err.response.data.error
            });
            toast.error(err.response.data.error, { position: toast.POSITION.TOP_RIGHT, autoClose: false })
        }
    }

    async function updateNota(id, nota, redirect) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            body: nota,
        }

        try {

            for (var value of nota.values()) {
                console.log(value);
            }
            const res = await axios.put(`https://news-server-context.herokuapp.com/nota/${id}`, nota, config)
            console.log('response', res.data.data);
            redirect()
            toast.success('La nota fue editada con exito', { position: toast.POSITION.TOP_RIGHT, autoClose: false })

            dispatch({
                type: 'UPDATE_NOTA',
                payload: res.data.data
            });

        } catch (err) {
            dispatch({
                type: 'NOTA_ERROR',
                payload: err.response
            });
            console.log('error', err.response);
            toast.error(err.response, { position: toast.POSITION.TOP_RIGHT, autoClose: false })
        }
    }

    async function MasRecientesNotas() {
        try {


            const res = await axios.get(`https://news-server-context.herokuapp.com/nota/last`)

            dispatch({
                type: 'GET_RECIENTES',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'NOTA_ERROR',
                payload: err.response.data.error
            });
            toast.error(err.response.data.error, { position: toast.POSITION.TOP_RIGHT, autoClose: false })
        }
    }

    function startLoading() {
        dispatch({
            type: 'START_LOADING'
        });
    }


    return (
        <NotasContext.Provider value={{
            nota: state.nota,
            notas: state.notas,
            notasA: state.notasA,
            loading: state.loading,
            masRecientes: state.masRecientes,
            populateNota,
            populateNotas,
            addNota,
            deleteNota,
            startLoading,
            updateNota,
            MasRecientesNotas
        }}>
            {children}
        </NotasContext.Provider>
    )
}
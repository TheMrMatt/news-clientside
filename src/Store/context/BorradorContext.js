import React, { createContext, useReducer } from 'react'
import BorradorReducer from '../Reducers/BorradorReducers'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    nota: {

    },
    loadingB: true,
    notas: [

    ],

    notasA: [

    ],
    masRecientes: [

    ],
    error: '',

}
//va a fallar los mas recientes seguramente, no hay acciones ni funciones que lo llenen
export const BorradorContext = createContext(initialState)

export const BorradorProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BorradorReducer, initialState)

    async function populateBorrador(id) {

        try {
            const res = await axios.get(`https://news-server-context.herokuapp.com/borrador/${id}`);
            console.log(res)

            dispatch({
                type: 'GET_B',
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

    async function getBorrador() {

        //const notasAutor = initialState.notas.filter(nota => nota.autor === autor);
        //usar esta accion para llamar a todas las notas, filtrar desde el front 

        try {
            const res = await axios.get('https://news-server-context.herokuapp.com/borrador/all')

            dispatch({
                type: 'GET_BORRADOR',
                payload: res.data.data
            });
        } catch (err) {

            dispatch({
                type: 'NOTA_ERROR',
                payload: err.response.data.error
            });
        }

    }

    async function updateBorrador(id, nota, redirect) {
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
            const res = await axios.put(`https://news-server-context.herokuapp.com/borrador/${id}`, nota, config)
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


    async function deleteBorrador(id) {


        try {
            await axios.delete(`https://news-server-context.herokuapp.com/borrador/${id}`)
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

    async function addBorrador(nota, redirect) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            body: nota,
        }

        try {
            const res = await axios.post(`https://news-server-context.herokuapp.com/borrador`, nota, config);

            dispatch({
                type: 'ADD_BORRADOR',
                payload: res.data.data
            });
            redirect()
            toast.success('Nota al borrador', { position: toast.POSITION.TOP_RIGHT, autoClose: false })

        } catch (err) {
            console.log(err);
            dispatch({
                type: 'NOTA_ERROR',
                payload: err
            });
            toast.error(err, { position: toast.POSITION.TOP_RIGHT, autoClose: false })
        }
    }



    function startLoading() {
        dispatch({
            type: 'START_LOADING'
        });
    }


    return (
        <BorradorContext.Provider value={{
            nota: state.nota,
            notas: state.notas,
            notasA: state.notasA,
            loadingB: state.loadingB,
            masRecientes: state.masRecientes,
            populateBorrador,
            getBorrador,
            addBorrador,
            updateBorrador,
            deleteBorrador,
            startLoading,
        }}>
            {children}
        </BorradorContext.Provider>
    )
}
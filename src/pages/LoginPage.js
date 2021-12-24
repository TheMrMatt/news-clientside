import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Store/context/UserContext'
import { useNavigate, Navigate } from 'react-router-dom'
import Login from '../components/Forms/Login/Login'
import LoadingScreen from './Especials/LoadingScreen'


const LoginPage = () => {
    const { user, auth, loadingUser, isLoggedIn } = useContext(UserContext)
    let history = useNavigate();
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            console.log('user ', foundUser)
            isLoggedIn(foundUser)

        }
    }, []);

    if (loadingUser) {
        return <LoadingScreen />
    }
    return (
        <>
            {
                auth && <Navigate to="/publicaciones" replace={true} />
            }
            <Login />
        </>
    )
}

export default LoginPage
import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Siderbar from './components/Siderbar/Siderbar';
import { NotasProvider } from './Store/context/NotasContext';
import { PortadaProvider } from './Store/context/PortadaContext';
import { UserProvider, UserContext } from './Store/context/UserContext';
import EditarArticulo from './pages/Dashboard/EditarArticulo';
import EditarPortadas from './pages/Dashboard/EditarPortadas';
import PublicacionesPage from './pages/Dashboard/PublicacionesPage';
import PublicarArticulo from './pages/Dashboard/PublicarArticulo';
import { ToastContainer, toast } from 'react-toastify';
import LoadingScreen from './pages/Especials/LoadingScreen';
import ErrorScreen from './pages/Especials/ErrorScreen';
import LoginPage from './pages/LoginPage';
import { BorradorProvider } from './Store/context/BorradorContext';
import Borrador from './pages/Dashboard/Borrador';
import EditarBorrador from './pages/Dashboard/EditarBorrador';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { createBrowserHistory } from "history";
import Archivo from './pages/Dashboard/Archivo';
import NotaArchivo from './pages/Dashboard/NotaArchivo';

function App() {
  const { user, auth, isLoggedIn, loadingUser } = useContext(UserContext)



  /*useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log('user ', foundUser)
      isLoggedIn(foundUser);
    }
  }, []);*/

  let history = createBrowserHistory();
  useEffect(() => {
    console.log('path', history.location.pathname);
  }, [history.location.pathname]);



  return (
    <NotasProvider>
      <UserProvider>
        <PortadaProvider>
          <BorradorProvider>

            <Siderbar />
            <Routes>

              <Route exact path="/" element={<LoginPage />} />
              <Route exact path="/publicar" element={<ProtectedRoute><PublicarArticulo /></ProtectedRoute>} />
              <Route path="/editar/:id" element={<ProtectedRoute><EditarArticulo /></ProtectedRoute>} />
              <Route exact path="/publicaciones" element={<ProtectedRoute><PublicacionesPage /></ProtectedRoute>} />
              <Route exact path="/archivo" element={<ProtectedRoute><Archivo /></ProtectedRoute>} />
              <Route exact path="/archivo/:id" element={<ProtectedRoute><NotaArchivo /></ProtectedRoute>} />
              <Route exact path="/portadas" element={<ProtectedRoute><EditarPortadas /></ProtectedRoute>} />
              <Route exact path="/borradores" element={<ProtectedRoute><Borrador /></ProtectedRoute>} />
              <Route exact path="/borradores/:id" element={<ProtectedRoute><EditarBorrador /></ProtectedRoute>} />
              <Route element={<ErrorScreen />} />


            </Routes>
            <ToastContainer
              position="top-right"
              autoClose={false}
              hideProgressBar={false}
              newestOnTop={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </BorradorProvider>
        </PortadaProvider>
      </UserProvider>
    </NotasProvider>

  );

}


export default App;

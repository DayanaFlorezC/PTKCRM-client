import { useState } from 'react'

import './App.css'

import Login from './components/Login/page'
import Sidebar from './components/Sidebar/page'
import Users from './pages/Users/page'
import Perfil from './pages/Perfil/page'
import Requests from './pages/Requests/page'

import { useAuth, AuthProvider } from './context/AuthContext';

function AppContent() {

  const { user, currentView } = useAuth();

  if (!user) return <div className='container-singIn'>
    <Login />
  </div>

  return (
    <>
      <div className='app-container'>
        <Sidebar />
        <div className='main-content'>
          <div className='header-content'>
            <h1>{currentView}</h1>
          </div>
          <div className='pages-content'>
            {
              user && (
                currentView === 'Usuarios' ? <Users /> :
                  currentView === 'Perfil' ? <Perfil /> :
                    currentView === 'Solicitudes' ? <Requests /> :
                      <div>Selecciona una vista</div>
              )
            }
          </div>
        </div>
      </div>


    </>
  )

}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App

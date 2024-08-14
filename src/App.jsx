import {  Suspense, lazy } from 'react';

import './App.css'

const Login = lazy(() => import('./components/Login/page'));
const Sidebar = lazy(() => import('./components/Sidebar/page'));
const Users = lazy(() => import('./pages/Users/page'));
const Perfil = lazy(() => import('./pages/Perfil/page'));
const Requests = lazy(() => import('./pages/Requests/page'));

import { useAuth, AuthProvider } from './context/AuthContext';

function AppContent() {

  const { user, currentView } = useAuth();

  if (!user) return <div className='container-singIn'>
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
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
                <Suspense fallback={<div>Loading content...</div>}>{
                  currentView === 'Usuarios' ? <Users /> :
                    currentView === 'Perfil' ? <Perfil /> :
                      currentView === 'Solicitudes' ? <Requests /> :
                        <div>Selecciona una vista</div>
                }
                </Suspense>
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

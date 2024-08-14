import { useAuth } from '../../context/AuthContext';

import './style.css'
import { FiLogOut } from "react-icons/fi";

function Sidebar() {

    const { user, logout, currentView, setView } = useAuth();

    const handleViewChange = (view) => {
        setView(view);
    }

    const handleLogout = () => {
        logout()
    }

    return <>
        <div className='sidebar'>
            <div className='sidebar-header'>
                <h2>Menú principal</h2>
            </div>
            <div className='sidebar-content'>
                {
                    user.rol === 'admin' && <ul className={currentView === 'Usuarios' ? 'view-selected' : 'view'} onClick={() => handleViewChange('Usuarios')}>
                        Usuarios
                    </ul>
                }
                <ul className={currentView === 'Solicitudes' ? 'view-selected' : 'view'} onClick={() => handleViewChange('Solicitudes')}>
                    Solicitudes
                </ul>
                <ul className={currentView === 'Perfil' ? 'view-selected' : 'view'} onClick={() => handleViewChange('Perfil')}>
                    Perfil
                </ul>
            </div>
            <div className='sidebar-fotter'>
                <FiLogOut className='btn-sidebarft' onClick={() => handleLogout()} />
            </div>

        </div>

    </>

}

export default Sidebar
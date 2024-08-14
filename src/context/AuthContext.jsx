import React, { createContext, useState, useContext } from 'react';


const AuthContext = createContext();

export function AuthProvider({children}) {

    const [user, setUser] = useState(null)

    const [token, setToken] = useState(null)

    const [currentView, setCurrentView] = useState('Perfil');

    const login = (userData) => {
        setUser(userData.user);
        setToken(userData.token)

        return true
    };

    const logout = () => {
        setUser(null);
    };

     // Función para cambiar la vista actual
     const setView = (view) => {
        setCurrentView(view);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, setView, currentView }}>
            {children}
        </AuthContext.Provider>
    );
    
}

export const useAuth = () => {
    return useContext(AuthContext);
};


import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsuario(user);
            } else {
                setUsuario(null);
            }
            setCargando(false);
        });
    }, []);

    if (cargando) {
        return <div>Cargando...</div>; // O un componente de carga
    }

    return usuario ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

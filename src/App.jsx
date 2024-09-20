import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ReservaForm from './components/ReservaForm';
import ReservaList from './components/ReservaList';
import CancelReserva from './components/CancelReserva';
import "./styles/App.css"
function App() {
    const [view, setView] = useState('nueva');
    const [reservas, setReservas] = useState([]);

    
    useEffect(() => {
        const storedReservas = JSON.parse(localStorage.getItem('reservas'));
        if (storedReservas) {
            setReservas(storedReservas);
        }
    }, []);

    
    useEffect(() => {
        localStorage.setItem('reservas', JSON.stringify(reservas));
    }, [reservas]);

    const addReserva = (reserva) => {
        setReservas([...reservas, reserva]);
    };

    const cancelReserva = (id) => {
        setReservas(reservas.filter(reserva => reserva.id !== parseInt(id)));
    };
    

    return (
        <div className="app-layout">
            <Sidebar setView={setView} />

            <main className="content">
                <h1 className='unic'>Sistema de Reservas de Hotel</h1>
                
                {view === 'nueva' && <ReservaForm addReserva={addReserva} reservas={reservas} />}
                {view === 'mostrar' && <ReservaList reservas={reservas} />}
                {view === 'cancelar' && <CancelReserva cancelReserva={cancelReserva} />}
            </main>
        </div>
    );
}

export default App;

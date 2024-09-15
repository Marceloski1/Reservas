import React from 'react';
import '../assets/style.css'

const Sidebar = ({ setView }) => {
    return (
        <aside className="sidebar">
            <h2 className='opcion'>Opciones</h2>
            <ul>
                <li>
                    <button onClick={() => setView('nueva')}>Nueva Reserva</button>
                </li>
                <li>
                    <button onClick={() => setView('mostrar')}>Mostrar Reservas</button>
                </li>
                <li>
                    <button onClick={() => setView('cancelar')}>Cancelar Reserva</button>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;

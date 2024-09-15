import { useState } from 'react';

const CancelReserva = ({ cancelReserva }) => {
    const [numeroHabitacion, setNumeroHabitacion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        cancelReserva(numeroHabitacion);
        alert('Reserva cancelada con éxito');
        setNumeroHabitacion('');  // Reset form
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Número de Habitación:</label>
            <input type="number" value={numeroHabitacion} onChange={(e) => setNumeroHabitacion(e.target.value)} required />
            <button type="submit">Cancelar</button>
        </form>
    );
};

export default CancelReserva;

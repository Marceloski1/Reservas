import { useState } from 'react';
import { Reserva } from '../classes/Reserva';

const ReservaForm = ({ addReserva, reservas }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [numeroHabitacion, setNumeroHabitacion] = useState('');
    const [fechaEntrada, setFechaEntrada] = useState('');
    const [fechaSalida, setFechaSalida] = useState('');

    const validarFecha = (entrada, salida) => {
        const fechaIni = new Date(entrada);
        const fechaFin = new Date(salida);
        return fechaIni <= fechaFin;
    };

    const isRoomAvailable = (numero, entrada, salida) => {
        const fechaIni = new Date(entrada);
        const fechaFin = new Date(salida);

        return !reservas.some(reserva => {
            if (reserva.numeroHabitacion === numero) {
                const reservaEntrada = new Date(reserva.fechaEntrada);
                const reservaSalida = new Date(reserva.fechaSalida);
                return (
                    (fechaIni >= reservaEntrada && fechaIni <= reservaSalida) ||
                    (fechaFin >= reservaEntrada && fechaFin <= reservaSalida) ||
                    (fechaIni <= reservaEntrada && fechaFin >= reservaSalida)
                );
            }
            return false;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const numeroHabitacionInt = parseInt(numeroHabitacion);

        if (numeroHabitacionInt < 1 || numeroHabitacionInt > 100) {
            alert('El número de habitación debe estar entre 1 y 100.');
            return;
        }

        if (!validarFecha(fechaEntrada, fechaSalida)) {
            alert('La fecha de entrada no puede ser mayor que la fecha de salida.');
            return;
        }

        if (!isRoomAvailable(numeroHabitacionInt, fechaEntrada, fechaSalida)) {
            alert('La habitación ya está reservada en el rango de fechas seleccionadas.');
            return;
        }

        const nuevaReserva = new Reserva(nombre, apellido, numeroHabitacionInt, fechaEntrada, fechaSalida);
        addReserva(nuevaReserva);
        alert('Reserva realizada con éxito');

        setNombre('');
        setApellido('');
        setNumeroHabitacion('');
        setFechaEntrada('');
        setFechaSalida('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            
            <label>Apellido:</label>
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
            
            <label>Número de Habitación:</label>
            <input type="number" value={numeroHabitacion} onChange={(e) => setNumeroHabitacion(e.target.value)} required />
            
            <label>Fecha de Entrada:</label>
            <input type="date" value={fechaEntrada} onChange={(e) => setFechaEntrada(e.target.value)} required />
            
            <label>Fecha de Salida:</label>
            <input type="date" value={fechaSalida} onChange={(e) => setFechaSalida(e.target.value)} required />
            
            <button type="submit">Reservar</button>
        </form>
    );
};

export default ReservaForm;

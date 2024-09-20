import useFormState from './utils/MyState';  
import useReservaValidation from './utils/ReservValidation';  
import { Reserva } from '../classes/Reserva';  
import { useState } from 'react';  
import "../styles/ReservaForm.css";  
import { useEffect } from 'react';  

const ReservaForm = ({ addReserva, reservas }) => {  
    const initialFormState = {  
        nombre: '',  
        apellido: '',  
        numeroHabitacion: '',  
        fechaEntrada: '',  
        fechaSalida: ''  
    };  

    const [formState, handleChange, resetForm] = useFormState(initialFormState);  
    const [ultimoId, setUltimoId] = useState(() => {  
        const idStorage = localStorage.getItem('ultimoId');  
        return idStorage ? parseInt(idStorage) : 0;  
    });  

    const { nombre, apellido, numeroHabitacion, fechaEntrada, fechaSalida } = formState;  
    const { validarFecha, isRoomAvailable,validarFechaActual } = useReservaValidation(reservas);  
   
    const handleSubmit = (e) => {  
        e.preventDefault();  
        const numeroHabitacionInt = parseInt(numeroHabitacion);  

        try{  
        if (numeroHabitacionInt < 1 || numeroHabitacionInt > 100) {  
            throw new Error('El número de habitación debe estar entre 1 y 100.');  
        }  
        
        if(!validarFechaActual(fechaEntrada) && !validarFechaActual(fechaSalida)){  
            throw new Error('La fecha de entrada y fecha de salida  no pueden ser menor a la fecha actual.');  
        }  
        if (!validarFechaActual(fechaEntrada)) {  
           throw new Error('La fecha de entrada  no puede ser menor a la fecha actual.');  
        }  
        if(!validarFechaActual(fechaSalida)){  
            throw new Error('La fecha de salida no puede ser menor a la fecha actual.');  
        }  

        if (!validarFecha(fechaEntrada, fechaSalida)) {  
            throw new Error('La fecha de entrada no puede ser mayor que la fecha de salida.');  
        }  

        if (!isRoomAvailable(numeroHabitacionInt, fechaEntrada, fechaSalida)) {  
            throw new Error('La habitación ya está reservada en el rango de fechas seleccionadas.');  
        }  

        const nuevoId = ultimoId + 1;  
        setUltimoId(nuevoId);  
        localStorage.setItem('ultimoId', nuevoId.toString());  

        const nuevaReserva = new Reserva(nuevoId, nombre, apellido, numeroHabitacionInt, fechaEntrada, fechaSalida);  
        addReserva(nuevaReserva);  
        alert('Reserva realizada con éxito');  
        resetForm();  
    }catch (e) {  
        alert(e.message);  
    }  
    };  

    useEffect(() => {  
        localStorage.setItem('ultimoId', ultimoId.toString());  
    }, [ultimoId]);  

    return (  
        <form onSubmit={handleSubmit} className="reserva-form">  
            <div className="form-for-content">  
                <div className="form-content">  
                    <label>Nombre:</label>  
                    <input  
                        type="text"  
                        name="nombre"  
                        value={nombre}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  

                <div className="form-content">  
                    <label>Apellido:</label>  
                    <input  
                        type="text"  
                        name="apellido"  
                        value={apellido}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  
            </div>  

            <div className="form-content other">  
                <label>Número de Habitación:</label>  
                <input  
                    type="number"  
                    name="numeroHabitacion"  
                    value={numeroHabitacion}  
                    onChange={handleChange}  
                    required  
                    min="1"  
                    max="100"  
                />  
            </div>  

            <div className="form-for-content">  
                <div className="form-content">  
                    <label>Fecha de Entrada:</label>  
                    <input  
                        type="date"  
                        name="fechaEntrada"  
                        value={fechaEntrada}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  

                <div className="form-content">  
                    <label>Fecha de Salida:</label>  
                    <input  
                        type="date"  
                        name="fechaSalida"  
                        value={fechaSalida}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  
            </div>  

            <button type="submit">Reservar</button>  
        </form>  
    );  
};  

export default ReservaForm;
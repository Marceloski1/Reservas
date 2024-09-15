import { Persona } from './Persona';

export class Reserva extends Persona {
    constructor(nombre, apellido, numeroHabitacion, fechaEntrada, fechaSalida) {
        super(nombre, apellido);
        this.numeroHabitacion = numeroHabitacion;
        this.fechaEntrada = fechaEntrada;
        this.fechaSalida = fechaSalida;
    }
}

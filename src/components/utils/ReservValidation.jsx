const useReservaValidation = (reservas) => {
    const validarFecha = (entrada, salida) => {
        const fechaIni = new Date(entrada);
        const fechaFin = new Date(salida);
        return fechaIni <= fechaFin;
    };

    const validarFechaActual = (fecha) => {
        const hoy = new Date().toISOString().split('T')[0];
        return fecha >= hoy;
    };

    const isRoomAvailable = (numeroHabitacion, fechaEntrada, fechaSalida) => {
        const fechaIni = new Date(fechaEntrada);
        const fechaFin = new Date(fechaSalida);

        return !reservas.some(reserva => {
            if (reserva.numeroHabitacion === numeroHabitacion) {
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

    return { validarFecha, isRoomAvailable, validarFechaActual };
};


export default useReservaValidation;

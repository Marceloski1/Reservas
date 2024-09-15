const ReservaList = ({ reservas }) => {
    if (reservas.length === 0) {
        return <p className="nrm">No hay reservas</p>;
    }

    return (
        <ul className="items"> 
            {reservas.map((reserva, index) => (
                <li className="reservList" key={index}>
                    <div><strong>Nombre:</strong> {reserva.nombre}</div>
                    <div><strong>Apellido:</strong> {reserva.apellido}</div>
                    <div><strong>Número de Habitación:</strong> {reserva.numeroHabitacion}</div>
                    <div><strong>Fecha de Entrada:</strong> {reserva.fechaEntrada}</div>
                    <div><strong>Fecha de Salida:</strong> {reserva.fechaSalida}</div>
                </li>
            ))}
        </ul>
    );
};

export default ReservaList;

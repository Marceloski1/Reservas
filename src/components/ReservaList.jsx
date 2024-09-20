import React, { useState } from "react";
import "../styles/ReservaList.css"; 

const ReservaList = ({ reservas }) => {

  const [searchQuery, setSearchQuery] = useState('');


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); 
  };

  const filteredReservas = reservas.filter((reserva) =>
    reserva.numeroHabitacion.toString().includes(searchQuery)
  );

  if (reservas.length === 0) {
    return <p className="nrm">No hay reservas</p>;
  }

  return (
    <div>
      {/* Input de búsqueda */}
      <form className="search-form">
        <label htmlFor="search" className="searchNum">Buscar por número de habitación:</label>
        <input
          type="number"
          id="search"
          placeholder="1 - 100"
          className="numberInput"
          min={1} 
          max={100}
          onChange={handleSearchChange} 
          value={searchQuery}
        />
      </form>

      {/* Renderizar la lista filtrada de reservas */}
      <ul className="items">
        {filteredReservas.map((reserva, index) => (
          <li className="reservList" key={index}>
            <div><strong>Nombre:</strong> {reserva.nombre}</div>
            <div><strong>Apellido:</strong> {reserva.apellido}</div>
            <div><strong>Número de Habitación:</strong> {reserva.numeroHabitacion}</div>
            <div><strong>Fecha de Entrada:</strong> {reserva.fechaEntrada}</div>
            <div><strong>Fecha de Salida:</strong> {reserva.fechaSalida}</div>
            <div><strong>Identificador de la reservación:</strong> {reserva.id}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservaList;

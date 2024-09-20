import useFormState from './utils/MyState';  
import "../styles/Cancelar.css"; 

const CancelReserva = ({ cancelReserva }) => {  
    const initialFormState = {  
        idReserva: ''  
    };  

    const [formState, handleChange, resetForm] = useFormState(initialFormState);  
    const { id } = formState;  

    const handleSubmit = (e) => {  
        e.preventDefault();  

        try{
        if (!id) {  
            alert("Por favor, introduce el id de la reserva correctamente.");  
            return;  
        }  

        cancelReserva(id);  
        alert('Reserva cancelada con éxito');  
        resetForm(); 
    }catch (e) {  
        alert(e.message);  
    } 
    };  

    return (  
        <form onSubmit={handleSubmit} className="cancel-form">  
            <div className="form-content">  
                <label>Id de la Reserva:</label>  
                <input  
                    type="number"  
                    name="id"  
                    value={id}  
                    onChange={handleChange}  
                    required  
                    min="1"  
                    className="idCancel"  
                />  
            </div>  

            <button type="submit">Cancelar Reserva</button>  
        </form>  
    );  
};  

export default CancelReserva;
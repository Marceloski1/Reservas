import { useState } from 'react';

const useFormState = (initialState) => {
    const [formState, setFormState] = useState(initialState);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const resetForm = () => {
        setFormState(initialState);
    };

    return [formState, handleChange, resetForm];
};

export default useFormState;

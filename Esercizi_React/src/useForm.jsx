import { useState } from 'react';

function useForm(initialValues = { username: '', password: '' }) {
  // Stato per i valori del form
  const [formValues, setFormValues] = useState(initialValues);

  // Evento generico per aggiornare i campi del form
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  return { formValues, handleInputChange };
}

export default useForm;

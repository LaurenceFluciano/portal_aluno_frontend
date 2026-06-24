import { useState } from 'react';

export function useField(estadoInicial = {}) {
  const [field, setFieldState] = useState(estadoInicial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const setField = (key, value) => {
    setFieldState((prev) => ({ ...prev, [key]: value }));
    
    if (errors[key] || errors.geral) {
      setErrors((prev) => ({ ...prev, [key]: '', geral: '' }));
    }
  };

  return { field, setField, errors, setErrors, loading, setLoading };
}
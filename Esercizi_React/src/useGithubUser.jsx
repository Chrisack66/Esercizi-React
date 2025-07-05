// useGithubUser.js
import { useState, useEffect, useCallback } from 'react';

function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Funzione per eseguire il fetch dei dati
  const fetchData = useCallback(() => {
    if (!username) return;
    setLoading(true);
    setError(null);
    
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) throw new Error('User not found');
        return response.json();
      })
      .then(data => setUser(data))
      .catch(err => {
        setError(err);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, [username]);

  // Effetto per eseguire il fetch quando il username cambia
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { user, error, loading, fetchData };
}

export default useGithubUser;

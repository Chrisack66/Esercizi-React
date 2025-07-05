// useCurrentLocation.js
import { useState, useCallback } from 'react';

function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Funzione per ottenere la posizione corrente
  const getCurrentLocation = useCallback(() => {
    // Verifica che il browser supporti il geolocation API
    if (!navigator.geolocation) {
      setError(new Error('Geolocation is not supported by this browser.'));
      return;
    }
    setLoading(true);
    setError(null);

    // Metodo getCurrentPosition() dell'API Geolocation
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );
  }, []);

  return { location, error, loading, getCurrentLocation };
}

export default useCurrentLocation;

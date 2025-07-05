import React from 'react';
import useCounter from './useCounter';
import useForm from './useForm';
import useGithubUser from './useGithubUser';
import useCurrentLocation from './useCurrentLocation';

function Demo() {
  // Esempio per il contatore
  const { count, increment, decrement, reset } = useCounter(0);

  // Esempio per il form controllato
  const { formValues, handleInputChange } = useForm();
  
  // Esempio per il GithubUser (usa un username fisso o da form)
  const { user, error, loading, fetchData } = useGithubUser("Chrisack66");
  
  // Esempio per la geolocalizzazione
  const { location, error: locationError, loading: locationLoading, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Reset</button>

      <hr />

      <h2>Controlled Form</h2>
      <input
        name="username"
        value={formValues.username}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <input
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleInputChange}
        placeholder="Password"
      />

      <hr />

      <h2>Github User Data</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width={50} />
          <p>Name: {user.name || "N/A"}</p>
          <p>Login: {user.login}</p>
        </div>
      )}
      <button onClick={fetchData}>Ricarica utente</button>

      <hr />

      <h2>Current Location</h2>
      {locationLoading && <p>Fetching location...</p>}
      {locationError && <p>Error: {locationError.message}</p>}
      {location && (
        <p>
          Latitudine: {location.latitude}, Longitudine: {location.longitude} (Accuratezza: {location.accuracy} m)
        </p>
      )}
      <button onClick={getCurrentLocation}>Ottieni posizione attuale</button>
    </div>
  );
}

export default Demo;

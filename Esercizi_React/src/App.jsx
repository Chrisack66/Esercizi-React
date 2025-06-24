import Hello from './Hello';

function App() {
  return (
    <div>
      <Hello />
      <Hello /> {/* Possiamo usare il componente Hello più di una volta */}
      {/* <Message /> // Si può anche renderizzare direttamente il compponente Message */}
    </div>
  );
}

export default App;
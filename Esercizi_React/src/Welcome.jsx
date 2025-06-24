import Age from './Age';
import Message from './Message';

function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome, <strong>{name}</strong>!</p>

      {/* 1. Solo se age > 18 */}
      {age > 18 && <Age age={age} />}

      {/* 2. Solo se age è presente (non undefined/null) */}
      {age !== undefined && age !== null && <Age age={age} />}

      {/* 3. Solo se age > 18 e < 65 */}
      {age > 18 && age < 65 && <Age age={age} />}

      {/* 4. Solo se age > 18 e name è "John" */}
      {age > 18 && name === "John" && <Age age={age} />}

      {/* 5. Mostrare comunque un Age (per visualizzarne 5 distinti) */}
      <Age age={age} />

      {/* Componente Message */}
      <Message age={age} />
    </div>
  );
}

export default Welcome;
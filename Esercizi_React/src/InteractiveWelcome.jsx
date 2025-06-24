import { useState } from 'react';
import Welcome from './Welcome';

function InteractiveWelcome() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Welcome name={name} />
    </div>
  );
}

export default InteractiveWelcome;
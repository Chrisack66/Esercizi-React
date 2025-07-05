import { useState } from 'react';
import Hello from './Hello';
import LanguageContext from './LanguageContext';

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={language}>
      <div>
        <label>
          Select language:
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="it">Italiano</option>
          </select>
        </label>

        <Hello />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;

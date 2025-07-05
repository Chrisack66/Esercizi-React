import { useContext } from 'react';
import LanguageContext from './LanguageContext';

function Hello() {
  const language = useContext(LanguageContext);

  const translations = {
    en: "Hello, World!",
    it: "Ciao, Mondo!",
  };

  return <h2>{translations[language]}</h2>;

}

export default Hello;

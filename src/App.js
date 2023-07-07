import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import Title from './component/Title';
import Introduction from './component/Introduction';
import News from './component/News';
import Researchs from './component/Researches';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [language, setLanguage] = useState("Japanese");
  return (
    <ChakraProvider >
      <Navbar language={language} setLanguage={setLanguage} />
      <Title language={language} />
      <Introduction language={language} />
      <News language={language} />
      <Researchs language={language} />
    </ChakraProvider >
  );
}

export default App;

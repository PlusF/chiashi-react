import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import News from './component/News';
import Research from './component/Research';
import Members from './component/Members';
import Papers from './component/Papers';
import Lectures from './component/Lectures';
import OpenLab from './component/OpenLab';
import Access from './component/Access';
import Footer from './component/Footer';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
    const [language, setLanguage] = useState("Japanese");
    return (
        <ChakraProvider >
            <BrowserRouter>
            <Navbar language={language} setLanguage={setLanguage} />
            <Routes>
                <Route exact path="/chiashi/react/home" element={<Home language={language} />} />
                <Route path="/chiashi/react/news" element={<News language={language} />} />
                <Route path="/chiashi/react/research" element={<Research language={language} />} />
                <Route path="/chiashi/react/members" element={<Members language={language} />} />
                <Route path="/chiashi/react/papers" element={<Papers language={language} />} />
                <Route path="/chiashi/react/lectures" element={<Lectures language={language} />} />
                <Route path="/chiashi/react/openlab" element={<OpenLab language={language} />} />
                <Route path="/chiashi/react/access" element={<Access language={language} />} />
            </Routes>
            </BrowserRouter>
            <Footer />
        </ChakraProvider >
    );
}

export default App;

import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import News from './component/News';
import Research from './component/Research';
import Members from './component/Members';
import Papers from './component/Papers';
import Lectures from './component/Lectures';
import OpenLab from './component/OpenLab';
import Access from './component/Access';
import BackToTop from './component/BackToTop';
import Footer from './component/Footer';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
    const [language, setLanguage] = useState("Japanese");
    const homeUrl = "/chiashi/";
    return (
        <ChakraProvider >
            <BrowserRouter>
            <Navbar language={language} setLanguage={setLanguage} />
            <Routes>
                <Route exact path={homeUrl} element={<Home language={language} />} />
                <Route path={homeUrl + 'news'} element={<News language={language} />} />
                <Route path={homeUrl + 'research'} element={<Research language={language} />} />
                <Route path={homeUrl + 'members'} element={<Members language={language} />} />
                <Route path={homeUrl + 'papers'} element={<Papers language={language} />} />
                <Route path={homeUrl + 'lectures'} element={<Lectures language={language} />} />
                <Route path={homeUrl + 'openlab'} element={<OpenLab language={language} />} />
                <Route path={homeUrl + 'access'} element={<Access language={language} />} />
                <Route path={homeUrl + 'index.html'} element={<Navigate replace to={homeUrl} />}/>
            </Routes>
            </BrowserRouter>
            <BackToTop />
            <Footer />
        </ChakraProvider >
    );
}

export default App;

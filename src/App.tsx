import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Docs from './components/pages/Docs';
import NavBar from './components/elements/NavBar';
import Marketplace from './components/pages/Marketplace';

const App: React.FC = () => {
  return (
    <Router>
      {/* Main container */}
      <div className='w-[90%] min-h-screen flex flex-col items-center mx-auto p-2 pt-8 select-none'>
        {/* Barra superior */}
        <div className="w-full absolute top-0">
          <div className="w-full h-[30px] bg-black backdrop-blur-[5px]" />
          <div className="w-full h-[40px] bg-[#000000EE] backdrop-blur-[3px]" />
          <div className='w-full h-[90px] bg-gradient-to-t from-transparent to-black backdrop-blur-[0.5px]'/> 
        </div>

        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <div className='flex-grow w-full p-8 pt-8'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/marketplace" element={<Marketplace />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className='w-full text-center text-white p-4'>
          By{' '}
          <a 
            href="https://github.com/SaplingDevs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='text-blue-400 hover:text-blue-500 transition duration-300'
          >
            @SaplingDevs
          </a>
        </footer>

      </div>
    </Router>
  );
};

export default App;

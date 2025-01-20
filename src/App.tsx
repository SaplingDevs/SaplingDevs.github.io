import React from 'react';
import Home from './components/content/Home';
import NavBar from './components/elements/NavBar';

const App: React.FC = () => {
  return (
    <>
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
          <Home />
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
    </>
  );
};

export default App;

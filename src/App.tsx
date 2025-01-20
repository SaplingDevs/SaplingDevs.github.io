import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      {/* Main container */}
      <div className='w-[90%] min-h-screen flex flex-col items-center mx-auto p-2 pt-8 select-none'>
        {/* Barra superior */}
        <div className='w-full h-[40px] bg-black absolute top-0' />

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
            href="https://github.com/TheSilver1023" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='text-blue-400 hover:text-blue-500 transition duration-300'
          >
            @TheSilver
          </a>
        </footer>

      </div>
    </>
  );
};

export default App;

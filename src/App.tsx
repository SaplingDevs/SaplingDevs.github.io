import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/elements/NavBar';
import Footer from './components/elements/Footer';
import Blur from './components/elements/Blur';
import Content from './components/elements/Content';

const App: React.FC = () => {
  return (
    <Router>
      <div className='w-[90%] min-h-screen flex flex-col items-center mx-auto p-2 pt-8 select-none'>
        <Blur/>
        <NavBar />
        <Content />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

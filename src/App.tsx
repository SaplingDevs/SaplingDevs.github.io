import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

// import NavBar from './components/elements/NavBar';
// import Footer from './components/elements/Footer';
// import Blur from './components/elements/Blur';
// import Content from './components/elements/Content';


const App: React.FC = () => {
  return (
    <Router>
      <div className="w-[90%] min-h-screen flex flex-col items-center mx-auto p-2 pt-8 select-none">
        {/* <Blur />
        <NavBar />
        <Content />
        <Footer /> */}


        <div className="h-screen w-screen animate-slide-up flex items-center justify-center">
          <section className="text-center size-auto mb-30">
            <img
              src="/sapling.svg"
              className="size-[256px] mb-6 mx-auto animate-float"
              alt="Sapling Logo"
            />
            <h1 className="text-3xl font-bold">
              Under construction, visit our{" "}
              <a className="text-blue-500" target="_blank" href="https://discord.gg/96Uyt3KWT5">
                Discord!
              </a>
            </h1>
          </section>
        </div>

        
      </div>
    </Router>
  );
};

export default App;

import { useState, useEffect, useRef } from 'react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='bg-zinc-900 w-full h-[70px] mx-auto flex items-center justify-between px-4 select-none rounded-3xl sticky top-8 z-50'>
      {/* Logo */}
      <div className='flex text-white text-lg font-bold items-center ml-2'>
        <img src="/sapling.svg" className='h-10'/>
        <span className='ml-6 text-2xl'>Sapling</span>
      </div>

      {/* Full screen */}
      <div className='hidden md:flex mr-10'>
        <ul className='flex space-x-6'>
          <li className='text-white hover:text-blue-500 cursor-pointer transition duration-300'><a href="#home">Home</a></li>
          <li className='text-white hover:text-blue-500 cursor-pointer transition duration-300'>Documentation</li>
          <li className='text-white hover:text-blue-500 cursor-pointer transition duration-300'>Marketplace</li>
          <li className='text-white hover:text-blue-500 cursor-pointer transition duration-300'>Blog</li>
        </ul>
      </div>

      {/* Burger button */}
      <button
        ref={buttonRef}
        className='md:hidden text-white mr-4'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </button>

      {/* Mobile */}
      {menuOpen && (
        <div ref={menuRef} className='absolute top-0 left-0 w-full bg-zinc-900 text-white rounded-3xl mt-20'>
          <ul className='flex flex-col space-y-8 p-6'>
            <li className='hover:text-blue-500 cursor-pointer transition duration-300'>Home</li>
            <li className='hover:text-blue-500 cursor-pointer transition duration-300'>Documentation</li>
            <li className='hover:text-blue-500 cursor-pointer transition duration-300'>Marketplace</li>
            <li className='hover:text-blue-500 cursor-pointer transition duration-300'>Blog</li>
          </ul>
        </div>
      )}
    </div>
  );
}
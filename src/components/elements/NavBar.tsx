import { useEffect, useRef, useState } from "react";
import CursorShadow from "../ui/CursorShadow";
import NavElements from "./NavElements";

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
    <div className="w-full h-[70px] sticky top-8 z-50">
      <CursorShadow size={80} color="rgba(127, 216, 140, 0.3)" blur={20} transitionDuration="0.3s" backgroundColor="#18181b60" >
        <div className="group w-full h-full mx-auto flex items-center justify-between px-4 select-none">

          {/* Logo */}
          <section className="flex text-white text-lg font-bold items-center ml-2">
            <img src="/sapling.svg" className='h-10'/>
            <span className="ml-6 text-2xl">Sapling</span>
          </section>

          {/* Full Screen */}
          <nav className="hidden md:flex mr-10"> 
            <NavElements className="flex space-x-6" onItemClick={() => setMenuOpen(false)} />
          </nav>

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
        </div>
      </CursorShadow> 
    
      {/* Mobile Menu (Outside the main container) */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-[70px] w-full left-0 bg-[#18181b80] backdrop-blur-sm text-white rounded-3xl z-50 mt-4 transition-all"
          id="nav-elements"
        >
          <NavElements className="flex flex-col space-y-8 p-6" onItemClick={() => setMenuOpen(false)} />
        </div>
      )}
    </div>
  );
}
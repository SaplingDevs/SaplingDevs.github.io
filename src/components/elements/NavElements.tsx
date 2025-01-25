import { Link } from 'react-router-dom';

type NavElementsProps = {
  className?: string;
  onItemClick?: () => void; // Permitir una función opcional para cerrar el menú
};

export default function NavElements({ className, onItemClick }: NavElementsProps) {
  const handleClick = () => {
    if (onItemClick) onItemClick(); // Llama a onItemClick si está definida
  };

  return (
    <ul className={`${className}`}>
      {/* Home */}
      <li 
        className="text-white hover:text-blue-500 cursor-pointer transition duration-300"
        onClick={handleClick}
      >
        <Link to="/">Home</Link>
      </li>
      

      {/* Downloads */}
      <li 
        className="text-white hover:text-blue-500 cursor-pointer transition duration-300"
        onClick={handleClick}
      >
        <a href="https://github.com/SaplingDevs/Sapling/releases" target="_blank">Download</a>
      </li>


      {/* Docs */}
      <li 
        className="text-white hover:text-blue-500 cursor-pointer transition duration-300"
        onClick={handleClick}
      >
        <Link to="/docs/home">Docs</Link>
      </li>
      

      {/* Marketplace */}
      <li 
        className="text-white hover:text-blue-500 cursor-pointer transition duration-300"
        onClick={handleClick}
      >
        <Link to="/marketplace/">Marketplace</Link>
      </li>

      
      {/* Discord */}
      <li 
        className="text-white hover:text-blue-500 cursor-pointer transition duration-300"
        onClick={handleClick}
      >
        <a href="https://discord.gg/96Uyt3KWT5" target="_blank">Discord</a>
      </li>

      
      {/* Github */}
      <li 
        className="text-white hover:text-blue-500 cursor-pointer transition duration-300"
        onClick={handleClick}
      >
        <a href="https://github.com/SaplingDevs" target="_blank">Github</a>
      </li>
    </ul>
  );
}

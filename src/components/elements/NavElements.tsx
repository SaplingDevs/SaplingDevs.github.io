import { Link } from 'react-router-dom';

type NavElementsProps = {
  className?: string;
};

export default function NavElements({ className = '' }: NavElementsProps) {
  return (
    <ul className={`${className}`}>
      <li id="nav-home" className="text-white hover:text-blue-500 cursor-pointer transition duration-300">
        <Link to="/">Home</Link>
      </li>
      
      <li className="text-white hover:text-blue-500 cursor-pointer transition duration-300">
        <a href="https://github.com/SaplingDevs/Sapling/releases" target="_blank">Download</a>
      </li>

      <li className="text-white hover:text-blue-500 cursor-pointer transition duration-300">
        <Link to="/docs/">Docs</Link>
      </li>
      
      <li className="text-white hover:text-blue-500 cursor-pointer transition duration-300">
        <Link to="/marketplace/">Marketplace</Link>
      </li>
      
      <li className="text-white hover:text-blue-500 cursor-pointer transition duration-300">
        <a href="https://discord.gg/96Uyt3KWT5" target="_blank">Discord</a>
      </li>
      
      <li id="nav-github" className="text-white hover:text-blue-500 cursor-pointer transition duration-300">
        <a href="https://github.com/SaplingDevs" target="_blank">Github</a>
      </li>
    </ul>
  );
}
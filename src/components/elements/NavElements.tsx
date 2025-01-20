type NavElementsProps = {
  className?: string;
};

export default function NavElements({ className = '' }: NavElementsProps) {
  return (
    <ul className={`${className}`}>
      <li id="nav-download" className="text-white hover:text-blue-500 cursor-pointer transition duration-300">Download</li>
      <li id="nav-docs" className="text-white hover:text-blue-500 cursor-pointer transition duration-300">Docs</li>
      <li id="nav-marketplace" className="text-white hover:text-blue-500 cursor-pointer transition duration-300">Marketplace</li>
      <li id="nav-discord" className="text-white hover:text-blue-500 cursor-pointer transition duration-300">Discord</li>
      <li id="nav-github" className="text-white hover:text-blue-500 cursor-pointer transition duration-300">Github</li>
    </ul>
  );
}
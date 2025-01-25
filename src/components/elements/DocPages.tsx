import { Routes, Route, Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import DocNotFound from "../pages/DocNotFound";
import md from "../ui/Markdown";
import DocPagesNames from "../data/docPages";

type DocPagesProps = {
  docPages: [name: string, content: string][];
};



export default function DocPages({ docPages }: DocPagesProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ hash, updateHash ] = useState(window.location.hash.split("/")[2]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePage = () => updateHash(window.location.hash.split("/")[2]);

  return (
    <div className="flex">
      {/* Burger menu */}
      <section className="z-10">
        <button
            ref={buttonRef}
            className='absolute md:hidden text-white -ml-6 mt-2'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {menuOpen && (
          <ul
            className="absolute p-4 w-48 bg-[#18181bEE] backdrop-blur-sm text-white rounded-lg z-50 mt-8 transition-all"
          >
            {docPages.map(([name]) => (
              <li 
                key={name}
                className={`${hash == name ? "text-zinc-200" : "text-zinc-500"} hover:text-zinc-200 transition-colors`}
                onClick={() => handlePage()}
              >
                <Link to={`/docs/${name}`} onClick={() => setMenuOpen(false)}>{DocPagesNames[name]}</Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Sidebar */}
      <aside className="md:fixed md:flex absolute hidden p-4 w-48 bg-[#20202050] backdrop-blur-sm rounded-lg">
        <ul>
          {docPages.map(([name]) => (
            <li 
              key={name}
              className={`${hash == name ? "text-zinc-200" : "text-zinc-500"} hover:text-zinc-200 transition-colors`}
              onClick={() => handlePage()}
            >
              <Link to={`/docs/${name}`}>{DocPagesNames[name]}</Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Doc content */}
      <main className="flex-1 md:ml-48 ml-0 p-4">
        <Routes>
          <Route path=":docName" element={<DocContent pages={docPages} />} />
        </Routes>
      </main>
    </div>
  );
}

function DocContent({ pages }: { pages: any[] }) {
  const { docName } = useParams();
  const doc = pages.find(([name]) => name === docName);

  if (!doc) return (
    <div id="md-docs-error" className="animate-slide-up">
      <DocNotFound />
    </div>
  );

  return (
    <div
      id="md-docs"
      className="animate-slide-up"
      dangerouslySetInnerHTML={{ __html: md.render(doc[1]) }}
    />
  );
}

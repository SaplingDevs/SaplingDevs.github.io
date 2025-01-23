import { Link } from "react-router-dom";
import CursorShadow from "../ui/CursorShadow";

export default function Home() {
  return (
    <div className="animate-slide-up" style={{ "--translate-y-start": "4%" }  as React.CSSProperties }>
      <header className="grid gap-12 md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-auto">
        {/* Presentation */}
        <div className="row-span-4 md:row-span-4">
          <section className="sapling-text">
            <h1 className="text-3xl md:text-4xl font-bold">Sapling Addon</h1>
            <h2 className="mt-6 text-xl md:text-2xl text-white">Enhance Your Minecraft with New Possibilities</h2>
          </section>

          <section className="mt-6 md:mt-10">
            <h2 className="text-base md:text-lg">
              Sapling is an open-source suite of utilities and tools for Minecraft Bedrock, focused primarily on TMC. It enhances Quality of Life (QoL), optimizes performance, ensures parity, and offers a variety of engines, server-side and client-side features, and more!
            </h2>
          </section>
        </div>

        {/* Animation */}
        <div className="row-span-5 md:row-span-6 md:hover:scale-[1.02] transition-all duration-500 hover:scale-100 bg-[url('/rtx.png')] bg-cover bg-center rounded-3xl">
          <CursorShadow backgroundColor="#20202080" color="#6060FF" size={250} blur={120}>
            <section className="w-full h-full p-6 bg-black/50 rounded-3xl flex flex-col justify-center">
              <ul className="list-disc list-inside space-y-4 text-white">
                <li className="text-base font-bold transition-colors duration-300 hover:text-indigo-400">
                  🌱 +50 Toggleable Features
                  <ul className="list-circle list-inside ml-6 space-y-2 text-sm text-gray-300">
                    <li className="hover:text-indigo-300">Quality of live</li>
                    <li className="hover:text-indigo-300">Parity</li>
                    <li className="hover:text-indigo-300">New mechanics</li>
                  </ul>
                </li>
                <li className="text-base font-bold transition-colors duration-300 hover:text-indigo-400">
                  🍃 +10 New Commands
                  <ul className="list-circle list-inside ml-6 space-y-2 text-sm text-gray-300">
                    <li className="hover:text-indigo-300">Customization</li>
                    <li className="hover:text-indigo-300">Fakeplayer</li>
                    <li className="hover:text-indigo-300">Server data</li>
                  </ul>
                </li>
                <li className="text-base font-bold transition-colors duration-300 hover:text-indigo-400">
                  🪴 + Extensions Support
                </li>
              </ul>
              <span className="absolute text-zinc-600 right-0 bottom-0 m-2 mr-4 text-sm">Pic by @tomy_ct</span>
            </section>
          </CursorShadow>
        </div>
      </header>

      <section>
        <Link
          to={"/docs/quickstart"}
          className="p-[10px_24px_10px_24px] font-semibold rounded-md bg-zinc-700 hover:bg-emerald-600 active:scale-[0.9] transition-all mt-5 inline-block"
        >
          Quick Start
        </Link>
      </section>

    </div>
  );
}

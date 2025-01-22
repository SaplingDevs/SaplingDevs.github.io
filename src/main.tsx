import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/tailwind.css"
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-zinc-950 h-screen w-screen overflow-auto'>
      <App/>
    </div>
  </StrictMode>
)
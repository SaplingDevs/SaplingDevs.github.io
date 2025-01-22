import { Routes, Route } from 'react-router-dom';
import { Home, Docs, Marketplace, NotFound } from "../pages/pages.ts"


export default function Content() {
  return (
    <div className='flex-grow w-full md:p-8 p-4 pt-8'>
      <br />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/docs" element={<Docs/>}/>
        <Route path="/marketplace" element={<Marketplace/>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

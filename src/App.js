import './App.css';
import Menu from './Menu.js';
import About from './About.js';
import Search from './Search.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CollectionPage from './CollectionPage.js';
// import WordReview from './WordReview.js';

function App() {

  return (
    <>
      <div className="flex justify-center bg-[#99CDD8]">
        <div className='w-[1200px]'>
          <Menu />
        </div>
      </div>
      <div className="flex justify-center bg-gradient-to-t from-[#CFDBC4] to-[#E8B298]">
        <div className='w-[1200px]'>
          <div className='flex justify-center'>
            <div className='w-[900px] mt-[30px]'>
              <Search />
            </div>
          </div>

          <div className='flex justify-center content-center'>
            <div className='w-[100px] h-[100px]'>
            </div>
          </div>

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/:collectionBox" element={<CollectionPage />} />
            </Routes>
          </BrowserRouter>
          <div className='flex items-end h-[400px]'>
            <About />
          </div>
        </div>
      </div>
    {/* <div>
      <WordReview/>
    </div> */}



    </>

  )
}


export default App;

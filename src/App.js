import './App.css';
import Menu from './Menu.js';
import About from './About.js';
import Search from './Search.js';
import WordListOf504 from './504Button.js';
import Essential from './EssentailButton.js';
import HighSchool from './HighSchoolButton.js';
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
          <Search />
          <div className='flex justify-center content-center'>
            <div className='w-[100px] h-[100px]'>
              <div className='font-black pt-[20px]'>Word Lists</div>
            </div>
          </div>
          <div className='flex justify-around'>
            <div className='flex justify-center'>
              <WordListOf504 />
            </div>

            <div className='flex justify-center'>
              <Essential />
            </div>
            <div className='flex justify-center'>
              <HighSchool />
            </div>

          </div>

          <div className='flex items-end h-[400px]'>
            <About />
          </div>
        </div>
      </div>

    </>



  );
}

export default App;

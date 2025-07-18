import './App.css';
import Menu from './Menu.js';
import About from './About.js';
import Words from './words.js';
import Search from './Search.js'; 

function App() {
  return (
    <div>
      <div className="flex justify-center bg-[#99CDD8]">
        <div className='w-[1200px]'>
          <Menu />
        </div>
      </div>
      <div className="flex justify-center bg-gradient-to-t from-[#CFDBC4] to-[#E8B298]">
        <div className='w-[1200px]'>
          <Search/>
          <Words />
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;

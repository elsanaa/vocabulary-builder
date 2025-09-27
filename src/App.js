import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralVocabulary from "./GeneralVocabulary.js";
import WordReview from './WordReview.js';
import Layout from './Layout.js';
import LogIn from './Login.js';
import SignUp from './Signup.js';
import MainContent from './mainContent.js';
import MasterVocabulary from './MasterVocabulary.js';
import SpecializedVocabulary from './SpecializedVocabulary.js';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainContent/>} />
            <Route path="General" element={<GeneralVocabulary/>} />
            <Route path='Master' element={<MasterVocabulary/>}/>
            <Route path='Specialized' element={<SpecializedVocabulary/>}/>
            <Route path="review" element={<WordReview />} />
            <Route path="Log" element={<LogIn />} />
            <Route path="Sign" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
     
    </>

  )
}


export default App;

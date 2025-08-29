import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EssentialFive0FourHighSchool from "./EssentialFive0FourHighSchool.js";
import CollectionPage from './CollectionPage.js';
import WordReview from './WordReview.js';
import Layout from './Layout.js';
import LogIn from './Login.js';
import SignUp from './Signup.js';
import MainContent from './mainContent.js';
import Vocabulary from './Vocabulary.js';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainContent/>} />
            <Route path="Dictionary/:collectionBox" element={<CollectionPage />} />
            <Route path="Dictionary" element={<EssentialFive0FourHighSchool/>} />
            <Route path='Vocabulary/:collectionBox' element={<CollectionPage />}/>
            <Route path='Vocabulary' element={<Vocabulary/>}/>
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

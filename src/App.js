import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CollectionPage from './CollectionPage.js';
import WordReview from './WordReview.js';
import Layout from './Layout.js';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:collectionBox" element={<CollectionPage />} />
            <Route path="review" element={<WordReview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}


export default App;

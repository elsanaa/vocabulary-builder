import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Store from "./Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function CollectionPage() {
  let { collectionBox } = useParams();
  let store = Store();
  let words = store[collectionBox];
  let [display, setDisplay] = useState(null);

  function handleOpen(index) {
    setDisplay(index);
  }

  function handleClose() {
    setDisplay(null);
  }

  return (
    <div>
      <Link to="/General">
        <div className="bg-white h-[60px] w-[150px] flex justify-center items-center rounded-[15px]">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      </Link>

      <div className="flex flex-wrap mt-[50px] w-[1200px] justify-center">
        {words.map((item, index) => {
          if (display === index) {
            return (
              <div onClick={handleClose}
                key={index}
                className="w-[250px] h-[200px] bg-[#CFDBC4] rounded-[20px] px-[10px] flex flex-col cursor-pointer">
                <div className="border-b-[1px] border-solid border-white flex justify-between items-center h-[40px]">
                  <div>{item.word}</div>
                  <div>{item.pronunciation}</div>
                </div>
                <div className="mt-[10px]">{item.meaning}</div>
                <div className="text-orange-400 mt-[10px]">Example:</div>
                <div>{item.example}</div>
              </div>
            );
          } else {

            return (
              <div
                key={index}
                onClick={() => handleOpen(index)}
                className="w-[150px] h-[90px] bg-[#CFDBC4] rounded-[20px] px-[10px] m-[10px] flex justify-center items-center font-black cursor-pointer"
              >
                {item.word}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default CollectionPage;
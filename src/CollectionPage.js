import React from "react";
import { useParams, Link } from "react-router-dom";
import Store from "./Store";

function CollectionPage() {
  const { collectionBox } = useParams();
  const store = Store();
  const words = store[collectionBox];

  return (
    <div>
      <Link to="/">
        <div className="w-[150px] h-[90px] bg-[#CFDBC4] font-black rounded-[15px] flex justify-center items-center">
          {collectionBox}
        </div>
      </Link>

      <div className="flex flex-wrap mt-[50px] w-[1200px] flex justify-center">
        {words.map((item, index) => (
          <div key={index} className="w-[250px] h-[200px] bg-[#CFDBC4] rounded-[20px] px-[10px] m-[10px]">
            <div className="border-b-[1px] border-solid border-white flex justify-between h-[30px]">
              <div> {item.word}</div>
              <div> {item.pronunciation}</div>
            </div>
            <div>{item.meaning}</div>
            <div className="text-orange-400">Example: </div>
            <div>{item.example}</div>

          </div>
        ))}
      </div>
    </div>

  );
}

export default CollectionPage;
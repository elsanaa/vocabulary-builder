import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


function Search() {
    return (
        <div className="flex justify-center h-[100px] items-center">
            <input className="w-[900px] h-[60px] rounded-[30px] pl-[30px] outline-none" placeholder="Search"/>
            <div className="w-[100px] h-[60px] rounded-[30px] bg-[#CFDBC4] flex justify-center items-center ml-[5px]"><FontAwesomeIcon icon={faSearch}/></div>
        </div>
    )
}

export default Search;
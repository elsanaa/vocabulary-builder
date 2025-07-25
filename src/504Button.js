import React, { useState } from "react";
import FiveZeroFour from "./504Words";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function WordListOf504() {

    let [Book1, setBook1] = useState(false);

    function Book1Close() {
        setBook1(false)
    }
    function five0four() {
        if(Book1 == false) {
            return ( 
            <div className="w-[150px] cursor-pointer h-[90px] rounded-[20px] bg-[#CFDBC4] font-extrabold flex justify-center items-center" onClick={Book1Open}>
                504
            </div>
            )
        } else {
            return ( 
                <div className="w-[320px]">
                    <div className="h-[50px] w-[120px] bg-white rounded-[15px] flex justify-center items-center" onClick={Book1Close}> <FontAwesomeIcon icon={faArrowLeft}/></div>
                <div><FiveZeroFour/></div>
                </div>
        )}
    }

    function Book1Open() {
        setBook1(true);
    }

    
    return(
        <div>
            
            {five0four()}
        </div>
    )
}

export default WordListOf504;

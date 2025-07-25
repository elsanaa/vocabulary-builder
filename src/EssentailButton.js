import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import EssentialWords from "./EssentialWords";
function Essential() {
    let [Book2, setBook2] = useState(false);
    
        function Book2Close() {
            setBook2(false)
        }
        function essentialWord() {
            if(Book2 == false) {
                return ( 
                <div className="w-[150px] cursor-pointer h-[90px] rounded-[20px] bg-[#CFDBC4] font-extrabold flex justify-center items-center" onClick={Book2Open}>
                   Essential
                </div>
                )
            } else {
                return ( 
                    <div className="w-[320px]">
                        <div className="h-[50px] w-[120px] bg-white rounded-[15px] flex justify-center items-center" onClick={Book2Close}> <FontAwesomeIcon icon={faArrowLeft}/></div>
                    <div><EssentialWords/></div>
                    </div>
            )}
        }
    
        function Book2Open() {
            setBook2(true);
        }
    
    return (
        <div>
        {essentialWord()}
        </div>
    )
}

export default Essential;
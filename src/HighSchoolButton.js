import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import School from "./HighSchoolWords";
function HighSchool() {
    let [Book3, setBook3] = useState(false);
    
        function Book3Close() {
            setBook3(false)
        }
        function highSchool() {
            if(Book3 == false) {
                return ( 
                <div className="w-[150px] cursor-pointer h-[90px] rounded-[20px] bg-[#CFDBC4] font-extrabold flex justify-center items-center" onClick={Book3Open}>
                   HighSchool
                </div>
                )
            } else {
                return ( 
                    <div className="w-[320px]">
                        <div className="h-[50px] w-[120px] bg-white rounded-[15px] flex justify-center items-center" onClick={Book3Close}><FontAwesomeIcon icon={faArrowLeft}/> </div>
                    <div><School/></div>
                    </div>
            )}
        }
    
        function Book3Open() {
            setBook3(true);
        }
    
    return (
        <div>
        {highSchool()}
        </div>
    )
}

export default HighSchool;
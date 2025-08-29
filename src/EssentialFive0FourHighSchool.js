import React from "react";
import { Link } from "react-router-dom";
import Store from "./Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function EssentialFive0FourHighSchool() {
    const store = Store();

    return (

        <div>
            <Link to="/">
                <div className="hover:bg-gray-100 bg-white h-[60px] w-[150px] flex justify-center items-center rounded-[15px] mb-[30px]">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
            </Link>
            <div className="flex flex-col">

                {Object.keys(store).slice(0, 3).map((key) => (
                    <Link to={key}>
                        <div className="hover:bg-[#657166] w-[400px] h-[90px] my-[10px] bg-[#CFDBC4] font-black rounded-[15px] flex justify-start items-start pl-[8px] ">
                            <div>
                                <div>
                                    {key}

                                </div>
                            </div>
                        </div>

                    </Link>
                ))}
            </div>
        </div>

    );
}

export default EssentialFive0FourHighSchool;
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MainContent() {
    const [levels, setLevels] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/mainContent")
            .then(res => setLevels(res.data.levels))

    }, [])



    return (
        <div>
            <div>
                {levels.map((lev, i) => (
                    <div key={i} className="border-b-[1px] border-black mb-[10px]">
                        <div className="font-black text-[30px] w-full">{lev.title}</div>
                        <div className="text-[20px] text-gray-200 whitespace-pre-line">{lev.text}</div>
                        <div className="bg-red-200 w-[150px] my-[30px] h-[40px] rounded-[12px] flex justify-center items-center">
                            <Link to={lev.link}>
                                learn more <FontAwesomeIcon icon={faArrowRight} className="ml-[5px]" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
}

export default MainContent;
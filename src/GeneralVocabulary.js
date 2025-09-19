import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function GeneralVocabulary() {
    // let store = Store();
    let [IELTS, setIELTS] = useState([])
    let [click, setClick] = useState(false)
    let [display, setDisplay] = useState(true)

    useEffect(() => {
        if (!click) return;

        axios.get("http://localhost:5000/Vocab")

            .then((res) => setIELTS(res.data.IELTS))

        setClick(false)
    }, [click]);

    let show;
    if (display) {
        show = <div>
            <Link to='/'>
                <div className="hover:bg-gray-100 bg-white h-[60px] w-[150px] flex justify-center items-center rounded-[15px] mb-[30px]">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
            </Link>
            <div onClick={(e) => {
                setDisplay(false)
                setClick(true)
            }}
                className="hover:bg-[#657166] w-[400px] h-[90px] my-[10px] bg-[#CFDBC4] font-black rounded-[15px] flex justify-start items-start pl-[8px]">
                <div className="font-black w-full">
                    <button>
                        Essential
                    </button>
                </div>
            </div>
            <div className="hover:bg-[#657166] w-[400px] h-[90px] my-[10px] bg-[#CFDBC4] font-black rounded-[15px] flex justify-start items-start pl-[8px]">
                <div className="font-black w-full">
                    <button>
                        504
                    </button>
                </div>
            </div>
            <div className="hover:bg-[#657166] w-[400px] h-[90px] my-[10px] bg-[#CFDBC4] font-black rounded-[15px] flex justify-start items-start pl-[8px]">
                <div className="font-black w-full">
                    <button>
                        High School
                    </button>
                </div>
            </div>
        </div>
    }
    else {
        show = <div onClick={() => {
            setDisplay(true)
            setIELTS([])
        }}>
            <div className="hover:bg-gray-100 bg-white h-[60px] w-[150px] flex justify-center items-center rounded-[15px] mb-[30px]">
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
        </div >
    }

    let words;
    if (IELTS.length > 0) {
        words = IELTS.map((item, index) => (
            <div key={index}
                className="w-[150px] h-[90px] bg-[#CFDBC4] rounded-[20px] px-[10px] m-[10px] flex justify-center items-center font-black cursor-pointer">
                {item.word}
            </div>
        ));
    } else {
        words = IELTS.map((item, index) => (
            <div key={index}
                className="w-[250px] h-[200px] bg-[#CFDBC4] rounded-[20px] px-[10px] cursor-pointer m-[10px]">
                <div className="border-b-[1px] border-solid border-white flex justify-between items-center h-[40px]">
                    <div>{item.word}</div>
                    <div>{item.pronunciation}</div>
                </div>
                <div className="mt-[10px]">{item.meaning}</div>
                <div className="text-orange-400 mt-[10px]">Example:</div>
                <div>{item.example}</div>
            </div>
        ));
    }

    return (
        <div>
            <div>
                {show}
            </div>
            <div className="flex flex-wrap">
                {words}
            </div>
        </div>

    );
}
export default GeneralVocabulary;

{/* {Object.keys(store).slice(0, 3).map((key) => (
                    <Link to={key}>
                        <div className="hover:bg-[#657166] w-[400px] h-[90px] my-[10px] bg-[#CFDBC4] font-black rounded-[15px] flex justify-start items-start pl-[8px] ">
                            <div>
                                <div>
                                    {key}

                                </div>
                            </div>
                        </div>

                    </Link>
                ))} */}
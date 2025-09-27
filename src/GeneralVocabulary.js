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
    let [showCategories, setShowCategories] = useState(true)
    let [openWord, setOpenWord] = useState(null)

    useEffect(() => {
        if (!click) return;

        axios.get("http://localhost:5000/Vocabs")

            .then((res) => {
                setIELTS(res.data.IELTS)
            })

        setClick(false)
    }, [click]);


    let renderCards;
    if (showCategories) {
        renderCards = <div>
            <Link to='/'>
                <div className="hover:bg-gray-100 bg-white h-[60px] w-[150px] flex justify-center items-center rounded-[15px] mb-[30px]">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
            </Link>
            <div onClick={(e) => {
                setShowCategories(false)
                setClick(true)
            }}
                className="hover:bg-[#657166] w-[400px] h-[90px] my-[10px] bg-[#CFDBC4] font-black rounded-[15px] flex justify-start items-start pl-[8px]">
                <div className="font-black w-full">
                    <button>
                        IELTS
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
        renderCards = <div onClick={() => {
            setShowCategories(true)
            setIELTS([])
        }}>
            <div className="hover:bg-gray-100 bg-white h-[60px] w-[150px] flex justify-center items-center rounded-[15px] mb-[30px]">
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
        </div >
    }
    function openWordCard(word) {
        setOpenWord(word);


    }

    function closeWordCard() {
        setOpenWord("close");

    }

    function renderWordCards() {
        let IELTSwords;
        if (IELTS.length > 0) {
            IELTSwords = IELTS.map((item, index) => {
                if (openWord === item.word) {
                    return (
                        <div onClick={closeWordCard} key={index}
                            className="w-[250px] min-h-[200px] bg-[#FCF0E3] rounded-[20px] px-[10px] m-[10px] cursor-pointer s-[10px]">
                            <div className="border-b-[1px] border-solid border-white  flex justify-between items-center h-[40px]">
                                <div className="pronunciation">{item.pronunciation}</div>
                            </div>
                            <div className="mt-[13px]">{item.meaning}</div>
                            <div className="text-orange-400 mt-[10px]">Example:</div>
                            <div>{item.example}</div>
                        </div>
                    );
                } else {
                    return (
                        <div onClick={() => openWordCard(item.word)} key={index}
                            className="w-[160px] h-[99px] bg-[#FCF0DC] rounded-[20px] px-[10px] m-[10px] flex justify-center items-center cursor-pointer">
                            {item.word}
                        </div>
                    );
                }
            });
        }

        return IELTSwords;
    }









    return (
        <div>
            <div>
                {renderCards}
            </div>
            <div className="flex flex-wrap">
                {renderWordCards()}

            </div>
        </div>

    );
}
export default GeneralVocabulary;

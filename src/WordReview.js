import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';
function WordReview() {
    const [IELTS, setIELTS] = useState([]);
    let [display, setDisplay] = useState([]);
    let [showMeaning, setShowMeaning] = useState("onlyVocab")


    useEffect(() => {
        axios.get("http://localhost:5000/Vocabs")
            .then(res => {
                const words = res.data.IELTS;
                setIELTS(words);


                if (words.length > 0) {
                    let randomIndex = Math.floor(Math.random() * words.length);
                    setDisplay(words[randomIndex]);
                }
            })

    }, [])

    const nextWord = () => {
        if (IELTS.length > 0) {
            let randomIndex = Math.floor(Math.random() * IELTS.length);
            setDisplay(IELTS[randomIndex]);
        }
    };


    function randomWords() {
        if (showMeaning === "onlyVocab") {
            return (
                <div>
                    <div
                        onClick={() => setShowMeaning("mean")}>
                        <div className='bg-yellow-50 text-black flex justify-center items-center h-[370px] rounded-[15px] py-[10px]'>
                            {display.word}
                        </div>

                    </div>
                </div>
            )
        } else {
            return (
                <div onClick={() => setShowMeaning("onlyVocab")}
                    className='bg-yellow-50 text-black h-[370px] rounded-[15px] py-[10px]'>
                    <div className='flex justify-between mx-[15px] border-solid border-b-[1px] border-[gray] h-[30px] items-center'>
                        <div>
                            {display.word}
                        </div>
                        <div>
                            {display.pronunciation}
                        </div>
                    </div>
                    <div className='flex px-[10px] flex-col'>
                        {display.meaning}
                        <div className='text-orange-200'>
                            Example :
                        </div>
                        <div>{display.example}</div>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="w-[320px] h-[460px] bg-[#C38EB4] rounded-[15px]">
                    <div className="flex justify-center">
                        <div className="w-[300px]">
                            <Link to='/'>
                                <FontAwesomeIcon icon={faMultiply} />
                            </Link>
                            <div>
                                {randomWords()}
                            </div>

                            <div className='mt-[8px]'>
                                <div className="flex">
                                    <div className='bg-red-300 flex justify-center items-center rounded-[15px] w-[120px] mr-[40px] ml-[12px] h-[50px]'>
                                        NO
                                    </div>
                                    <div
                                        onClick={nextWord}
                                        className=" bg-green-300 flex justify-center items-center rounded-[15px] w-[120px] h-[50px] "
                                    >
                                        YES
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex justify-center">
                <div className='w-[320px] h-[450px] bg-[#C38EB4] rounded-[15px]'>
                    <div className='flex justify-center'>
                        <div className="w-[300px]">

                            {renderWordCards()}

                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default WordReview;
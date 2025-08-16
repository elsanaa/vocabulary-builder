import React, { useEffect, useState } from 'react';
import Store from './Store';

function WordReview() {
    let { Essential, HighSchool, Five0Four } = Store();
    let allWords = [...Essential, ...HighSchool, ...Five0Four];
    let [randomWord, setRandomWord] = useState();
    let [showMeaning, setShowMeaning] = useState(false);

    function getRandomElement() {
        let randomIndex = Math.floor(Math.random() * allWords.length);
        return allWords[randomIndex];
    };

    function selectRandomName() {
        let randomUser = getRandomElement(allWords);
        setRandomWord(randomUser);
        setShowMeaning(false);
    };

    useEffect(() => {
        selectRandomName();
    }, []);

    function mean() {
        setShowMeaning(!showMeaning)
    };

    return (
        <>
            <div className='w-[300px] h-[350px] bg-[#99CDD8] rounded-[10px] flex justify-center font-black text-[20px] cursor-pointer' onClick={mean}>
                {randomWord ? (showMeaning ?
                    <>
                        <div className='flex justify-center'>
                            <div className='w-[250px]'>
                             <div className='border-b-[1px] border-solid border-black w-[250px] h-[40px] flex items-center'>
                                {randomWord.word}
                                </div>
                                <div className='mt-[5px] font-medium'>
                                    {randomWord.meaning}
                                </div>
                                
                            </div>
                        </div>
                        <div>

                        </div>
                    </>
                    :
                    <div className='flex items-center'>
                    {randomWord.word}
                    </div>
                ) : ""}
            </div>
            <div className='flex flex-row justify-between mt-[10px]'>
                <div
                    className='w-[140px] h-[50px] bg-red-300 rounded-[10px] flex justify-center items-center cursor-pointer'>
                    NO
                </div>
                <div className='w-[140px] h-[50px] bg-green-200 rounded-[10px] flex justify-center items-center cursor-pointer' onClick={selectRandomName}>
                    YES
                </div>
            </div>
        </>
    );
}

export default WordReview;
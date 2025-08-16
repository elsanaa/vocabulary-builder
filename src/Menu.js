import React, { useState } from 'react';
import WordReview from './WordReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply, faX } from '@fortawesome/free-solid-svg-icons';

function Menu() {

    let [display, setDisplay] = useState("onClick");

    function onMouse() {
        setDisplay("onClick")
    }

    function review() {
        if (display === "onClick") {
            return (
                <div onClick={mouseOut} className='w-[80px] pl-[5px] hover:text-[#657166]'>
                    WordReview
                </div>
            )
        } else {
            return (
                <>
                    <div className='w-[80px] pl-[5px] text-[#657166]'>
                        WordReview
                    </div>
                    <div>

                        <div className="flex justify-center items-center fixed z-1 left-0 top-0 w-full h-full overflow-auto bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)]">
                            <div className="relative bg-orange-50 m-auto p-0 w-[400px] h-[500px] border-1 border-solid border-[#888] rounded-[15px]">
                                <div className='w-[400px] h-[40px]'>
                                    <div className='flex justify-center items-center w-[30px] h-[30px] float-right hover:bg-[#99CDD8] hover:rounded-[10px] m-[5px]' onClick={onMouse}>
                                        <FontAwesomeIcon icon={faMultiply} />
                                    </div>
                                </div>

                                <div className='flex justify-center'>
                                    <div className='w-[300px]'>
                                        <WordReview />
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </>

            )
        }
    }

    function mouseOut() {
        setDisplay("noClick")
    }

    return (
        <>
            <div className='bg-[#99CDD8] text-[14px] text-black h-[60px] flex items-center cursor-pointer'>
                <div className='w-[55px] hover:text-[#657166]'>
                    Quiz
                </div>
                <div className='w-[80px] pl-[5px] hover:text-[#657166]'>
                    Exercises
                </div>
                <div className='w-[80px] pl-[5px]  hover:text-[#657166]'>
                    Flash card
                </div>
                <div className='w-[80px] pl-[5px] hover:text-[#657166]'>
                    About
                </div>
                <div className='w-[60px] pl-[5px] hover:text-[#657166]'>
                    Help
                </div>
                <div className='w-[80px] pl-[5px]'>
                    {review()}
                </div>
            </div>

        </>

    )
}

export default Menu;
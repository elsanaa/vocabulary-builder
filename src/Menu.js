import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Menu() {

    return (
        <div>
            <div className='flex justify-between '>
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
                        <Link to="review">WordReview</Link>
                    </div>
                </div>
                <div className='flex items-center text-black'>
                    <div className='w-[80px] pl-[5px] hover:text-[#657166]'>
                        <Link to="Sign">Sign up</Link>
                    </div>
                    <div className='w-[80px] pl-[5px] hover:text-[#657166]'>
                        <Link to="Log">log in</Link>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Menu;
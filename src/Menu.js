import React, { useState } from 'react';

function Menu() {
  return ( 
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
            <div className='w-[80px] pl-[5px] hover:text-[#657166]'>
                Help
            </div>
        </div>
    )
}

export default Menu;
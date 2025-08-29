import { faEnvelope, faLock, faMultiply, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function SignUp() {

    return (
        <div>
            <div className="flex justify-center">
                <div className='w-[400px] h-[400px] bg-[#C38EB4] rounded-[15px]'>
                    <Link to="/"><FontAwesomeIcon icon={faMultiply} className="mr-[10px] mt-[10px] w-[20px] float-right h-[20px]" /></Link>
                    <div className="flex justify-center w-[400px] h-[500px]  rounded-[15px]">
                        <div className="flex flex-col">
                            <div className="text-[#0E1B48] text-[20px] flex justify-center w-[400px] h-[50px]">Sign Up</div>
                            <div className="flex justify-center w-[400px] pt-[20px]">
                                <FontAwesomeIcon icon={faUser} className="mr-[10px] text-[30px] mt-[5px] text-gray-500" />
                                <input placeholder="Name" className="w-[300px] h-[50px] bg-gray-50 outline-none pl-[5px]" />
                            </div>
                            <div className="flex justify-center w-[400px] pt-[20px]">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-[10px] text-[30px] mt-[5px] text-gray-500 " />
                                <input placeholder="Email" className="w-[300px] h-[50px] bg-gray-50 outline-none pl-[5px]" />
                            </div>
                            <div className="flex justify-center w-[400px] pt-[20px]">
                                <FontAwesomeIcon icon={faLock} className="mr-[10px] text-[30px] mt-[5px] text-gray-500 " />
                                <input placeholder="Password" className="w-[300px] h-[50px] bg-gray-50 outline-none pl-[5px]" />
                            </div>
                            <div className="w-[280px] mt-[10px]">
                                <div className="flex justify-center cursor-pointer">forgot password?</div>
                            </div>
                            <div className="flex justify-center h-[60px] items-end cursor-pointer">
                                <div className="w-[350px]">
                                    <div className="bg-[#26425A] h-[40px] flex justify-center items-center rounded-[15px]">
                                        Sign Up
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
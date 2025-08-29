import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";


function MainContent() {
    return (
        <div>
            <div className=" border-b-[1px] border-solid border-[black] mb-[10px]">
                <div className="font-black text-[30px] w-full">
                    A dictionary for learning
                </div>

                <div className="text-[20px] text-gray-200">
                    Whether you’re looking up a specific word or just browsing,<br />
                    you’ll find a universe of friendly explanations and fun activities<br />
                    designed to educate and entertain.
                </div>
                <div className="bg-red-200 w-[150px] my-[30px] h-[40px] rounded-[12px] flex justify-center items-center">
                    <Link to="Dictionary">
                        learn more <FontAwesomeIcon icon={faArrowRight} className="ml-[5px]" />
                    </Link>
                </div>
            </div>
            <div className="  border-b-[1px] border-solid border-[black] h-[236px] mb-[10px]">
                <div className="float-right">
                    <div className="font-black text-[30px]">
                        Master Vocabulary for Any English Test

                    </div>
                    <div className="text-[20px] text-gray-200">
                        Specialized collections for Duolingo, Pearson, IELTS, TOEFL, and more.<br />
                        Build your vocabulary efficiently with our targeted approach.

                    </div>
                    <div className="bg-red-200 w-[150px] h-[40px] my-[30px] rounded-[12px] flex justify-center items-center">
                        <Link to="Vocabulary">
                            learn more <FontAwesomeIcon icon={faArrowRight} className="ml-[5px]" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="  border-b-[1px] border-solid border-[black] h-[250px] mb-[10px]">

                <div className="font-black text-[30px]">
                    Specialized Vocabulary Collections
                </div>
                <div className="text-[20px] text-gray-200">
                    Choose from our extensive library of vocabulary collections <br />
                    tailored to specific English proficiency tests.
                </div>
                <div className="bg-red-200 w-[150px] h-[40px] my-[30px] rounded-[12px] flex justify-center items-center">

                    learn more <FontAwesomeIcon icon={faArrowRight} className="ml-[5px]" />

                </div>
            </div>
        </div>
    );
}

export default MainContent;
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './vocabulary.svg';
import React from "react";

function About() {
    return (
        <div className=" text-[20px] flex justify-between ">
            <div className="flex flex-col">
            <div className="C pb-[10px]">
                Why Online Vocabulary Builder
            </div>
            <div>
                <div className=" hover:text-[#657166] cursor-pointer w-[550px]">
                    <FontAwesomeIcon icon={faCheck} className="text-[#657166] text-[20px] pr-[5px]" />
                    this website will help you to learn more words and phrases.
                </div>
                <div className=" hover:text-[#657166] cursor-pointer w-[400px]">
                    <FontAwesomeIcon icon={faCheck} className="text-[#657166] text-[20px] pr-[5px]" />
                    you can use it without a teacher.
                </div>
                <div className=" hover:text-[#657166] cursor-pointer w-[550px]">
                    <FontAwesomeIcon icon={faCheck} className="text-[#657166] text-[20px] pr-[5px]" />
                    Extensive practice in vocabulary building and usage.
                </div>
                <div className=" hover:text-[#657166] cursor-pointer w-[650px]">
                    <FontAwesomeIcon icon={faCheck} className="text-[#657166] text-[20px] pr-[5px]" />
                    vocabulary grouped into 3 level.[basic,intermediate,advanced].
                </div>
                <div className=" hover:text-[#657166] cursor-pointer w-[650px]">
                    <FontAwesomeIcon icon={faCheck} className="text-[#657166] text-[20px] pr-[5px]" />
                    Get vocabulary practice anytime and anywhere on different devices.<br />
                </div>
            </div>
            </div>
            <div>
                <img src={logo} className="w-[250px] h-[190px]" />
            </div>
        </div>
    )
}

export default About;
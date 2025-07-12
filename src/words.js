import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

function Words() {
    let [display, setDisplay] = useState(false);

   
    function show() {
        setDisplay(true)
    }
    function wordList() {
        if (display == false) {
            return (
                <div onClick={show} className="h-[300px] w-[250px] flex justify-start items-center">
                    <div className="text-[20px] text-black w-[250px] cursor-grab active:cursor-grabbing h-[60px] bg-[#DAEBE3] flex justify-center items-center rounded-[15px]">
                        Display words
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div onClick={hide} className="py-[120px] flex justify-start items-center ">
                        <div className="text-[20px] text-black w-[250px] cursor-grab active:cursor-grabbing h-[60px] bg-[#DAEBE3] flex justify-center items-center rounded-[15px]">
                            Display words
                        </div>
                    </div>
                    <div className="flex flex-row pb-[30px]">
                        <div className="w-[280px] h-[200px] bg-[#FDE8D3] mr-[30px] px-[10px] rounded-[20px]">
                            <div className="border-solid border-b-[1px] flex justify-between h-[40px] border-[#F3C3B2] flex items-center">
                                <div>
                                    gloomy
                                </div>
                                <div className="text-[#657166]">
                                    (glu'mi)
                                </div>
                            </div>
                            <div className="pt-[10px]">
                                dark ; dim ; in low spririts
                            </div>
                            <div className="pt-[10px]">
                                <div className="text-[#E57734]">Example:</div>
                                My cousin <b>gloomy</b> becaause his best friend had moved away.
                            </div>
                        </div>
    <div className="w-[280px] h-[200px] bg-[#FDE8D3] mr-[30px] px-[10px] rounded-[20px]">
        <div className="border-solid border-b-[1px] flex justify-between h-[40px] border-[#F3C3B2] flex items-center">
            <div>
                molest
            </div>
            <div className="text-[#657166]">
                (mə'lest)
            </div>
        </div>
        <div className="pt-[10px]">
            interfere with and trouble ; disturb
        </div>
        <div className="pt-[10px]">
            <div className="text-[#E57734]">Example:</div>
                the gand did a thorough job of <b>molesting</b> the  people in the park.
        </div>
    </div>
                        <div className="w-[280px] h-[200px] bg-[#FDE8D3] mr-[30px] px-[10px] rounded-[20px]">
                            <div className="border-solid border-b-[1px] flex justify-between h-[40px] border-[#F3C3B2] flex items-center">
                                <div>
                                    feeble
                                </div>
                                <div className="text-[#657166]">
                                    (fe'bl)
                                </div>
                            </div>
                            <div className="pt-[10px]">
                                weak
                            </div>
                            <div className="pt-[10px]">
                                <div className="text-[#E57734]">Example:</div>
                                    The <b>feeble</b> old man collapsed on the sidewalk.
                            </div>
                        </div>
                        <div className="w-[280px] h-[200px] bg-[#FDE8D3] mr-[30px] px-[10px] rounded-[20px]">
                            <div className="border-solid border-b-[1px] flex justify-between h-[40px] border-[#F3C3B2] flex items-center">
                                <div>
                                    cease
                                </div>
                                <div className="text-[#657166]">
                                    (ses)
                                </div>
                            </div>
                            <div className="pt-[10px]">
                                stop
                            </div>
                            <div className="pt-[10px]">
                                <div className="text-[#E57734]">Example:</div>
                                <b>Cease</b> trying to do more than you can.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row pb-[30px]">
                        <div className="w-[280px] h-[200px] bg-[#FDE8D3] mr-[30px] px-[10px] rounded-[20px]">
                            <div className="border-solid border-b-[1px] flex justify-between h-[40px] border-[#F3C3B2] flex items-center">
                                <div>
                                    outlaw
                                </div>
                                <div className="text-[#657166]">
                                    (out'lo)
                                </div>
                            </div>
                            <div className="pt-[10px]">
                                an exile ; an outcast ; a criminal ; to declare unlawful
                            </div>
                            <div className="pt-[10px]">
                                <div className="text-[#E57734]">Example:</div>
                                    The best -known <b>outlaw</b> of the American West was jesse James.
                            </div>
                        </div>
                        <div className="w-[280px] h-[200px] bg-[#FDE8D3] mr-[30px] px-[10px] rounded-[20px]">
                            <div className="border-solid border-b-[1px] flex justify-between h-[40px] border-[#F3C3B2] flex items-center">
                                <div>
                                    promote
                                </div>
                                <div className="text-[#657166]">
                                    (pre mot')
                                </div>
                            </div>
                            <div className="pt-[5px]">
                                raise in rank or importance ; help to grow and develp ; help to organize
                            </div>
                            <div className="pt-[3px]">
                                <div className="text-[#E57734]">Example:</div>
                                Students who pass the test will be <b>promoted</b> to the next grade.
                            </div>
                        </div>
                        <div className="w-[280px] h-[200px] bg-[#FDE8D3] mr-[30px] px-[10px] rounded-[20px]">
                            <div className="border-solid border-b-[1px] flex justify-between h-[40px] border-[#F3C3B2] flex items-center">
                                <div>
                                    excessive
                                </div>
                                <div className="text-[#657166]">
                                    (ek ses' iv)
                                </div>
                            </div>
                            <div className="pt-[10px]">
                                too much ; too great ; extreme
                            </div>
                            <div className="pt-[10px]">
                                <div className="text-[#E57734]">Example:</div>
                                Numerous attempts have been made to outlaw jet planets that make <b>excessive</b> noise.
                            </div>
                        </div>
                        <div className="w-[280px] h-[200px] bg-[#FDE8D3] mr-[30px] px-[10px] rounded-[20px]">
                            <div className="border-solid border-b-[1px] flex justify-between h-[40px] border-[#F3C3B2] flex items-center">
                                <div>
                                    retain
                                </div>
                                <div className="text-[#657166]">
                                    (ri tan')
                                </div>
                                </div>
                                <div className="pt-[6px]">
                                    keep ; remember ; employ by payment of a fee
                                </div>
                                <div className="pt-[6px]">
                                    <div className="text-[#E57734]">Example:</div>
                                    China dishes have the unique quality of <b>retaining</b> heat longer than metal pans.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row pb-[30px]">
                        <div className="w-[280px] h-[200px] bg-[#FDE8D3] mr-[30px] px-[10px] rounded-[20px]">
                            <div className="border-solid border-b-[1px] flex justify-between h-[40px] border-[#F3C3B2] flex items-center">
                                <div>
                                    absurd
                                </div>
                                <div className="text-[#657166]">
                                    (ab serd')
                                </div>
                            </div>
                            <div className="pt-[10px]">
                                plainly not true or sensible ; foolish
                            </div>
                            <div className="pt-[10px]">
                                <div className="text-[#E57734]">Example:</div>
                                It was <b>absurd</b> to believe the fisherman's tall tale.
                            </div>
                        </div>
                        <div className="w-[280px] h-[200px] bg-[#FDE8D3] mr-[30px] px-[10px] rounded-[20px]">
                            <div className="border-solid border-b-[1px] flex justify-between h-[40px] border-[#F3C3B2] flex items-center">
                                <div>
                                    conflict
                                </div>
                                <div className="text-[#657166]">
                                   (kan' flikt)
                                </div>
                            </div>
                            <div className="pt-[5px]">
                                direct opposition ; disagreement
                            </div>
                            <div className="pt-[5px]">
                                <div className="text-[#E57734]">Example:</div>
                                Our opinions about the company's success in the last decade are in <b>conflict</b> with what the records show.
                            </div>
                        </div>
                        <div className="w-[280px] h-[200px] bg-[#FDE8D3] mr-[30px] px-[10px] rounded-[20px]">
                            <div className="border-solid border-b-[1px] flex justify-between h-[40px] border-[#F3C3B2] flex items-center">
                                <div>
                                    minority
                                </div>
                                <div className="text-[#657166]">
                                    (me nor' e te)
                                </div>
                            </div>
                            <div className="pt-[5px]">
                                smaller number of part ; less than half
                            </div>
                            <div className="pt-[5px]">
                                <div className="text-[#E57734]">Example:</div>
                                Only a small <b>minority</b> of the neighborhood didn't want a new park.
                            </div>
                        </div>
                        <div className="w-[280px] h-[200px] bg-[#FDE8D3] mr-[30px] px-[10px] rounded-[20px]">
                            <div className="border-solid border-b-[1px] flex justify-between h-[40px] border-[#F3C3B2] flex items-center">
                                <div>
                                    fiction
                                </div>
                                <div className="text-[#657166]">
                                    (fik'shen)
                                </div>
                            </div>
                            <div className="pt-[10px]">
                                that which is imagined or made up
                            </div>
                            <div className="pt-[10px]">
                                <div className="text-[#E57734]">Example:</div>
                                The story that the president had died was <b>fiction</b>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function hide() {
        setDisplay(false)
    }

    return (
        <div>
            <div className="flex justify-center h-[100px] items-end">
                <input className="w-[900px] rounded-[30px] h-[60px] pl-[30px] mr-[5px] outline-none " placeholder="Search" />
                <div className="w-[100px] h-[60px] bg-[#CFDBC4] rounded-[30px] flex justify-center items-center cursor-pointer"><FontAwesomeIcon icon={faSearch} /></div>
            </div>
            <div>
                {wordList()}
              
            </div>
        </div>
    )
}

export default Words;


import { useState } from "react";
import Store from "./Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
    let { Essential, HighSchool, Five0Four } = Store();
    let [searchBox, setSearchBox] = useState("");
    let allWords = [...Essential, ...HighSchool, ...Five0Four];

    let filtered = allWords.filter(items =>
        items.word.toLowerCase().includes(searchBox.toLowerCase())
    )
    let unique = Array.from(
        new Map(filtered.map(item => [item.word, item])).values()
    );

    function vocabulary() {
        if (!searchBox) {
            return null
        } else if (unique.length > 0) {
            return (
                <div>
                    {unique.map((item) => (
                        <div className="w-[900px] items-center flex flex-row min-h-[60px] bg-white border-[2px] border-[#99CDD8] border-solid rounded-[30px] my-[5px] px-[30px] cursor-pointer">
                            <div className="text-red-300 mr-[10px]">
                                {item.word}
                            </div> :
                            <div className="text-[#657166] ml-[10px]">
                                {item.meaning}
                            </div>
                        </div>
                    ))}
                </div>
            )
        } else {
            return (
                <div> not found!</div>
            )
        }
    }
    return (
        <div>
            <div className="flex flex-row justify-end">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchBox}
                    onChange={(e) => setSearchBox(e.target.value)}
                    className="w-[900px] rounded-[30px] outline-none pl-[30px] h-[60px] relative"
                />
                <div className="h-[60px] w-[100px] rounded-[30px] bg-[#CFDBC4] flex justify-center items-center ml-[5px] absolute cursor-pointer">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>

            <div>{vocabulary()}</div>
        </div>
    );
}

export default Search;
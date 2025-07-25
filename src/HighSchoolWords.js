import React, { useState } from "react";

function School() {

    const words = [
        { word: "enjoy", pronunciation: "(bɪldɪŋ)", meaning: "like something", example: "The women enjoy riding her bicycle." },
        { word: "travel", pronunciation: "(tra vel)", meaning: "go to faraway place on vocation or buisiness", example: "They will travel to Argentina this summer." },
        { word: "Achieve ", pronunciation: "(əˈtʃiːv)", meaning: "to succeed in doing something after hard work", example: "She worked hard to achieve her goals" },
        { word: "Benefit", pronunciation: "(benɪfɪt)", meaning: "", example: " good or helpful result or effect", example: "Daily exercise has many benefits"  },
        { word: "Create ", pronunciation: "(kriˈeɪt)", meaning: "to make something new", example: "	He loves to create art with recycled materials" },
        { word: "Decide ", pronunciation: "(dɪˈsaɪd)", meaning: "to make a choice ",  example: "	I can't decide what to wear today."},
        { word: "Effort", pronunciation: "(efərt)", meaning: "physical or mental energy used to do something ",example: "You need to put more effort into your studies." },
        { word: "Famous", pronunciation: "(feɪməs)", meaning: "known by many people",  example: "She is a famous singer in her country."},
        { word: "Goal ", pronunciation: "(ɡoʊl)", meaning: "something you aim to achieve", example:"My goal is to become a software engineer" },
        { word: "Honest ", pronunciation: "(ɑːnɪst)", meaning: "always telling the truth", example: "He is an honest person who never lies." },
        { word: "Improve ", pronunciation: "(ɪmˈpruːv)", meaning: "to become better ", example: "	I want to improve my English vocabulary." },
        { word: "Journey ", pronunciation: "(dʒɜːrni)", meaning: "traveling from one place to another", example: "The journey took five hours by train" },
        { word: "Listen", pronunciation: "(lɪsən)", meaning: "to give attention to someone or something ", example: "Reading gives you a lot of knowledge." },
        { word: "Motivate ", pronunciation: "(moʊtɪveɪt)", meaning: "to make someone want to do something ", example: "Please listen carefully to the instructions." },
        { word: "Necessary", pronunciation: "( nesəseri)", meaning: "something  you must have or do", example: "Her speech motivated me to work harder."},
        { word: "Opportunity", pronunciation: "(ɒpərˈtuːnət)", meaning: "a chance to do something ", example: "Water is necessary for survival." },
        { word: "Practice", pronunciation: "(præktɪs)", meaning: "to do something regularly to improve at it ", example: "You need to practice every day to get better." },
        { word: "Respect", pronunciation: "(rɪˈspek)", meaning: "showing consideration and honor", example: "We should respect our parents and teachers." },
        { word: "Success", pronunciation: "(səkˈses)", meaning: "achieving what you want ", example: "Hard work is the key to success." },
        { word: "Understand", pronunciation: "(ˌʌndərˈstænd)", meaning: "to know the meaning of something", example: "	I understand the lesson now." },
        { word: "Value", pronunciation: "(vælju)", meaning: "the importance or worth of something", example: " value your advice very much." },
       

    ];

    return (
        <div className=" flex flex-wrap py-[20px] gap-4">
            {words.map((item) => (
                <Card word={item.word} meaning={item.meaning} pronunciation={item.pronunciation} example={item.example} />
            ))}
        </div>
    );
}

function Card({ word, pronunciation, meaning, example }) {
    const [showMeaning, setShowMeaning] = useState(false);

    const getContent = () => {
        if (showMeaning) {
            return (
                <div className="px-[10px] h-[200px] w-[250px]">
                    <div className="flex flex-row justify-between items-center border-b-[1px] border-black border-solid h-[35px]">
                        <div>{word}</div>
                        <div className="text-sm font-normal mt-1 ">{pronunciation}</div>
                    </div>
                    <div className="pt-[10px]">{meaning}</div>
                    <div className="text-[#E57734] pt-[10px]">Example:</div>
                    <div className="pb-[10px]">{example}</div>
                </div>
            );
        } else {
            return word;
        }
    };

    const getClass = () => {
        if (showMeaning == false) {
            return (
                "w-[150px] h-[60px] bg-white text-xl flex justify-center items-center"
            )
        } else {
            return "w-[250px] h-[200px] bg-[#FDE8D3]";
        }

    };

    return (
        <div
            onClick={() => setShowMeaning(!showMeaning)}
            className={"cursor-pointer transition-all duration-300 flex flex-col items-center justify-center font-semibold rounded-xl shadow-md " +
                getClass()
            }
        >
            {getContent()}
        </div>
    );
}
export default School;
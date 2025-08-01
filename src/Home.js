import React from "react";
import { Link } from "react-router-dom";
import Store from "./Store";

function Home() {
    const store = Store();

    return (
        <div className="flex justify-between">
            {Object.keys(store).map((key) => (
                <Link to={key}>
                    <div className="w-[150px] h-[90px] bg-[#CFDBC4] font-black rounded-[15px] flex justify-center items-center ">
                        <div>
                            <div>
                                {key}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

        </div>
    );
}

export default Home;
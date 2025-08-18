import Menu from "./Menu";
import Search from "./Search";
import About from "./About";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <div className="flex justify-center bg-[#99CDD8]">
                <div className='w-[1200px]'>
                    <Menu />

                </div>
            </div>
            <div className="flex justify-center bg-gradient-to-t from-[#CFDBC4] to-[#E8B298]">
                <div className='w-[1200px]'>
                    <div className='flex justify-center'>
                        <div className='w-[900px] mt-[30px]'>
                            <Search />
                        </div>
                    </div>

                    <div className='flex justify-center content-center mt-[30px]'>
                        <div className='w-[1200px]'>
                            <Outlet/>
                        </div>
                    </div>
                    <div className='flex items-end h-[400px]'>
                        <About />
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Layout;

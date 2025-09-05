import Menu from "./Menu";
import Search from "./Search";
import About from "./About";
import { Outlet } from "react-router-dom";


function Layout() {
    return (
        <div>
            <div className="fixed w-full">
                <div className="flex justify-center bg-[#99CDD8]">
                    <div className='w-[1200px]'>
                        <Menu />
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-[#E8B298]">
                <div className='w-[1200px]'>
                    <div className='flex justify-center min-h-[150px] mt-[60px]'>
                        <div className='w-[900px] flex items-center'>
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-gradient-to-t from-[#CFDBC4] to-[#E8B298] min-h-[500px] items-start">
                <div className='w-[1200px]'>

                    <div className="flex items-center">
                        <div className='flex justify-center items-start mt-[30px] flex-col'>
                             <div className='w-[1200px] min-h-[500px] pt-[50px]'>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-[#CFDBC4] pb-[30px]">
                <div className="w-[1200px]">
                    <About />
                </div>
            </div>
        </div>
    )
};

export default Layout;

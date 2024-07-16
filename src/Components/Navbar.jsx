import React from "react"
import { TiThMenu } from "react-icons/ti"
import { Link } from "react-scroll"

function Navbar() {
    return (
        <div className="flex w-full items-center justify-between bg-zinc-900 px-6 py-4 text-white sm:px-8 md:py-6 lg:px-20">
            <div className="flex items-start justify-center">
                <h1 className="text-nowrap text-[4vh] font-bold lg:text-[5vh]">
                    Huzaifa Abbas
                </h1>
            </div>
            <div className="links flex md:gap-8 lg:gap-20">
                {/* {["Home", "Projects", "About", "Contact us"].map(
                    (item, index) => (

                        <Link
                            to ={(index === 1) ? "projects" : "" }
                            key={index}
                            className={`hidden cursor-pointer text-[1.8vw] font-light capitalize hover:text-blue-700 md:text-[1.8vw]  lg:text-[1.6vw] md:block`}
                        >
                            {" "}
                            {item}{" "}
                        </Link>
                    ),
                )} */}
                <Link
                    to= "home" smooth={true} duration={500}
                    className={`hidden cursor-pointer text-[1.8vw] font-light capitalize hover:text-blue-700 md:block md:text-[1.8vw] lg:text-[1.6vw]`}
                >
                    Home
                </Link>

                <Link
                    to= "projects" smooth={true} duration={500}
                    className={`hidden cursor-pointer text-[1.8vw] font-light capitalize hover:text-blue-700 md:block md:text-[1.8vw] lg:text-[1.6vw]`}
                >
                    Projects
                </Link>
                <Link
                    to= "about" smooth={true} duration={500}
                    className={`hidden cursor-pointer text-[1.8vw] font-light capitalize hover:text-blue-700 md:block md:text-[1.8vw] lg:text-[1.6vw]`}
                >
                    About
                </Link>

                <Link
                    to= "projects" smooth={true} duration={500}
                    className={`hidden cursor-pointer text-[1.8vw] font-light capitalize hover:text-blue-700 md:block md:text-[1.8vw] lg:text-[1.6vw]`}
                >
                    Contact
                </Link>
                <span className="text-[6vh] font-bold text-[#1693b5] md:hidden">
                    <TiThMenu />
                </span>
            </div>
        </div>
    )
}

export default Navbar

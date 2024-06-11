import React from "react"
import { TiThMenu } from "react-icons/ti"

function Navbar() {
    return (
        <div className="flex w-full items-center justify-between  bg-zinc-900 px-6 py-4 text-white sm:px-8 md:py-6 lg:px-20">
            <div className="flex items-start justify-center">
                <h1 className="text-nowrap text-[4vh] font-bold lg:text-[5vh]">
                    Huzaifa Abbas
                </h1>
            </div>
            <div className="links flex md:gap-8 lg:gap-20">
                {["Home", "Projects", "About", "Contact us"].map(
                    (item, index) => (
                        <a
                            key={index}
                            className={`hidden cursor-pointer text-[1.8vw] font-light capitalize hover:text-green-600 md:text-[1.8vw]  lg:text-[1.6vw] md:block`}
                        >
                            {" "}
                            {item}{" "}
                        </a>
                    ),
                )}
                <span className="text-[6vh] font-bold text-[#1693b5] md:hidden">
                    <TiThMenu />
                </span>
            </div>
        </div>
    )
}

export default Navbar

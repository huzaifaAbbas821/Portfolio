import React from "react"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { FaInstagramSquare } from "react-icons/fa"

const icons = {
    FaGithub,
    FaInstagramSquare,
    FaLinkedinIn,
}

function Footer() {
    return (
        <div className="w-full bg-[#f7f7f7] md:px-20">
            <div className="flex h-[80%] w-full flex-col bg-[#f7f7f7] md:flex-row md:items-center md:justify-between">
                <div className="flex h-full w-full flex-col items-start px-4 md:w-3/4 lg:mb-[2vw] md:flex-wrap">
                    <h1 className="mt-16 text-[2em] lg:text-[2vw] font-bold">
                        Huzaifa Abbas
                    </h1>
                    <p className="mt-4 text-[1rem] lg:text-[1.4vw] font-normal">
                        A Frontend focused Web Developer building the Frontend
                        of Websites and <br /> Web Applications that leads to
                        the success of the overall product
                    </p>
                </div>
                <div className="my-4 flex h-full w-full flex-col items-start px-4 md:w-1/4">
                    <h1 className="text-3xl font-bold md:mt-16">Social</h1>
                    <div className="mt-4 flex items-start justify-between gap-4">
                        {["FaGithub", "FaLinkedinIn", "FaInstagramSquare"].map(
                            (item, index) => {
                                const IconComponent = icons[item]
                                return (
                                    <span key={index}>
                                        <IconComponent size={30} />
                                    </span>
                                )
                            },
                        )}
                    </div>
                </div>
            </div>

            <hr className="h-[4px] w-full bg-black" />
            <div className="mt-4 flex w-full items-center justify-center text-[0.8em] lg:text-[1.4vw]">
                <h1>© Copyright 2024 . Made by Huzaifa Abbas</h1>
            </div>
        </div>
    )
}

export default Footer

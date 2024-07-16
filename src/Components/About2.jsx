import React from "react"
import logo from "../assets/coder.svg"
import {Element} from 'react-scroll'

function About2() {
    return (
        <Element name="about" >
        <div id="about" className="min-h-[110vh] w-full md:my-4 px-[1rem] md:min-h-[100vh] lg:min-h-fit lg:mb-[13vw]">
            <hr className="mb-[2vw] h-[2px] w-full bg-zinc-500" />

            <div className="mb-[4vw] mt-[4vw] flex h-[70vh] w-full flex-row">
                <div className="About flex w-full flex-col items-center md:w-[50%] md:items-start md:justify-start md:px-[1.5em]">
                    <h1 className="text-center text-[6vh] font-bold text-[#1693b5] lg:text-[4vw]">
                        About Me
                    </h1>
                    <p className="isolate mx-2 my-4 mt-4 block w-[100%] text-wrap px-2 text-justify text-[3.1vh] text-white lg:mx-0 lg:px-0 lg:text-[1.6vw]">
                        Hi, I'm Huzaifa Abbas, a student who loves learning and
                        technology. Over the past year, I've dived into frontend
                        web development, creating websites that look great and
                        work smoothly. Using my skills, I am crafting websites
                        that catch the eye. I'm always eager to learn new things
                        and grow my skills. I'm excited to join a team where I
                        can contribute and keep learning. Thanks for visiting my
                        portfolio, and I look forward to connecting with you!
                    </p>
                    <h1 className="mt-[1vh] text-[6vh] font-bold text-[#1693b5] lg:text-[4vw]">
                        My Skills
                    </h1>
                    <div className="mt-2 flex w-[110%] flex-wrap items-center justify-center  px-2 md:items-center md:justify-center lg:px-0 lg:items-start lg:justify-start  ">
                        {[
                            "html",
                            "css",
                            "javascript",
                            "react",
                            "redux",
                            "tailwind",
                            "bootstrap",
                            "appwrite",
                            "c++",
                            "sfml",
                            "oop",
                            "figma",
                        ].map((item, index) => (
                            <span
                                key={index}
                                className=" rounded-[14px] mb-[1vh] mr-[1.5vh] border-[1px] border-gray-400 bg-black px-[1.4em] py-[0.4em] text-justify text-[2.3vh] font-medium text-gray-200 md:text-[2vw] lg:mb-[0.6em]  lg:mr-[1em]  lg:items-start  lg:p-auto   lg:text-[1.4vw]"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="image hidden w-[50%] md:block">
                    <div className="image mt-[6vw] flex w-full items-center justify-items-stretch">
                        <img className="bg-cover" src={logo} alt="" />
                    </div>
                </div>
            </div>
            {/* <hr className='w-full mt-[2rem] h-[4px] bg-gray-400' /> */}
        </div>
        </Element>
    )
}

export default About2

import React from "react"
import background from '../assets/download.jpg'

function LandingPage() {
    return (
        <div className="h-[90vh] w-full bg-zinc-900 pt-1 text-white"
        style={{backgroundImage:"url({background})"}}
        >
            <div className="mt-[3vh] flex h-[70vh] flex-col items-center justify-center px-[2vh]">
                <div>
                <h1 className="text-center mt-[7vh] text-[5vh] font-extrabold uppercase  tracking-widest lg:tracking-[0.3vw] text-white md:text-[5vw] lg:text-[4vw] md:tracking-normal ">
                    Hello, I'm{" "}
                    <span className="text-[2em ] block text-center tracking-wide text-[#1693b5] lg:inline-block md:tracking-wide lg:tracking-[0.3vw]">
                        {" "}
                        Huzaifa Abbas{" "}
                    </span>{" "}
                </h1>
                </div>
                <span className="mt-[5vh] text-center  text-pretty text-[3vh] font-thin  md:text-[2vw] lg:text-[1.6vw] lg:mt-10 lg:px-10">
                    {" "}
                    A web developer specialize in crafting websites to stand out
                    and deliver exceptional user experiences.{" "}
                    <br className="hidden md:block" /> Passionate about creating
                    seamless online journeys that resonate with users.
                </span>
                {/* <span className=" font-normal px-[2vh]  text-wrap text-justify text-[3vh] md:block md:text-[1.8vw]">
                    
                </span> */}
                <button className="mt-[6vh]  rounded-lg bg-[#1b5f8c] px-[1.4em] py-[0.4em] text-[3.2vh] font-semibold transition-transform hover:scale-x-110 hover:scale-y-110 hover:bg-[#1c2e66] lg:text-[2vw] md:transform md:py-[0.4em] md:text-2xl">
                    PROJECTS
                </button>
                
            </div>
            <div className="w-full px-20">
                {/* <hr className='w-full h-[2px] bg-zinc-500' /> */}
            </div>
        </div>
    )
}

export default LandingPage

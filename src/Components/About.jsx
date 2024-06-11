import React from "react"

function About() {
    return (
        <div className="w-full rounded-tl-3xl rounded-tr-3xl bg-zinc-900 text-white">
            <div className="flex w-full flex-col items-center justify-center">
                <div className="flex w-[60%] flex-col items-center justify-center text-wrap">
                    <h1 className="text-[4vw] font-semibold uppercase leading-[4.2vw] tracking-tight text-[#1693b5]">
                        About
                    </h1>
                    <p className="mt-4 text-center text-2xl font-medium">
                        Here you will find some of the personal and clients
                        projects that I created with each project containing its
                        own case study
                    </p>
                </div>
            </div>
            <div className="mt-10 flex w-full flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">MY SKILLS</h1>

                <div className="mt-10 flex w-[60%] flex-row flex-wrap items-center justify-center gap-16">
                    {[
                        "html",
                        "css",
                        "javascript",
                        "react",
                        "tailwind",
                        "bootstrap",
                        "appwrite",
                        "c++",
                        "sfml",
                        "oop",
                        "figma",
                    ].map((item) => (
                        <span className="rounded-lg bg-[#464870] px-10 py-4 text-center text-white">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About

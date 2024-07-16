import React from "react"
import bg from '../assets/webScraperImg.png'
import bg1 from '../assets/Todo.png'
import bg2 from '../assets/bg2.png'

// import { Link } from "react-router-dom"
import { Element } from 'react-scroll';

function Projects() {
    let users = [
        {
            title: "Blog Site",
            img: bg2,
            paragraph:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus animi, ullam, voluptatum maiores itaque distinctio vero, qui quasi numquam minus similique. Labore, sequi nihil! Mollitia voluptate minus voluptatum quasi veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            WLink: "https://appwrite-blog-site-coral.vercel.app/",
            GLink: "https://github.com/huzaifaAbbas821/appwriteBlogSite",
        },
        {
            title: "Web scrapper",
            img: bg,
            paragraph:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus animi, ullam, voluptatum maiores itaque distinctio vero, qui quasi numquam minus similique. Labore, sequi nihil! Mollitia voluptate minus voluptatum quasi veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            WLink: "https://huzaifaabbas821.github.io/Web-scraper/display/",
            GLink: "https://github.com/huzaifaAbbas821/Web-scraper",
        },
        {
            title: "Todo App",
            img: bg1,
            paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam et voluptatum reprehenderit ab, impedit error doloribus ullam laudantium consequuntur, itaque tempore rem iusto quaerat optio voluptate unde corporis quibusdam sint?" ,
            WLink:"https://todo-ten-chi-20.vercel.app/",
            GLink: "https://github.com/huzaifaAbbas821/todo",
        }
    ]

    return (
 
        <div className="mt-[5vh] w-full bg-zinc-900 px-2 py-20 text-white md:px-[2vw] lg:px-[2vw]">
            <hr className="h-[2px] w-full bg-zinc-500 md:mt-[4vw]" />
            <Element name="projects" >
            <div id="projects"  className="mt-[4vw] flex w-full flex-col items-center justify-center">
                <div className="flex w-[100%] flex-col items-center justify-center text-wrap">
                    <h1 className="text-[1.6em] font-semibold uppercase tracking-tight text-[#1693b5] md:leading-[4.2vw] lg:text-[4vw]">
                        Projects 
                    </h1>
                    <p className="isolate  my-4 mt-4 block w-[93%] text-wrap px-2 text-justify text-[3vh] font-normal text-white md:text-center lg:mt-[2vw] lg:text-[1.6vw]">
                        Here you will find some of my personal projects that I
                        created on the journey of my learning web development.
                        You will also get a link of my sites and github
                        repositories.
                    </p>
                </div>
            </div>

            {users.map((user, index) => (
                <div
                    key={index}
                    className="w-full bg-zinc-900 p-2 text-white lg:mt-[8vw]"
                >
                    <div className="mt-3 flex w-full flex-col gap-8 md:mt-4 md:items-center md:justify-center lg:flex-row">
                        <div className="h-[40vh] w-full rounded-lg bg-zinc-900 bg-cover md:h-[50vh] md:w-[60vw] lg:mx-[6vw] lg:h-[50vh] lg:w-1/2">
                            <img src={user.img} className="h-full w-full rounded-lg" alt="" />
                        </div>
                        <div className="flex w-full flex-col lg:mt-[2vw] lg:w-1/2">
                            <h1 className="text-left px-2 text-[6vh] font-semibold text-[#45b5d4] md:text-center md:text-3xl lg:w-[100%] lg:text-justify lg:text-[3vw]">
                                {user.title}
                            </h1>
                            <div className="mt-2 flex w-full items-center justify-between rounded-[20px] text-white md:mt-7 md:w-[100%] md:justify-center md:px-[4vw] lg:mt-[1vw] lg:px-[0vw]">
                                <p className="isolate mx-2 my-4 mt-4 block w-[100%] text-wrap text-justify text-[3vh] font-normal tracking-tight text-white md:font-medium md:leading-8 lg:mt-0 lg:px-0 lg:mx-0 lg:leading-[2vw] lg:text-[1.6vw]">
                                    {user.paragraph}
                                </p>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-4 px-2 md:items-center md:justify-center lg:justify-start lg:px-0">
                                <a
                                    href={user.WLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="rounded-md bg-blue-500 px-2 py-1 text-[2.5vh] text-white md:ml-2 md:mt-2 md:px-4 md:py-[1em] lg:py-[0.5em]">
                                        Link to Site
                                    </button>
                                </a>
                                <a
                                    href={user.GLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="rounded-md bg-blue-500 px-2 py-1 text-[2.5vh] text-white md:ml-2 md:mt-2 md:px-4 md:py-[1em] lg:py-[0.5em]">
                                        Link to Github
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Element>
        </div>
    )
}

export default Projects

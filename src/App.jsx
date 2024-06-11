import { useState } from "react"
import "./App.css"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import LandingPage from "./Components/LandinPage"
import Projects from "./Components/Projects"
import About2 from "./Components/About2"

function App() {
    const [count, setCount] = useState(0)

    return (
        <div
            className="h-full w-full bg-zinc-900"
            style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
        >
            <Navbar />
            <LandingPage />
            <About2 />
            <Projects />
            <Footer />
        </div>
    )
}

export default App

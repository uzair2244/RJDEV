import React from "react"
import Info from "./Components/Info"
import About from "./Components/About"
import Interest from "./Components/Interest"
import Footer from "./Components/Footer"

export default function App() {
    return (
        <div className="app--body">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}
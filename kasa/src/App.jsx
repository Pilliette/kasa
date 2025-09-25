import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import House from "./pages/House"
import Error from "./components/Error"
import Header from "./components/Header"
// import "./App.css"

function App() {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/house" element={<House />} />
                <Route path="*" element={<Error />} />
            </Routes>
            
            <footer>
                <span>Kasa</span>
            </footer>
        </div>
    )
}

export default App

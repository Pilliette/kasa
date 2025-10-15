import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import House from "./pages/House"
import Error from "./components/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/house/:id" element={<House />} />
                <Route path="*" element={<Error />} />
            </Routes>
            
            <Footer />
        </div>
    )
}

export default App

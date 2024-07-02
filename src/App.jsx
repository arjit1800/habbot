import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import VideoBanner from "./components/Video-Banner/VideoBanner"
import Works from "./components/Works/Works"

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <VideoBanner />
    <Contact />
    <Works />
    <Footer />
    </>
  )
}

export default App

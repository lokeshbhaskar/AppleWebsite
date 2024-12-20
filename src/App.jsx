import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Navbar from "./components/Navbar"
import Features from './components/Features'
import HowitsWork from "./components/HowitsWork"
import Footer from "./components/Footer"

 

const  App =() => {

  return (
     <main className="bg-black">
       <Navbar />
       <Hero />
       <Highlights />
       <Model />
       <Features />
       <HowitsWork />
       <Footer />
     </main>
  )
}

export default App

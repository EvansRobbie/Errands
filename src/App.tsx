import './App.css'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Frequents from './components/Frequents'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import { about, contacts, frequentsQ, hero, navbar, testimonials } from './data/data'
function App() {
 
  return (
    <div className="">
      <Navbar navbar={navbar}/>
    <Hero hero = {hero}/>
    <About about = {about}/>
    <Services/>
    <Testimonials testimonials={testimonials}/>
    <Frequents frequentsQ ={frequentsQ}/>
    <Contacts contacts = {contacts}/>
    <Footer/>
    </div>
  )
}

export default App

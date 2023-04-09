import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import { about, hero } from './data/data'
function App() {
 
  return (
    <div className="">
    <Hero hero = {hero}/>
    <About about = {about}/>
    </div>
  )
}

export default App

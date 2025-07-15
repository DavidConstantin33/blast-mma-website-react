import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About';
import Gallery from './Components/Gallery';
import Schedule from './Components/Schedule';
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <About/>
        <Gallery/>
        <Schedule/>
        <Pricing/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;

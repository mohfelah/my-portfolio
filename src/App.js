
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';
import Social from './components/Social';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Social/>
    <About/>
    <MyWork/>
    <Experience/>
    <Contact/>
    
    </div>
  );
}

export default App;

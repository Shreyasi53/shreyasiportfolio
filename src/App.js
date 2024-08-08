import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from'./components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// src/index.js or src/App.js
import '@fortawesome/fontawesome-free/css/all.min.css';



const App = () => {
     return (
       <div>
           <Header />
         <main>
            <Home />
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
           
         </main>
            <Footer/>
             
       </div>
     );
   };
   

export default App;

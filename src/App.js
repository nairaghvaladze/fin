import Navbar from "./Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Singin from "./page/Singin";
import Home from "./page/Home";
import News from "./page/News";
import Contact from "./page/Contact";
import Footer from "./page/Footer";
import About from "./page/About";
import Singup from "./page/Singup";










function App(){
    
 
    
    return(
        <>  <Navbar />
        <div>

        <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Home />} />
                 
                   
                    <Route path="/news" element={<News />} />  
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} /> 
                    <Route path="/singin" element={<Singin />} /> 
                    <Route path="/singup" element={<Singup />} />
                    <Route path="/news/:id" element={<News />} />                
          
                  
                   
                  
                </Routes>
            </BrowserRouter>
          
        </div>

      
        <Footer />
        </>
    
    )
}

export default App
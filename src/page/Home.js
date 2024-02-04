import React from "react";
import Singup from "./Singup";
import Singin from "./Singin";

import "./home.css"


function Home(){


    
    const alert1 = () => {
       

        
        
         document.getElementById("overlay1").style.display="none";
        document.getElementById("overlay").style.display="block";
       
        
    }
const alert = () => {
    
    document.getElementById("overlay1").style.display="block";
    document.getElementById("overlay").style.display="none";

    
}

return (
    <div className="container">
        <div className="row">
         
          
           

            <div className="col-sm-12 col-md-12  mt-3">
           <Singup />
           
            </div>
          
        </div>
    </div>
)

}
export default Home
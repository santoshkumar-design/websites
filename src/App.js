
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home"
import About from "./Pages/About"
import Pagenotfound from "./Pages/Pagenotfound"
import Menu from "./Pages/Menu"
import Contact from "./Pages/Contact"





function App() {
  return (
    
    <div>


<BrowserRouter>
<Routes>


<Route  path="/" element= {<Home/>}   />
<Route  path="/about" element= {<About/>}   />
<Route  path="/contact" element= {<Contact/>}   />
<Route  path="/menu" element= {<Menu/>}   />
<Route  path="*" element= {<Pagenotfound/>}   />

</Routes>
</BrowserRouter>

    </div>
    
    
  )
}

export default App;

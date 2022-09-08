import React from "react";
import {Route,Routes} from "react-router-dom"
import Example from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Resume from "./Component/Resume";
import Works from "./Component/Works";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
function App() {
  return (
    <div className="App">
      <Example/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/work" element={<Works/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;

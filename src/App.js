import React, { useState } from "react";
import Navbar from "./Navbar";
import Image from "./image"
  
function App() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
        <div className="App">
            <Navbar/>
            <Image/>
        </div>
    );
}
  
export default App;
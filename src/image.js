import React, { useState } from "react";
import Stats from "./stats"
import  Suggestions  from "./suggestions";
  
function Image() {
    const [file, setFile] = useState();
    const [state, setState] = useState(false);
    const [progress, setPrgoress] = useState(false);
    const [name, setName] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        setName(e.target.files[0].name)
    }

    const myTimeout = ()=>{
        setPrgoress(true);
        setTimeout(myGreeting, 5000);
    }

function myGreeting() {
  setPrgoress(false)
  setState(true)
}

  
    return (
        

<div style={{margin:"20px",display:"flex",justifyContent:"space-around"}}>
    <div>
<div class="card w-96 bg-primary-content shadow-xl" >
  <div class="card-body">
  <h2 class="text-black">Upload leaf/fruit Image</h2>
  <input type="file" class="btn-accent" onChange={handleChange}/>
  </div>
  <figure><img src={file}/></figure>
  {progress&&<progress class="progress  progress-success" style={{margin:"10px"}}></progress>}
</div>
<button style={{marginLeft:"290px",marginTop:"30px"}} class="btn btn-accent"   onClick={()=>myTimeout()}>Analyze</button>
</div>

{state&&<Stats name={name}/>}
{state&&<Suggestions name={name}/>}

</div>
    );
}
  
export default Image;
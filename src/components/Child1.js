import React from "react";


const Child1 =({selectedOption,setSelectedOption})=>{

    return (<div> 
    <h2>Child Component 1</h2>
    <button onClick={()=>{setSelectedOption("Option 1")}}>Option 1</button>
    </div>)
}

export default Child1;
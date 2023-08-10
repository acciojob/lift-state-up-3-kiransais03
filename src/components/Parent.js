import React,{useState} from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";


const Parent =()=>{

    let [selectedOption,setSelectedOption] = useState("");

    return (<div className="parent"> 
    <h1>Parent Component</h1>
      <Child1 selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
      <Child2 selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
      <p>Selected Option:{selectedOption}</p>
    </div>)
}

export default Parent;
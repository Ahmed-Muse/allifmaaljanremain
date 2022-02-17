
import React, { Component } from "react";

function Rayxaan(mymagac){
    return mymagac
}

function UserDefineComponent(myage){
    return <div className="test">
    <h6> {Rayxaan(magac.magaceeda)} age is {myage.age} </h6>
    </div>
}

const magac={
    magaceeda:"Rayxaan",
    magachooyo:"Xaawa",
}
function Allifmaal(){
    return "Welcome to Allifmaal Engineering"
}
const myvariable=<h6>{Allifmaal()}
<br/><br/> Rayxaan is our ICT Guru </h6>
const mylink = <a href="https://www.allifmaal.com"><button className="btn btn-success">Allifmaal</button> </a>;

  
  const myelement = <UserDefineComponent age={ 1+1 + "yrs" }  />;

  

class Mylearningpage extends React.Component{
   render(){
       return(
       <div>
           <br/>
           <h1>{myvariable}</h1>
           <br/>
           <p> cette ma fille et sa nom c'est  
               <strong> {Rayxaan(magac.magaceeda)}</strong>
               <br></br> {myelement}
           </p>
           {mylink}<br></br><br></br>
           form: <input type="text" placeholder="Allifmaal"/>
           <br/>
           <label>
          Select:
          <select >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
           <input type="submit" value="Submit" />
           </label>
        
           
       </div>
       )
   }
}
export default Mylearningpage


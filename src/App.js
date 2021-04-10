import './App.css';
import React from "react";
import imageInSrc from "./images/imageInSrc.jpg"
import mystyle from "./style.css"

const App = () => {
  return (
    <React.Fragment>
      <div style = {{border: "solid 1px gray" , maxWidth:"100vw", boxShadow : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
        <h1 className ="title red" style = {{mystyle}}>Your name here</h1>
        <div className = 'row'>
          <img src = {imageInSrc}  width="320" height="200" style = {{padding : 10}} />
        </div>

        <div className = 'row'>
          <img src="/imageInPublic.jpg"  width="320"  height="200" style = {{padding : 10}} />
        </div>
        
      </div>

      <video width="320" height="240" controls style = {{padding : 10}}>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
   </React.Fragment>
  );
}

export default App;

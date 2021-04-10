import './App.css';
import React from "react";
import imageInSrc from "./images/imageInSrc.jpg"
import "./style.css"

const App = () => {
  return (
    <React.Fragment>
      <div className = 'container' >
        <h1 className ="title red" >Your name here</h1>
        <div className = 'row'>
          <img src = {imageInSrc}  width="320" height="200"/>
        </div>

        <div className = 'row'>
          <img src="/imageInPublic.jpg"  width="320"  height="200"/>
        </div>
        
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
   </React.Fragment>
  );
}

export default App;

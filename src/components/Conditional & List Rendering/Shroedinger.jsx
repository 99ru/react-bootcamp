import React, { useState } from "react";
import frontend from "../../assets/frontend.jpg";
import backend from "../../assets/backend.gif";
import Chest from "../../assets/Chest.webp";

const Shroedinger = () => { 
  const [open, setOpen] = useState(false);  
  const frontendImg = frontend;
  const backendImg = backend;
  const randomImg = Math.random() > 0.5 ? frontendImg : backendImg //50% chance

 if (open) {
    return (
      <div>
        <h1>you got an</h1>
        <img src={randomImg} alt="shroedinger" />
        <div className="restart-button">
          <button onClick={() => setOpen(!open)}> 
            {open ? "Try again" : "Open"} 
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p>Click on the chest!</p>
      <img onClick={() => setOpen(true)} src={Chest} alt="chest" className="ShroedingersChest" width="250"/>
    </div>
  );
} 

export default Shroedinger;

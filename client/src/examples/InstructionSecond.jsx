import React from "react";
import { usePlayer} from "@empirica/core/player/classic/react";
import { Button } from "../components/Button";

export function InstructionSecond() {
  const textStyle = {
    maxWidth: '600px',  // Adjust this value as needed
    margin: '0 auto',   // This centers the text block
  };
  const player = usePlayer();

  const buttonContainerStyle = {
    display: 'flex',       // Enables flexbox
    justifyContent: 'center', // Centers content horizontally in the flex container
    marginTop: '20px',     // Optional: adds space above the button
  };
  
  function handleSubmit() { 
    player.stage.set("submit", true);
  }

  return (
    <div style={textStyle}>
      <p> <strong>{"Please read the following information as it is vital to the experiment."} </strong> </p>
      <br>{}</br>
      <p> {"In Round 2, you will complete the task in collaboration with randomly assigned teammates, who also completed Round 1. "} </p>
      <br>{}</br>     
      <p> {"Please communicate with your teammates using the"} <strong>{"chatbox"}</strong> {"which will appear on the right side of the page. All team members should agree and submit the same final answer."} </p>
     <br>{}</br>     
     <div style={buttonContainerStyle}>
        <Button handleClick={handleSubmit} style={{ backgroundColor: 'blue', color: 'white' }}>
          Continue
        </Button>
      </div>
   
   </div>
  );
}



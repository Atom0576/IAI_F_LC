import React from "react";
import { usePlayer} from "@empirica/core/player/classic/react";
import { Button } from "../components/Button";

export function InstructionSecond3() {
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
     <p>
      {"If you are assigned an "} <strong>AI manager</strong>{", we will show you a "} 
      <strong>face</strong> {" that represents them, along with information about their "}
      <strong>style</strong>{"."}
    </p>
    <br />
    <p>
      {"This "} <strong>face</strong> {" is designed to reflect the identity of the "}
      <strong>AI manager</strong> {" based on how it was trained. It is part of how we help you get a sense of who your manager is."}
    </p>
    <br />
    <p>
      {"For "} <strong>human managers</strong>{", we will also provide some brief background information. Gender for human managers is based on how the manager identifies."}
    </p>
     <div style={buttonContainerStyle}>
        <Button handleClick={handleSubmit} style={{ backgroundColor: 'blue', color: 'white' }}>
          Continue
        </Button>
      </div>
   </div>
  );
}



import React from "react";
import { usePlayer} from "@empirica/core/player/classic/react";
import { Button } from "../components/Button";

export function InstructionSecond2() {
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
     <p>After this round, <strong>the best player on your team will receive an extra award of £0.50</strong>.</p>
      <p>The selection process depends on whether your team is randomly assigned an AI manager:</p>
      <ul>
        <li><strong>Self-Management</strong>: If there is no manager, the best player will be the one with the highest teammate-evaluated contribution score, which you will rate after this round.</li>
        <li><strong>Manager-Assigned</strong>: If an AI manager is assigned, they will select the best player based on multiple factors evaluated during this round, such as problem-solving ability and communication skills.</li>
      </ul>

     <div style={buttonContainerStyle}>
        <Button handleClick={handleSubmit} style={{ backgroundColor: 'blue', color: 'white' }}>
          Continue
        </Button>
      </div>
   </div>
  );
}


//     <p> {"In this round, your performance may be monitored by a"} <strong>{"randomly assigned manager."}</strong> </p>
//     <br>{}</br>
//     <p> {"If you are assigned an AI manager, the manager will select the"} <strong>{"best player to receive an extra award of 0.5£"}</strong> {"at the end of the experiment."} </p>
//     <br>{}</br>     
//     <p> {"The best player is chosen based on multiple factors evaluated during this round, such as problem-solving ability and communication skills."} </p>

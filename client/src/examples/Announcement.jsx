import React from "react";
import { usePlayer, useGame } from "@empirica/core/player/classic/react";
import { Button } from "../components/Button";
import humanImage from "../components/humanImage.png";
import AIImage from "../components/AIImage.png";


export function Announcement() {
  const player = usePlayer();
  const game = useGame();
  //const playerId = player.id; // Get the player's ID
  const playerId = player.id.toString();
  const displayId = playerId.slice(-3); // Gets the last 3 characters

  const randomPlayerId = game.get("randomPlayerId").toString().slice(-3);

  function handleSubmit() {
    player.stage.set("submit", true);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "0", margin: "0" }}>
      <p>{"The best player chosen by your AI manager is:"} </p>
      <p className="text-center text-lg font-semibold mb-0"> {randomPlayerId}  </p>
      <br>{}</br>  
      <br>{}</br>     
      <Button handleClick={handleSubmit} style={{ backgroundColor: 'blue', color: 'white' }}>
      Continue
      </Button>
    </div> 
  );
}

//<img src={humanImage} alt="Human Manager" style={{ width: "150px", height: "150px", margin: "20px 0" }} />

//The best player chosen by your Human manager is:

//<p className="text-left text-lg font-semibold mb-0">Your ID: {displayId}</p>

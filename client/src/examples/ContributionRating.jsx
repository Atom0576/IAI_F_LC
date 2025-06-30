import {
  Slider,
  usePlayer,
  usePlayers,
  useStage,
} from "@empirica/core/player/classic/react";
import React from "react";
import { Button } from "../components/Button";

export function ContributionRating() {
  const containerStyle = {
    maxWidth: '600px',
    margin: '10px auto 50px', // Align the container centrally with top and bottom margin
  };

  const leftAlignedStyle = {
    textAlign: 'left',
    width: '100%',
    margin: '0 0 20px',
  };

  const player = usePlayer();
  const players = usePlayers();
  const stage = useStage();

  // Event handler for slider changes
  function handleChange(e, targetPlayerId) {
    // Store rating for each player separately under the current player's data
    player.round.set(`ratingFor_${targetPlayerId}`, e.target.valueAsNumber);
  }

  function handleSubmit() {
    player.stage.set("submit", true);
  }

  // Create sliders for each player
  const playerSliders = players.map((targetPlayer) => {
    // Get the initial value for each player's contribution rating
    const initialRating = player.round.get(`ratingFor_${targetPlayer.id}`) ?? 0; // Default to 0 if no rating is set

    return (
      <div key={targetPlayer.id} className="slider-container" style={{ marginBottom: '20px', width: '100%', boxSizing: 'border-box', padding: '0 15px' }}>  
        <div>Rate {targetPlayer.id === player.id ? "Your" : `Player ${targetPlayer.id.toString().slice(-3)}`} Contribution:</div>
        <Slider
          value={initialRating}
          onChange={(e) => handleChange(e, targetPlayer.id)}
          min={0}
          max={10}
          style={{ width: '100%' }} // Ensure slider width matches container width
        />
      </div> 
    ); 
  });

  return (
    <div style={containerStyle} className="flex flex-col items-center space-y-10">
      <h2 style={{ margin: '0 0 20px' }}>Please use the slider bar to rate your own and your teammates' contributions to the teamwork on a scale from 0 (very weak) to 10 (very strong). </h2>  
      <h2 style={leftAlignedStyle}> Your ratings are private and will not be shared with your teammates. </h2>  
     <div className="sliders-container" style={{ width: '100%' }}>
        {playerSliders}
      </div>
      <Button handleClick={handleSubmit} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white">
        Submit
      </Button>
    </div>
  );
}

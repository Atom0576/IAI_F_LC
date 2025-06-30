import {
  Slider,
  usePlayer,
  usePlayers,
  useStage,
} 
from "@empirica/core/player/classic/react";
import React from "react";
//import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import "../../node_modules/@empirica/core/dist/player-classic-react.css";
//import glassPuzzle from "../components/glass_puzzle.png";
import robber1 from "../components/robber1.png";
import robber1_new from "../components/robber1_new.png";

export function JellyBeansCopy() {

  const textStyle = {
    maxWidth: '600px',  // Adjust this value as needed
    margin: '0 auto',   // This centers the text block
  };

  const player = usePlayer();
  const players = usePlayers();
  const stage = useStage();

  // Initialize slider with the value from the previous round if it exists
  const previousGuess = player.get("previousGuess");
  const initialSliderValue = previousGuess ?? 1; // Default value if no previous guess

  function handleChange(e, p) {
    if (p.id === player.id) {
      player.round.set("guess", e.target.valueAsNumber); 
    }
  }

  function handleSubmit() {
    const currentGuess = player.round.get("guess") ?? initialSliderValue;
    player.set("previousGuess", currentGuess);
    player.round.set("guess", currentGuess);  // Ensuring the value is updated in the current round
    player.stage.set("submit", true);
}

  //function handleSubmit() {
    // Store the current round's guess for the next round
   // player.set("previousGuess", player.round.get("guess"));
   // player.stage.set("submit", true);
  //}

  const teammateIds = players.filter(p => p.id !== player.id).map(p => p.id.toString().slice(-3));
  const teammatesText = teammateIds.length > 0 ? `${teammateIds.join(", ")}` : "You have no teammates.";

  
 //let jelly = <JellyBeanPile />;
  let jelly = <JellyBeanPile teammatesText={teammatesText} />;

  const isResultStage = stage.get("name") === "Result";


  // Separate sliders for other players and the current player
    const otherPlayersSliders = players.filter(p => p.id !== player.id).map((p) => {
    // Retrieve previous guess for each player
    const previousGuess = p.get("previousGuess");
    const initialSliderValueForPlayer = previousGuess ?? 1; // Default value
  
    return (
      <div key={p.id} className="slider-container">
        <div>Player {p.id.toString().slice(-3)}'s Guess:</div>
        
        <Slider
          value={p.round.get("guess") ?? initialSliderValueForPlayer}
          onChange={(e) => handleChange(e, p)}
          disabled={stage.get("name") !== "Answer" || p.id !== player.id}
          min={1}
          max={5}
        />
      </div> 
    ); 
  });
  

  // Slider for the current player
  const currentPlayerSlider = (
    <div key={player.id} className="slider-container">
      <div>Your Guess:</div>
      <Slider
        value={player.round.get("guess") ?? initialSliderValue}
        onChange={(e) => handleChange(e, player)}
        //disabled={stage.get("name") !== "Answer"}
        min={1}
        max={5}
      />
    </div>
  );

  return (
    <div style = {textStyle} className="md:min-w-96 lg:min-w-128 xl:min-w-192 flex flex-col items-center space-y-10">
      <div style={{ marginBottom: '50px' }} className="flex flex-col items-center space-y-0">
        {/* ...other elements like text and image... */}
        {jelly}
      </div>
      <div style = {textStyle} className="sliders-container">
        {!isResultStage ? (
          <>
            {otherPlayersSliders}
            {currentPlayerSlider}
          </>
        ) : null}
      </div>
      <Button handleClick={handleSubmit} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white">
        Submit
      </Button>
    </div>
  );
}


//Your team is assigned a <strong> Human</strong> manager.
function JellyBeanPile({ teammatesText }) {
  return (
    <div className="h-105 w-175 pb-10">
      <p className="text-center text-md font-semibold mb-0"></p>
      <p style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center' }} className="text-center text-md font-normal mb-0">
        An <strong>AI manager</strong> is assigned to your team.
      </p>
      <p className="text-center text-md font-normal mb-0"> Your teammates: <strong>{ teammatesText }</strong>. </p>
      <p className="text-left text-md font-normal mb-0"> Now you are solving the same problem with your teammates. Please do not submit the answer until all team members agree. All team members should submit the same answer.</p>
      <br>{}</br> 
      <p style={{ marginBottom: '0px' }} className="text-left text-md font-normal mb-0"> Remember, a robber in blue pants, a striped hat, and a mustache stole a watch! 
      Below, you'll find the guesses made by your teammates in the previous round. 
      Please use the chatbox on the right side to discuss with your teammates. </p>

      <div
        className="h-70 w-full bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage:
          `url(${robber1_new})` 
        }}
        alt="Jelly Beans Pile"
      />
    </div>
  );
}


